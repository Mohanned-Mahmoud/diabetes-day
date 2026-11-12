import { NextResponse } from 'next/server';
import { sql, ensureContactSubmissionsTable } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, mobile, city } = body;

    // Basic Validation
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'يرجى كتابة الاسم بالكامل (حرفين على الأقل)' },
        { status: 400 }
      );
    }

    if (!mobile || typeof mobile !== 'string' || mobile.trim().length < 8) {
      return NextResponse.json(
        { success: false, error: 'يرجى كتابة رقم هاتف صحيح (8 أرقام على الأقل)' },
        { status: 400 }
      );
    }

    if (!city || typeof city !== 'string' || city.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'يرجى كتابة المدينة / الدولة' },
        { status: 400 }
      );
    }

    // Client metadata
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ipAddress = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    // Ensure the table exists in Neon PostgreSQL
    await ensureContactSubmissionsTable();

    // Insert into Neon Database
    const [inserted] = await sql`
      INSERT INTO contact_submissions (
        full_name,
        mobile,
        city,
        agreed_at,
        ip_address,
        user_agent
      ) VALUES (
        ${fullName.trim()},
        ${mobile.trim()},
        ${city.trim()},
        NOW(),
        ${ipAddress},
        ${userAgent}
      )
      RETURNING id, created_at;
    `;

    return NextResponse.json(
      {
        success: true,
        message: 'تم تسجيل بياناتك بنجاح وسيتواصل معك الأخصائي قريباً',
        data: {
          id: inserted.id,
          createdAt: inserted.created_at,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'حدث خطأ أثناء حفظ البيانات، يرجى المحاولة مرة أخرى.',
      },
      { status: 500 }
    );
  }
}

