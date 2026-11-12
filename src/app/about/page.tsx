import Link from 'next/link';
import {
  ArrowLeft,
  BookOpen,
  CalendarCheck,
  ChevronDown,
  ClipboardCheck,
  Footprints,
  Route,
} from 'lucide-react';

const goals = [
  {
    title: 'رفع الوعي',
    description: 'تبسيط المعلومات المتعلقة بالسمنة وأمراض السكري وتصحيح المفاهيم الشائعة.',
    icon: BookOpen,
  },
  {
    title: 'دعم العادات الصحية',
    description: 'تشجيع خطوات يومية تساعد على تحسين الصحة وجودة الحياة.',
    icon: Footprints,
  },
  {
    title: 'دعم الكشف المبكر',
    description: 'التعريف بعوامل الخطورة وأهمية التقييم والفحوص المناسبة.',
    icon: ClipboardCheck,
  },
  {
    title: 'تيسير الإحالة إلى الرعاية',
    description: 'توجيه المستفيدين الذين تستدعي مؤشراتهم تقييماً إضافياً إلى الجهات المناسبة، بما يشمل مراكز الرعاية الصحية الأولية ومقدمي الرعاية في القطاع الخاص، وفق المسارات المتاحة.',
    icon: Route,
  },
  {
    title: 'دعم المتابعة واستمرارية الرعاية',
    description: 'مساعدة المستفيد، بموافقته، على استكمال خطوة الإحالة والوصول إلى الخدمة المناسبة، وتشجيعه على متابعة التقييم والرعاية لدى مقدم الخدمة.',
    icon: CalendarCheck,
  },
];

const journey = [
  {
    number: '١',
    title: 'تعرّف',
    description: 'اطّلع على معلومات مبسطة عن السمنة وأمراض السكري.',
  },
  {
    number: '٢',
    title: 'قيّم مؤشراتك الأولية',
    description: 'استخدم حاسبة مؤشر كتلة الجسم، واستفد من القياسات أو التقييمات المتاحة في الفعالية.',
    href: '/portal',
  },
  {
    number: '٣',
    title: 'افهم النتيجة',
    description: 'تعرّف على دلالة المؤشرات وحدودها، وما إذا كانت تستدعي تقييماً إضافياً.',
  },
  {
    number: '٤',
    title: 'تعرّف على مسار الرعاية',
    description: 'عند الحاجة، يساعدك الفريق في معرفة خدمات التقييم أو الاستشارة المتاحة لدى الجهات المشاركة.',
  },
  {
    number: '٥',
    title: 'استكمل الإحالة',
    description: 'اختر الاستفادة من المسار المتاح، مباشرة أو من خلال رابط أو رمز وصول، بحسب الخدمة والجهة المقدمة لها.',
  },
  {
    number: '٦',
    title: 'تابع خطوتك',
    description: 'يدعم فريق الحملة تنسيق الوصول إلى الخدمة ومتابعة خطوة الإحالة وفق الآلية المتاحة وبموافقتك، بينما يتولى مقدم الرعاية التقييم الطبي وخطة العلاج والمتابعة السريرية.',
  },
];

const faqs = [
  {
    question: 'ما هي مبادرة توازنها صح، وما علاقتها باليوم العالمي للسكري و اسبوع التوعية بالسمنة؟',
    answer: '«توازنها صح» حملة مجتمعية للتوعية بالسمنة وأمراض السكري تجمع بين الأنشطة الميدانية والأدوات الرقمية لدعم الكشف المبكر والوصول إلى الرعاية المناسبة.',
  },
  {
    question: 'هل تقدم المنصة استشارات طبية رسمية؟',
    answer: 'يساعدك فريق الحملة على معرفة خدمات التقييم أو الاستشارة المتاحة لدى الجهات المشاركة. ويتولى مقدم الرعاية التقييم الطبي وخطة العلاج والمتابعة السريرية.',
  },
  {
    question: 'كيف يمكنني الاستفادة من المنصة التفاعلية؟',
    answer: 'يمكنك استخدام حاسبة مؤشر كتلة الجسم من داخل الموقع للتعرّف على أحد مؤشراتك الأولية.',
  },
  {
    question: 'هل بياناتي محمية عند التسجيل؟',
    answer: 'تُحفظ بيانات الاستشارة بصورة آمنة لحماية خصوصيتك.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-ambient-mesh pb-20 pt-10 sm:pt-16">
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:space-y-24 sm:px-6 lg:px-8">
        <section aria-labelledby="campaign-heading">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-bold text-navy">عن الحملة ورؤيتها</p>
            <h1 id="campaign-heading" className="mt-3 text-3xl font-black leading-tight text-navy sm:text-4xl lg:text-5xl">
              توعية تصل إليك… وخطوة نحو الرعاية
            </h1>
            <div className="mt-6 space-y-4 text-base leading-loose text-slate-700">
              <p>
                «توازنها صح» حملة مجتمعية للتوعية بالسمنة وأمراض السكري، تصل إلى أفراد المجتمع عبر المولات والجامعات والمرافق الصحية ومحطات النقل والأماكن العامة، إلى جانب قنواتها الرقمية.
              </p>
              <p>
                تعمل الحملة بالتعاون مع شركاء من القطاع الصحي والقطاع الخاص والقطاع غير الربحي، لتقديم معلومات مبسطة، وتشجيع الكشف المبكر، وتسهيل توجيه المستفيدين إلى خدمات التقييم والرعاية المناسبة، ودعم استكمال خطوات المتابعة.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border-s-4 border-primary bg-primary/10 p-5">
              <h2 className="text-lg font-bold text-navy">رؤيتنا</h2>
              <p className="mt-2 leading-loose text-slate-700">
                مجتمع أكثر وعياً بصحته، يضع الكشف المبكر ضمن أولوياته، ويصل إلى الرعاية المناسبة عبر مسارات واضحة وميسّرة.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="goals-heading">
          <h2 id="goals-heading" className="text-2xl font-black text-navy sm:text-3xl">أهداف الحملة</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {goals.map(({ title, description, icon: Icon }, index) => (
              <li
                key={title}
                className={'glass-panel rounded-3xl border border-slate-200/80 p-6 shadow-sm ' + (index < 3 ? 'lg:col-span-2' : 'lg:col-span-3')}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-navy">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-700">{description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="journey-heading" className="mx-auto max-w-3xl">
          <h2 id="journey-heading" className="text-2xl font-black text-navy sm:text-3xl">رحلتك مع توازنها صح</h2>
          <p className="mt-3 leading-loose text-slate-700">
            نساعدك على فهم المعلومات الصحية والخطوة التالية المناسبة لك، من التوعية والتقييم الأولي إلى الوصول للرعاية والمتابعة.
          </p>
          <ol className="mt-8 space-y-4">
            {journey.map(({ number, title, description, href }, index) => (
              <li key={number} className="relative flex gap-4 sm:gap-6">
                {index < journey.length - 1 && (
                  <span aria-hidden="true" className="absolute -bottom-4 start-5 top-10 w-px bg-primary" />
                )}
                <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy font-bold text-white">
                  {number}
                </span>
                <div className="glass-panel min-w-0 flex-1 rounded-2xl border border-slate-200/80 p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-700">{description}</p>
                  {href && (
                    <Link href={href} className="mt-3 inline-flex items-center gap-2 font-bold text-navy underline underline-offset-4">
                      افتح حاسبة مؤشر كتلة الجسم
                      <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl">
          <h2 id="faq-heading" className="text-2xl font-black text-navy sm:text-3xl">الأسئلة الشائعة</h2>
          <div className="mt-5 space-y-4">
            {faqs.map(({ question, answer }, index) => (
              <details key={question} name="campaign-faq" open={index === 0} className="group glass-panel rounded-2xl border border-slate-200/80 p-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-bold text-navy [&::-webkit-details-marker]:hidden">
                  {question}
                  <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 group-open:rotate-180" />
                </summary>
                <p className="mt-3 leading-relaxed text-slate-700">{answer}</p>
              </details>
            ))}
          </div>
          <Link href="/contact" className="mt-6 inline-flex rounded-xl bg-navy px-5 py-2.5 font-bold text-white hover:bg-navy-light">
            تواصل معنا
          </Link>
        </section>
      </div>
    </div>
  );
}
