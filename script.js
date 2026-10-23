/**
 * ==========================================================================
 * LOS SANTOS POLICE DEPARTMENT (LSPD)
 * SPECIAL INVESTIGATIONS DIVISION — CASE LS-001
 * Vanilla JavaScript Engine
 * ==========================================================================
 * 
 * --------------------------------------------------------------------------
 * دليل المحقق لإضافة أو تعديل الأدلة:
 * --------------------------------------------------------------------------
 * 1. ضع ملف الصورة أو الفيديو أو المستند داخل المجلد المناسب:
 *    - الصور: assets/images/
 *    - مقاطع الفيديو: assets/videos/
 *    - المستندات: assets/documents/
 * 2. أضف قيدًا جديدًا أو عدّل قيدًا قائمًا في مصفوفة `EVIDENCE_DATA` أدناه.
 * 3. حدد `filePath` بالمسار النسبي مثل: "assets/images/اسم_الصورة.png"
 * 4. إذا كان الملف متوفرًا بالفعل، اجعل `isAvailable: true`
 * 5. احفظ الملف، وسيقوم الموقع بتحديث المعرض والإحصائيات تلقائيًا دون خادم.
 * --------------------------------------------------------------------------
 */

// ==========================================================================
// 1. قاعدة بيانات الأدلة المصورة والرقمية (EVIDENCE DATABASE)
// ==========================================================================
const EVIDENCE_DATA = [
    // ----------------- الأدلة المتوفرة والمحرزة فعلياً (الصور الأصلية) -----------------
    {
        id: "EVD-SNP-001",
        title: "رصد القناص متمركزاً أعلى مبنى IAA المقابل للقسم",
        category: "تسجيلات المراقبة المتعلقة بعمليات القنص",
        fileType: "image",
        filePath: "assets/images/لحضة اطلاق النار بسنايبر على قسم الشرطة.png",
        originalFileName: "لحضة اطلاق النار بسنايبر على قسم الشرطة.png",
        description: "لقطة مراقبة ليلية توثق وجود عنصر ملثم ومسلح ببندقية قنص متمركز أعلى حافة مبنى وكالة التحقيقات (IAA) المقابل لمقر شرطة لوس سانتوس، مستعداً لاستهداف أي تحركات أمنية.",
        recordDate: "غير محدد",
        source: "كاميرات المراقبة الجنائية ووحدات الرصد الميداني",
        status: "مؤكد ومحرز جنائياً",
        relevance: "يدعم التهمة 1 والتهمة 2 بشأن تنفيذ عمليات قنص من المباني المقابلة لتعطيل الاستجابة الأمنية ومنع نقل الروبوت.",
        isAvailable: true,
        relatedChargeIds: ["CHG-01", "CHG-02", "CHG-03"]
    },
    {
        id: "EVD-SNP-002",
        title: "وضعية الاستعداد والتهديف للقناص فوق السطح",
        category: "تسجيلات المراقبة المتعلقة بعمليات القنص",
        fileType: "image",
        filePath: "assets/images/لحضة اطلاق النار بسنايبر على قسم الشرطة 2.png",
        originalFileName: "لحضة اطلاق النار بسنايبر على قسم الشرطة 2.png",
        description: "صورة مقربة تظهر جانب القناص بملابس سوداء وبنطال فاتح وقناع يخفي ملامحه وهو يرفع بندقية القنص في وضعية إطلاق النار المباشر، وتظهر خلفه إضاءات المدينة والتلال.",
        recordDate: "غير محدد",
        source: "منظومة المراقبة البصرية المتقدمة",
        status: "مؤكد ومحرز جنائياً",
        relevance: "تطابق السلاح وهيئة المنفذ مع مواصفات ألكساندر بتروف خلال مشاركته في حصار وتعطيل الدعم الأمني.",
        isAvailable: true,
        relatedChargeIds: ["CHG-01", "CHG-02"]
    },
    {
        id: "EVD-SNP-003",
        title: "زاوية الإشراف المباشر على مدخل وباحة مقر شرطة لوس سانتوس",
        category: "الأدلة المتعلقة بالهجمات على الشرطة",
        fileType: "image",
        filePath: "assets/images/لحضة اطلاق النار بسنايبر على قسم الشرطة 3.png",
        originalFileName: "لحضة اطلاق النار بسنايبر على قسم الشرطة 3.png",
        description: "تسجيل عالي الموضع يوثق وقوف القناص مشرفاً بالكامل على باحة ومدخل مقر شرطة لوس سانتوس (LSPD)، ويظهر بوضوح شعار القسم الدائري والأعلام عند المدخل أثناء تمركزه.",
        recordDate: "غير محدد",
        source: "تسجيلات المراقبة الجنائية الموثقة",
        status: "مؤكد ومحرز جنائياً",
        relevance: "يثبت تعمد استهداف باحة الشرطة وممرات خروج الدوريات لتعطيل استجابة الشرطة ومنع تأمين نقل الروبوت.",
        isAvailable: true,
        relatedChargeIds: ["CHG-01", "CHG-02", "CHG-03"]
    },

    // ----------------- الأدلة المصورة والرقمية المضافة حديثاً -----------------
    {
        id: "EVD-EXE-IMG-001",
        title: "لقطة كاميرا المراقبة أثناء واقعة إطلاق النار (مسرح الإعدام المزعوم)",
        category: "تسجيلات واقعة إطلاق النار",
        fileType: "image",
        filePath: "assets/images/صورة اثناء الطلق.png",
        originalFileName: "صورة اثناء الطلق.png",
        description: "لقطة كاميرا مراقبة توثق مسرح الواقعة لحظة إجبار الضابط ريك جونير بالزي الشرطي الرسمي على الوقوف في مواجهة بتروف، مع رصد فني جنائي صريح يدون: «لم يكن الروبوت في منظور الكاميرا»، مما يؤكد زاوية التوثيق الخفية عبر الروبوت لابتزاز الضابط.",
        recordDate: "موثق ضمن وقائع القضية",
        source: "تسجيلات المراقبة الجنائية ومطابقة مسرح الواقعة",
        status: "مؤكد ومحرز جنائياً",
        relevance: "تطابق مسرح الواقعة وهيئة المتواجدين مع التسجيلات المرئية للروبوت ويثبت ملابسات الإكراه المادي بحق الضابط ريك.",
        isAvailable: true,
        relatedChargeIds: ["CHG-04", "CHG-05"]
    },
    {
        id: "EVD-EXE-001",
        title: "توثيق إطلاق النار على بتروف تحت التهديد",
        category: "تسجيلات واقعة إطلاق النار",
        fileType: "video",
        filePath: "assets/videos/توثيق إطلاق النار على بتروف تحت التهديد.mp4",
        posterPath: "assets/images/صورة اثناء الطلق.png",
        originalFileName: "توثيق إطلاق النار على بتروف تحت التهديد.mp4",
        description: "المقطع المصور بواسطة الروبوت التابع للبروفيسور والذي وثق لحظة إطلاق الضابط ريك جونير النار تحت الإكراه والتهديد المباشر بالسلاح، واستُخدم لاحقاً لمحاولة ابتزازه وطلب معلومات شرطية.",
        recordDate: "موثق ضمن وقائع القضية",
        source: "منظومة التصوير المدمجة في روبوت البروفيسور",
        status: "مؤكد ومحرز جنائياً",
        relevance: "العنصر المحوري في إثبات واقعة الإكراه وخداع الضابط ريك واستخدام المقطع في الابتزاز اللاحق.",
        isAvailable: true,
        relatedChargeIds: ["CHG-04", "CHG-05"]
    },
    {
        id: "EVD-MED-001",
        title: "التسجيل المشفر: إسعاف وعلاج بتروف بواسطة البروفيسور",
        category: "تسجيلات التدخل الطبي بعد إطلاق النار",
        fileType: "video",
        filePath: "assets/videos/التسجيل المشفر إسعاف وعلاج بتروف بواسطة البروفيسو.mp4",
        originalFileName: "التسجيل المشفر إسعاف وعلاج بتروف بواسطة البروفيسو.mp4",
        description: "التسجيل المستخرج من كاميرات المراقبة المشفرة على متن السفينة الحربية، يثبت بشكل قاطع أن بتروف لم يفارق الحياة إثر إطلاق النار، بل تلقى رعاية طبية وتدخلاً عاجلاً من البروفيسور نفسه في سرية تامة دون علم ريك.",
        recordDate: "موثق ضمن وقائع القضية",
        source: "كاميرات السفينة الحربية المشفرة",
        status: "مؤكد ومحرز جنائياً",
        relevance: "الدليل الحاسم الذي أسقط مسؤولية القتل عن ريك جونير وأثبت بقاء بتروف على قيد الحياة وتدبير الخدعة الممنهجة.",
        isAvailable: true,
        relatedChargeIds: ["CHG-05", "CHG-06"]
    }
];

// ==========================================================================
// 2. لائحة التهم الجنائية (CHARGES LIST)
// ==========================================================================
const CHARGES_DATA = [
    {
        id: "CHG-01",
        code: "ت-01",
        desc: "المشاركة في الهجمات المسلحة التي استهدفت عناصر شرطة لوس سانتوس.",
        accusedName: "ألكساندر بتروف (لوسفر)",
        accusedRole: "المساعد الأول للبروفيسور",
        relatedEvidence: ["EVD-SNP-001", "EVD-SNP-002", "EVD-SNP-003"],
        result: "أدلة داعمة للاتهام",
        resultType: "support",
        detailsText: "ثبوت قيام مجموعات مسلحة مرتبطة بالمنظمة بمهاجمة الدوريات والمقر الرئيسي لعرقلة التدخل الأمني."
    },
    {
        id: "CHG-02",
        code: "ت-02",
        desc: "تنفيذ عمليات قنص بهدف تعطيل الاستجابة الأمنية.",
        accusedName: "ألكساندر بتروف (لوسفر)",
        accusedRole: "المساعد الأول للبروفيسور",
        relatedEvidence: ["EVD-SNP-001", "EVD-SNP-002", "EVD-SNP-003"],
        result: "أدلة داعمة للاتهام",
        resultType: "support",
        detailsText: "تمركز القناص أعلى مبنى IAA المشرف على باحة ومخارج مركز شرطة لوس سانتوس وإطلاق النار لتقييد حركة الضباط."
    },
    {
        id: "CHG-03",
        code: "ت-03",
        desc: "استهداف عملية نقل الروبوت المضبوط.",
        accusedName: "ألكساندر بتروف / البروفيسور",
        accusedRole: "قيادة وعناصر المنظمة",
        relatedEvidence: ["EVD-SNP-001", "EVD-SNP-003"],
        result: "أدلة داعمة للاتهام",
        resultType: "support",
        detailsText: "التخطيط والتنفيذ للهجوم على خط سير قوة الشرطة المكلفة بنقل الروبوت المصادر خلال عملية نائب الرئيس ريموند ريد."
    },
    {
        id: "CHG-04",
        code: "ت-04",
        desc: "اختطاف الضابط ريك جونير وتسليمه إلى البروفيسور.",
        accusedName: "ألكساندر بتروف / البروفيسور",
        accusedRole: "المنظمة السرية",
        relatedEvidence: ["EVD-EXE-IMG-001", "EVD-EXE-001"],
        result: "أدلة داعمة للاتهام",
        resultType: "support",
        detailsText: "احتجاز ضابط شرطة دون وجه حق، واقتياده قسراً تحت تهديد السلاح إلى مقر البروفيسور لممارسة الضغط والابتزاز."
    },
    {
        id: "CHG-05",
        code: "ت-05",
        desc: "المشاركة في مخطط الإيهام بإعدام بتروف وابتزاز ريك جونير.",
        accusedName: "ألكساندر بتروف والبروفيسور",
        accusedRole: "المتهمان الرئيسيان",
        relatedEvidence: ["EVD-EXE-IMG-001", "EVD-EXE-001", "EVD-MED-001"],
        result: "أدلة داعمة للاتهام",
        resultType: "support",
        detailsText: "افتعال عملية الإعدام المصورة وتلقي بتروف علاجاً سرياً فور إطلاق النار، واستغلال الواقعة لإكراه وابتزاز الضابط ريك."
    },
    {
        id: "CHG-06",
        code: "ت-06",
        desc: "التآمر مع المنظمة السرية لتعطيل العمليات الأمنية.",
        accusedName: "ألكساندر بتروف والبروفيسور",
        accusedRole: "قيادة التنظيم",
        relatedEvidence: ["EVD-EXE-IMG-001", "EVD-MED-001", "EVD-SNP-001"],
        result: "أدلة داعمة للاتهام",
        resultType: "support",
        detailsText: "إدارة تنظيم مسلح وتطوير أنظمة تسليح وذكاء اصطناعي خارج إطار القانون واستهداف المؤسسات الأمنية وسيادة القانون."
    }
];

// ==========================================================================
// 3. الخط الزمني للأحداث (CHRONOLOGICAL TIMELINE)
// ==========================================================================
const TIMELINE_EVENTS = [
    {
        step: "01",
        title: "تطوير البروفيسور للروبوت المتقدم",
        desc: "قيام البروفيسور بأبحاث غير مرخصة لتطوير روبوتات قتالية متقدمة مدعومة بالذكاء الاصطناعي وأنظمة تسليح حساسة.",
        evidenceId: "EVD-EXE-IMG-001",
        badgeType: "default"
    },
    {
        step: "02",
        title: "وقوع الروبوت في قبضة الشرطة خلال عملية ريموند ريد",
        desc: "تنفيذ عملية أمنية دقيقة بقيادة نائب رئيس الشرطة ريموند ريد، أسفرت عن السيطرة على النموذج المطور للروبوت وتحريزه.",
        evidenceId: "EVD-SNP-003",
        badgeType: "default"
    },
    {
        step: "03",
        title: "استهداف عناصر الشرطة لتعطيل عملية نقل الروبوت",
        desc: "شن هجمات مسلحة وإطلاق نار كثيف على محاور النقل في محاولة يائسة من المنظمة لمنع تحريز الروبوت ونقله إلى المقر المحصن.",
        evidenceId: "EVD-SNP-003",
        badgeType: "danger"
    },
    {
        step: "04",
        title: "الاشتباه في دور ألكساندر بتروف بصفته مساعد البروفيسور",
        desc: "تحديد هوية بتروف («لوسفر») كمنسق ميداني مباشر للعمليات المسلحة والمساعد الأول للبروفيسور في الميدان.",
        evidenceId: "EVD-SNP-001",
        badgeType: "danger"
    },
    {
        step: "05",
        title: "اختطاف ريك جونير وتسليمه إلى البروفيسور",
        desc: "مباغتة الضابط ريك جونير واحتجازه كرهينة ونقله مقيداً إلى وكر البروفيسور لاستخدامه كورقة ضغط أمنية.",
        evidenceId: "EVD-EXE-IMG-001",
        badgeType: "danger"
    },
    {
        step: "06",
        title: "تهديد ريك وإجباره على إطلاق النار على بتروف",
        desc: "وضع السلاح في يد الضابط ريك تحت التهديد بالتصفية وإكراهه على إطلاق النار على ألكساندر بتروف في مشهد مصور.",
        evidenceId: "EVD-EXE-001",
        badgeType: "danger"
    },
    {
        step: "07",
        title: "تصوير الواقعة واستخدام المقطع للابتزاز",
        desc: "توثيق مشهد إطلاق النار عبر كاميرات الروبوت، وابتزاز ريك بالمقطع لإيهامه بأنه ارتكب جريمة قتل واستغلاله لتسريب معلومات أمنية.",
        evidenceId: "EVD-EXE-IMG-001",
        badgeType: "danger"
    },
    {
        step: "08",
        title: "اكتشاف أن بتروف ما زال على قيد الحياة",
        desc: "ورود معلومات استخباراتية تفيد برصد بتروف حياً، مما كشف وجود تناقض صارخ مع مقطع الإعدام المزعوم.",
        evidenceId: "EVD-MED-001",
        badgeType: "alert"
    },
    {
        step: "09",
        title: "مراجعة تسجيلات الكاميرات المشفرة على السفينة الحربية",
        desc: "تشكيل فريق تحقيق خاص وتكليفه بفك التشفير الأمني لتسجيلات المراقبة على متن السفينة الحربية التابعة للمنظمة.",
        evidenceId: "EVD-MED-001",
        badgeType: "alert"
    },
    {
        step: "10",
        title: "اكتشاف التدخل الطبي بعد إطلاق النار",
        desc: "ظهور تسجيلات قاطعة تثبت قيام البروفيسور شخصياً بتقديم الرعاية الطبية وعلاج بتروف فور إطلاق النار دون علم ريك.",
        evidenceId: "EVD-MED-001",
        badgeType: "alert"
    },
    {
        step: "11",
        title: "انتفاء مسؤولية ريك عن إعدام بتروف",
        desc: "ثبوت تعرض الضابط ريك لخدعة مبيتة وإكراه مادي قاهر، وإسقاط أي مسؤولية جنائية عنه لعدم تحقق الوفاة وانعدام القصد.",
        evidenceId: "EVD-EXE-001",
        badgeType: "success"
    },
    {
        step: "12",
        title: "استكمال ملف التحقيق وإعداده للإحالة القضائية",
        desc: "إنهاء كافة تقارير الأدلة وتثبيت التهم على بتروف والبروفيسور وتجهيز الملف بالكامل لإحالته إلى القضاء المختص.",
        evidenceId: "EVD-SNP-002",
        badgeType: "success"
    }
];

// ==========================================================================
// 4. حالة التطبيق (APPLICATION STATE)
// ==========================================================================
let currentFilterType = "all";
let currentFilterCategory = "all";
let searchQuery = "";
let onlyAvailableFilter = false;
let currentModalEvidenceIndex = 0;
let filteredEvidenceList = [];

// ==========================================================================
// 5. تهيئة التطبيق عند اكتمال تحميل DOM
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    initStats();
    renderEvidenceGrid();
    renderChargesTable();
    renderTimeline();
    setupEventListeners();
    setupScrollSpy();
});

// ==========================================================================
// 6. تحديث الإحصائيات الحيوية (DYNAMIC STATS ENGINE)
// ==========================================================================
function initStats() {
    const totalCharges = CHARGES_DATA.length;
    const availableEvidence = EVIDENCE_DATA.filter(e => e.isAvailable).length;
    const totalEvidence = EVIDENCE_DATA.length;
    const availableVideos = EVIDENCE_DATA.filter(e => e.fileType === "video" && e.isAvailable).length;

    // Charges count
    const elCharges = document.getElementById("statChargesCount");
    if (elCharges) elCharges.textContent = totalCharges;

    // Available Evidence count
    const elAvail = document.getElementById("statAvailableEvidenceCount");
    if (elAvail) elAvail.textContent = availableEvidence;

    // Images & Videos counts
    const countImages = EVIDENCE_DATA.filter(e => e.fileType === "image").length;
    const countVideos = EVIDENCE_DATA.filter(e => e.fileType === "video").length;

    const elImages = document.getElementById("statImagesCount");
    if (elImages) elImages.textContent = countImages;

    const elVideos = document.getElementById("statVideosCount");
    const elVideosSub = document.getElementById("statVideosSub");
    if (elVideos) elVideos.textContent = countVideos;
    if (elVideosSub) elVideosSub.textContent = "تسجيلات مرئية أصلية مشفرة";

    // Type filter counts
    const elCountImg = document.getElementById("countTypeImages");
    const elCountVid = document.getElementById("countTypeVideos");

    if (elCountImg) elCountImg.textContent = countImages;
    if (elCountVid) elCountVid.textContent = countVideos;

    const elTotalListed = document.getElementById("totalListedEvidenceCount");
    if (elTotalListed) elTotalListed.textContent = totalEvidence;
}

// ==========================================================================
// 7. تصفية وعرض شبكة الأدلة الجنائية (EVIDENCE RENDERING & FILTERING)
// ==========================================================================
function getFilteredEvidence() {
    return EVIDENCE_DATA.filter(item => {
        // Type filter
        if (currentFilterType !== "all" && item.fileType !== currentFilterType) {
            return false;
        }

        // Category filter
        if (currentFilterCategory !== "all" && item.category !== currentFilterCategory) {
            return false;
        }

        // Available only filter
        if (onlyAvailableFilter && !item.isAvailable) {
            return false;
        }

        // Search query filter
        if (searchQuery.trim() !== "") {
            const q = searchQuery.toLowerCase().trim();
            const matchId = item.id.toLowerCase().includes(q);
            const matchTitle = item.title.toLowerCase().includes(q);
            const matchDesc = item.description.toLowerCase().includes(q);
            const matchCat = item.category.toLowerCase().includes(q);
            const matchSource = item.source.toLowerCase().includes(q);
            const matchFile = item.originalFileName.toLowerCase().includes(q);

            if (!matchId && !matchTitle && !matchDesc && !matchCat && !matchSource && !matchFile) {
                return false;
            }
        }

        return true;
    });
}

function renderEvidenceGrid() {
    const grid = document.getElementById("evidenceGrid");
    const countEl = document.getElementById("filteredEvidenceCount");
    if (!grid) return;

    filteredEvidenceList = getFilteredEvidence();
    if (countEl) countEl.textContent = filteredEvidenceList.length;

    if (filteredEvidenceList.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; background: rgba(0,0,0,0.2); border-radius: 8px; border: 1px dashed var(--border-subtle);">
                <div style="font-size: 2.2rem; color: var(--text-muted); margin-bottom: 10px;">🔍</div>
                <h4 style="font-size: 1.2rem; color: #ffffff; margin-bottom: 6px;">لا توجد أدلة تطابق شروط التصفية</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">حاول تعديل شريط البحث أو إزالة بعض الفلاتر لعرض المواد المسجلة.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredEvidenceList.map((item, index) => {
        // Determine type label & class
        let typeLabel = "صورة";
        let typeClass = "type-image";
        if (item.fileType === "video") {
            typeLabel = "فيديو";
            typeClass = "type-video";
        } else if (item.fileType === "document") {
            typeLabel = "مستند";
            typeClass = "type-document";
        }

        // Thumbnail block
        let thumbContent = "";
        if (item.isAvailable && item.fileType === "image") {
            thumbContent = `
                <img src="${item.filePath}" alt="${item.title}" loading="lazy" onerror="this.onerror=null; this.src=''; this.parentElement.innerHTML='<div class=\'evd-placeholder-box\'>تعذر تحميل الصورة</div>';">
                <span class="evd-available-pill">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    دليل محرز
                </span>
            `;
        } else if (item.isAvailable && item.fileType === "video") {
            const posterHtml = item.posterPath 
                ? `<img src="${item.posterPath}" alt="${item.title}" style="width:100%; height:100%; object-fit:cover; opacity:0.85;">`
                : `<div class="evd-placeholder-box" style="background:#020617;"><svg viewBox="0 0 24 24" width="44" height="44" fill="#3b82f6" style="opacity:0.8;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg></div>`;

            thumbContent = `
                ${posterHtml}
                <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.35); pointer-events:none;">
                    <div style="width:46px; height:46px; background:rgba(29,78,216,0.9); border-radius:50%; display:flex; align-items:center; justify-content:center; box-shadow:0 0 15px rgba(59,130,246,0.6);">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="#fff" style="margin-left:-2px;"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
                <span class="evd-available-pill">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    تسجيل مرئي محرز
                </span>
            `;
        } else {
            // Waiting placeholder
            const iconSvg = item.fileType === "video" 
                ? '<svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>'
                : (item.fileType === "document" 
                    ? '<svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>'
                    : '<svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>');

            thumbContent = `
                <div class="evd-placeholder-box">
                    ${iconSvg}
                    <span style="font-size:0.82rem; font-weight:600; color:#94a3b8;">بانتظار إدراج الملف</span>
                </div>
                <span class="evd-pending-pill">قيد الاستلام</span>
            `;
        }

        const cardClass = item.isAvailable ? "evidence-card available-evidence" : "evidence-card";

        return `
            <div class="${cardClass}" onclick="openEvidenceModal('${item.id}')" data-id="${item.id}">
                <div class="evd-thumb-wrapper">
                    <div class="evd-tag-row">
                        <span class="evd-id-badge">${item.id}</span>
                        <span class="evd-type-badge ${typeClass}">${typeLabel}</span>
                    </div>
                    ${thumbContent}
                </div>
                <div class="evd-body">
                    <div class="evd-category">${item.category}</div>
                    <h4 class="evd-title">${item.title}</h4>
                    <p class="evd-desc-short">${item.description}</p>
                    <div class="evd-footer">
                        <span class="evd-source" title="${item.source}">المصدر: ${item.source}</span>
                        <span class="evd-btn-view">عرض التفاصيل ←</span>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// ==========================================================================
// 8. نافذة عرض تفاصيل الدليل الجنائي (EVIDENCE DETAILS MODAL & ZOOM)
// ==========================================================================
function openEvidenceModal(evidenceId) {
    const itemIndex = EVIDENCE_DATA.findIndex(e => e.id === evidenceId);
    if (itemIndex === -1) return;

    currentModalEvidenceIndex = itemIndex;
    updateModalContent(EVIDENCE_DATA[itemIndex]);

    const modal = document.getElementById("evidenceModal");
    if (modal) {
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }
}

function updateModalContent(item) {
    // Header
    const titleEl = document.getElementById("modalEvidenceTitle");
    const idEl = document.getElementById("modalEvidenceId");
    if (titleEl) titleEl.textContent = item.title;
    if (idEl) idEl.textContent = item.id;

    // Metadata Table
    const elMetaId = document.getElementById("modalMetaId");
    const elMetaTitle = document.getElementById("modalMetaTitle");
    const elMetaType = document.getElementById("modalMetaType");
    const elMetaCat = document.getElementById("modalMetaCategory");
    const elMetaDesc = document.getElementById("modalMetaDesc");
    const elMetaDate = document.getElementById("modalMetaDate");
    const elMetaSource = document.getElementById("modalMetaSource");
    const elMetaStatus = document.getElementById("modalMetaStatus");
    const elMetaRelevance = document.getElementById("modalMetaRelevance");
    const elMetaFilename = document.getElementById("modalMetaFilename");

    let typeText = "صورة جنائية (Image)";
    if (item.fileType === "video") typeText = "تسجيل مرئي (HTML5 Video)";
    if (item.fileType === "document") typeText = "وثيقة رقمية (Document)";

    if (elMetaId) elMetaId.textContent = item.id;
    if (elMetaTitle) elMetaTitle.textContent = item.title;
    if (elMetaType) elMetaType.textContent = typeText;
    if (elMetaCat) elMetaCat.textContent = item.category;
    if (elMetaDesc) elMetaDesc.textContent = item.description;
    if (elMetaDate) elMetaDate.textContent = item.recordDate;
    if (elMetaSource) elMetaSource.textContent = item.source;
    if (elMetaStatus) elMetaStatus.textContent = item.status;
    if (elMetaRelevance) elMetaRelevance.textContent = item.relevance;
    if (elMetaFilename) elMetaFilename.textContent = item.originalFileName || "غير محدد";

    // Media Viewer Area
    const mediaWrapper = document.getElementById("modalMediaWrapper");
    if (mediaWrapper) {
        if (item.isAvailable && item.fileType === "image") {
            mediaWrapper.innerHTML = `
                <div style="position:relative; width:100%; display:flex; justify-content:center;">
                    <img src="${item.filePath}" alt="${item.title}" onclick="openLightbox('${item.filePath}', '${item.title}')" title="انقر لتكبير الصورة بكامل الشاشة">
                    <span style="position:absolute; bottom:10px; left:10px; background:rgba(0,0,0,0.7); color:#fff; font-size:0.75rem; padding:4px 8px; border-radius:3px; pointer-events:none;">انقر للتكبير 🔍</span>
                </div>
            `;
        } else if (item.isAvailable && item.fileType === "video") {
            mediaWrapper.innerHTML = `
                <video controls autoplay name="media" style="width:100%; max-height:440px;">
                    <source src="${item.filePath}" type="video/mp4">
                    متصفحك لا يدعم مشغل الفيديو HTML5.
                </video>
            `;
        } else if (item.isAvailable && item.fileType === "document") {
            mediaWrapper.innerHTML = `
                <div style="padding: 40px; text-align: center; color: var(--text-primary);">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="var(--gold-accent)" style="margin-bottom:12px;"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                    <h4>مستند رقمي معتمد</h4>
                    <p style="color:var(--text-secondary); font-size:0.9rem;">الملف متاح للاستعراض والتنزيل المباشر</p>
                    <a href="${item.filePath}" target="_blank" download class="btn btn-primary" style="margin-top:10px;">فتح أو تنزيل المستند</a>
                </div>
            `;
        } else {
            // Placeholder when file is waiting to be added
            mediaWrapper.innerHTML = `
                <div style="padding: 50px 20px; text-align: center; color: #64748b; width:100%;">
                    <div style="font-size: 2.5rem; margin-bottom: 12px;">📁</div>
                    <h4 style="font-size: 1.1rem; color: #cbd5e1; margin-bottom: 6px;">بانتظار إدراج الملف من قِبل المحقق</h4>
                    <p style="font-size: 0.86rem; color: #94a3b8; max-width: 480px; margin: 0 auto 14px;">
                        الموقع مجهز لاستقبال هذا الملف فور إرساله. ضع الملف داخل المجلد 
                        <code>${item.fileType === 'video' ? 'assets/videos/' : (item.fileType === 'document' ? 'assets/documents/' : 'assets/images/')}</code> 
                        ثم حدث مساره في <code>script.js</code>.
                    </p>
                    <span style="font-family:var(--font-mono); font-size:0.8rem; background:rgba(255,255,255,0.05); padding:4px 10px; border-radius:4px; border:1px solid var(--border-subtle); color:#93c5fd;">
                        الحالة: ${item.status}
                    </span>
                </div>
            `;
        }
    }
}

function closeEvidenceModal() {
    const modal = document.getElementById("evidenceModal");
    if (modal) {
        // Pause any video inside modal
        const video = modal.querySelector("video");
        if (video) video.pause();

        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }
}

function navigateModalEvidence(direction) {
    if (EVIDENCE_DATA.length === 0) return;
    
    currentModalEvidenceIndex += direction;
    if (currentModalEvidenceIndex < 0) {
        currentModalEvidenceIndex = EVIDENCE_DATA.length - 1;
    } else if (currentModalEvidenceIndex >= EVIDENCE_DATA.length) {
        currentModalEvidenceIndex = 0;
    }

    updateModalContent(EVIDENCE_DATA[currentModalEvidenceIndex]);
}

// Lightbox full image view
function openLightbox(src, caption) {
    const lightbox = document.getElementById("imageLightbox");
    const img = document.getElementById("lightboxImg");
    const cap = document.getElementById("lightboxCaption");

    if (lightbox && img) {
        img.src = src;
        if (cap) cap.textContent = caption || "";
        lightbox.classList.add("open");
        lightbox.setAttribute("aria-hidden", "false");
    }
}

function closeLightbox() {
    const lightbox = document.getElementById("imageLightbox");
    if (lightbox) {
        lightbox.classList.remove("open");
        lightbox.setAttribute("aria-hidden", "true");
    }
}

// ==========================================================================
// 9. جدول التهم الجنائية (CHARGES TABLE RENDERING)
// ==========================================================================
function renderChargesTable() {
    const tbody = document.getElementById("chargesTableBody");
    if (!tbody) return;

    tbody.innerHTML = CHARGES_DATA.map((chg, index) => {
        // Build linked evidence tags
        const evdLinks = chg.relatedEvidence.map(evdId => {
            const evdObj = EVIDENCE_DATA.find(e => e.id === evdId);
            const isAvail = evdObj && evdObj.isAvailable;
            const style = isAvail 
                ? "color:#34d399; border:1px solid rgba(16,185,129,0.3); background:rgba(16,185,129,0.08);" 
                : "color:#94a3b8; border:1px solid var(--border-subtle); background:rgba(255,255,255,0.03);";

            return `<span onclick="openEvidenceModal('${evdId}')" style="cursor:pointer; display:inline-block; font-family:var(--font-mono); font-size:0.75rem; padding:2px 6px; border-radius:3px; margin:2px; ${style}" title="انقر لعرض الدليل">${evdId}</span>`;
        }).join(" ");

        const badgeClass = chg.resultType === "support" ? "badge-support" : "badge-cleared";

        return `
            <tr>
                <td class="charge-id-col">${chg.code}</td>
                <td>
                    <div class="charge-desc-text">${chg.desc}</div>
                    <div style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">${chg.detailsText}</div>
                </td>
                <td class="charge-accused">
                    <span class="accused-name">${chg.accusedName}</span>
                    <span class="accused-role">${chg.accusedRole}</span>
                </td>
                <td>
                    <div style="display:flex; flex-wrap:wrap; max-width:240px;">
                        ${evdLinks}
                    </div>
                </td>
                <td>
                    <span class="${badgeClass}">${chg.result}</span>
                </td>
                <td>
                    <button class="btn btn-sm btn-secondary" style="padding:4px 8px; font-size:0.75rem;" onclick="jumpToEvidenceForCharge('${chg.id}')">فحص</button>
                </td>
            </tr>
        `;
    }).join("");
}

function jumpToEvidenceForCharge(chargeId) {
    const chg = CHARGES_DATA.find(c => c.id === chargeId);
    if (!chg || chg.relatedEvidence.length === 0) return;

    // Open first related evidence in modal
    openEvidenceModal(chg.relatedEvidence[0]);
}

// ==========================================================================
// 10. الخط الزمني التفاعلي للأحداث (INTERACTIVE TIMELINE)
// ==========================================================================
function renderTimeline() {
    const tree = document.getElementById("timelineTree");
    if (!tree) return;

    tree.innerHTML = TIMELINE_EVENTS.map(ev => {
        let nodeClass = "timeline-node";
        if (ev.badgeType === "danger") nodeClass += " danger-node";
        if (ev.badgeType === "success") nodeClass += " success-node";

        return `
            <div class="${nodeClass}" onclick="handleTimelineItemClick('${ev.evidenceId}')" title="انقر للانتقال للدليل المرتبط">
                <div class="timeline-marker">${ev.step}</div>
                <div class="timeline-card">
                    <div class="timeline-node-header">
                        <span class="timeline-seq-tag">الحدث رقم ${ev.step}</span>
                        <span class="timeline-link-hint">الدليل: ${ev.evidenceId} ←</span>
                    </div>
                    <h5 class="timeline-node-title">${ev.title}</h5>
                    <p class="timeline-node-desc">${ev.desc}</p>
                </div>
            </div>
        `;
    }).join("");
}

function handleTimelineItemClick(evidenceId) {
    if (!evidenceId) return;
    openEvidenceModal(evidenceId);
}

// ==========================================================================
// 11. إعداد مستمعات الأحداث والتفاعل (EVENT LISTENERS & NAVIGATION)
// ==========================================================================
function setupEventListeners() {
    // Mobile navigation toggle
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
        });

        // Close mobile nav when clicking a link
        navMenu.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
            });
        });
    }

    // Print Buttons
    const btnPrintNav = document.getElementById("btnPrintNav");
    const btnPrintReport = document.getElementById("btnPrintReport");
    if (btnPrintNav) {
        btnPrintNav.addEventListener("click", () => window.print());
    }
    if (btnPrintReport) {
        btnPrintReport.addEventListener("click", () => window.print());
    }

    // Evidence Search Input
    const searchInput = document.getElementById("evidenceSearchInput");
    const btnClearSearch = document.getElementById("btnClearSearch");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value;
            if (btnClearSearch) {
                btnClearSearch.style.display = searchQuery.trim() !== "" ? "block" : "none";
            }
            renderEvidenceGrid();
        });
    }
    if (btnClearSearch && searchInput) {
        btnClearSearch.addEventListener("click", () => {
            searchInput.value = "";
            searchQuery = "";
            btnClearSearch.style.display = "none";
            renderEvidenceGrid();
            searchInput.focus();
        });
    }

    // Type Filter Buttons
    const typeButtons = document.querySelectorAll(".type-filter-group .filter-btn");
    typeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            typeButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentFilterType = btn.getAttribute("data-type") || "all";
            renderEvidenceGrid();
        });
    });

    // Category Filter Pills
    const catPills = document.querySelectorAll("#categoryPillList .cat-pill");
    catPills.forEach(pill => {
        pill.addEventListener("click", () => {
            catPills.forEach(p => p.classList.remove("active"));
            pill.classList.add("active");
            currentFilterCategory = pill.getAttribute("data-category") || "all";
            renderEvidenceGrid();
        });
    });

    // Modal close buttons
    const btnModalClose = document.getElementById("btnModalClose");
    const btnModalCloseAction = document.getElementById("btnModalCloseAction");
    const evidenceModal = document.getElementById("evidenceModal");

    if (btnModalClose) btnModalClose.addEventListener("click", closeEvidenceModal);
    if (btnModalCloseAction) btnModalCloseAction.addEventListener("click", closeEvidenceModal);

    if (evidenceModal) {
        evidenceModal.addEventListener("click", (e) => {
            if (e.target === evidenceModal) {
                closeEvidenceModal();
            }
        });
    }

    // Modal Next/Prev navigation
    const btnModalPrev = document.getElementById("btnModalPrev");
    const btnModalNext = document.getElementById("btnModalNext");
    if (btnModalPrev) btnModalPrev.addEventListener("click", () => navigateModalEvidence(-1));
    if (btnModalNext) btnModalNext.addEventListener("click", () => navigateModalEvidence(1));

    // Lightbox close button
    const btnLightboxClose = document.getElementById("btnLightboxClose");
    const imageLightbox = document.getElementById("imageLightbox");
    if (btnLightboxClose) btnLightboxClose.addEventListener("click", closeLightbox);
    if (imageLightbox) {
        imageLightbox.addEventListener("click", (e) => {
            if (e.target === imageLightbox) {
                closeLightbox();
            }
        });
    }

    // Keyboard Shortcuts (ESC to close, Arrow keys to navigate)
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeLightbox();
            closeEvidenceModal();
        } else if (e.key === "ArrowRight") {
            const modal = document.getElementById("evidenceModal");
            if (modal && modal.classList.contains("open")) {
                navigateModalEvidence(1); // RTL right = next in Arabic reading flow or logical next
            }
        } else if (e.key === "ArrowLeft") {
            const modal = document.getElementById("evidenceModal");
            if (modal && modal.classList.contains("open")) {
                navigateModalEvidence(-1);
            }
        }
    });
}

// ==========================================================================
// 12. تتبع تمرير الصفحة وتحديث شريط التنقل (SCROLLSPY)
// ==========================================================================
function setupScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${currentSectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    }, { passive: true });
}
