(function () {
    var LANG = (function () {
        var m = location.search.match(/[?&]lang=(en|vi|de)/);
        return m ? m[1] : "en";
    })();

    var I18N = {
        en: {
            "nav.0": "Home", "nav.1": "Platform", "nav.2": "Capabilities", "nav.3": "About us", "nav.4": "The flow", "nav.5": "Contact",
            "hero.eyebrow": "Light of Hanoi · AI Core",
            "hero.line1": "Data flows in", "hero.line2": "Hanoora Nexus", "hero.line3": "powers your app",
            "hero.lead": "One AI core for the full pipeline — ingest data, apply intelligent logic, and deliver results directly into your applications.",
            "hero.cta1": "Request a demo", "hero.cta2": "See the flow",
            "hero.badge1": "Data In", "hero.badge2": "AI Logic", "hero.badge3": "App Out",
            "metrics.m1.value": "3-in-1", "metrics.m1.label": "Data · AI · App pipeline",
            "metrics.m2.value": "API-first", "metrics.m2.label": "REST · GraphQL · Webhooks",
            "metrics.m3.value": "Hanoi", "metrics.m3.label": "Local roots, global scale",
            "metrics.m4.value": "24/7", "metrics.m4.label": "Pipeline observability",
            "tech.eyebrow": "The stack", "tech.title": "Built for intelligent pipelines",
            "tech.desc": "Everything you need to ingest data, run AI logic and ship outcomes to production apps.",
            "tech.c1.title": "Data ingestion", "tech.c1.desc": "APIs, webhooks, streams, batch files and event buses into one Nexus core.",
            "tech.c2.title": "AI & models", "tech.c2.desc": "LLMs, classification, embeddings, rules engines and custom model orchestration.",
            "tech.c3.title": "App delivery", "tech.c3.desc": "REST, GraphQL, webhooks and SDKs to embed intelligence in your products.",
            "tech.c4.title": "Observability", "tech.c4.desc": "Pipeline tracing, audit logs, quality metrics and alerting.",
            "tech.c5.title": "Security", "tech.c5.desc": "Encryption, access control, tenant isolation and compliance-ready design.",
            "tech.c6.title": "Scale", "tech.c6.desc": "Cloud-native architecture, queues, caching and horizontal scaling.",
            "tech.featured": "Core engine",
            "prod.eyebrow": "Capabilities", "prod.title": "What Nexus enables",
            "prod.soft.title": "For product teams", "prod.soft.desc": "Ship AI features without rebuilding infrastructure from scratch.",
            "prod.soft.0": "Smart search & recommendations", "prod.soft.1": "Document understanding", "prod.soft.2": "Conversational interfaces",
            "prod.soft.3": "Workflow automation", "prod.soft.4": "Real-time dashboards", "prod.soft.5": "Custom enterprise integrations",
            "prod.iot.title": "For data teams", "prod.iot.desc": "Unify sources, apply logic and expose clean outputs.",
            "prod.iot.0": "Multi-source data fusion", "prod.iot.1": "ETL & stream processing", "prod.iot.2": "Model routing & versioning",
            "prod.iot.3": "API-first output layers",
            "prod.ind.0": "SaaS", "prod.ind.1": "FinTech", "prod.ind.2": "HealthTech", "prod.ind.3": "Logistics", "prod.ind.4": "E-commerce", "prod.ind.5": "Enterprise",
            "about.eyebrow": "About us",
            "about.title": "About Us",
            "about.desc": "Hanoora Nexus helps businesses grow through AI, Business Process Outsourcing, and digital innovation. We combine intelligent technology with practical business solutions to improve efficiency, reduce costs, and support long-term growth.",
            "about.desc2": "Founded by two German entrepreneurs, Mohammadi Akhabach and Björn Rittstieg, who have together over 40 years of experience in the Digital, BPO and AI industry, Hanoora Nexus brings together German quality standards and the dynamic capabilities of Vietnam. Based in Hanoi, we partner with companies worldwide to deliver reliable, scalable, and results-driven solutions.",
            "about.tagline": "German Leadership. Global Standards. Smart Solutions.",
            "about.ceo.credit": "Björn Rittstieg — Founder &amp; CEO",
            "about.f1.name": "Mohammadi Akhabach", "about.f1.role": "Founder and Business Angel",
            "about.f2.name": "Björn Rittstieg", "about.f2.role": "Founder and CEO",
            "about.partner.label": "Partner",
            "about.partner.title": "Supported by business angel Mohammadi Akhabach",
            "about.partner.p1": "Alongside my entrepreneurial activities, I have been involved in social and community projects for many years. I am a member of the committee against the skills shortage of the Federal Association of Liberal Professions and advise various organizations in Germany. Since 2021, I have been a reading ambassador for the Reading Foundation and have supported numerous social initiatives, including the provision of medical masks for northern Morocco.",
            "about.partner.p2": "In 2018 I founded AMIRA World, which has since become the largest further education platform for pharmacy teams in Germany.",
            "about.partner.p3": "Today I run eight companies – seven in Germany and, with Hanoora Nexus, one company in Hanoi, Vietnam.",
            "about.partner.credit": "Mohammadi Akhabach — Founder &amp; Business Angel",
            "proc.eyebrow": "The pipeline", "proc.title": "How Nexus works",
            "proc.s1.title": "Data in", "proc.s1.desc": "Ingest streams, APIs, files and events into the Nexus core.",
            "proc.s2.title": "AI logic", "proc.s2.desc": "Process, classify, predict and reason with configurable models.",
            "proc.s3.title": "App out", "proc.s3.desc": "Deliver insights and actions into web, mobile and enterprise apps.",
            "proc.s4.title": "Monitor", "proc.s4.desc": "Observe pipelines, audit outputs and improve continuously.",
            "contact.eyebrow": "Get in touch", "contact.title": "Start with Hanoora Nexus",
            "contact.desc": "Tell us about your data sources and apps — we'll show how Nexus fits your flow.",
            "contact.f1": "Free architecture walkthrough", "contact.f2": "Response within 1–2 business days", "contact.f3": "EN · VI · DE supported",
            "contact.name": "Your name", "contact.email": "Your email", "contact.message": "Message", "contact.send": "Send message",
            "contact.errName": "Name is required (min. 2 characters).", "contact.errEmail": "Please enter a valid email.",
            "contact.errMessage": "Message is required.", "contact.success": "Thank you! We'll get back to you soon.",
            "contact.errSend": "Something went wrong. Please try again or email info@hanoora-nexus.com.",
            "contact.errConfig": "Contact form is not configured yet. Please email info@hanoora-nexus.com.",
            "footer.tagline": "Light of Hanoi · AI Nexus Core",
            "footer.hq.title": "Headquarters · Hanoi", "footer.hq.addr": "Hanoora Nexus<br>Hanoi, Vietnam",
            "footer.prod.title": "Platform", "footer.prod.desc": "Data ingestion · AI processing · App delivery · Monitoring & APIs",
            "footer.copy": "© 2026 Hanoora Nexus. All rights reserved."
        },
        vi: {
            "nav.0": "Trang chủ", "nav.1": "Nền tảng", "nav.2": "Khả năng", "nav.3": "Về chúng tôi", "nav.4": "Luồng xử lý", "nav.5": "Liên hệ",
            "hero.eyebrow": "Ánh sáng Hà Nội · Lõi AI",
            "hero.line1": "Dữ liệu đổ vào", "hero.line2": "Hanoora Nexus", "hero.line3": "vận hành app của bạn",
            "hero.lead": "Một lõi AI cho toàn bộ luồng xử lý — tiếp nhận dữ liệu, vận hành logic thông minh và đưa kết quả thẳng vào ứng dụng của bạn.",
            "hero.cta1": "Đặt lịch demo", "hero.cta2": "Xem luồng xử lý",
            "hero.badge1": "Data In", "hero.badge2": "AI Logic", "hero.badge3": "App Out",
            "metrics.m1.value": "3-in-1", "metrics.m1.label": "Data · AI · App",
            "metrics.m2.value": "API-first", "metrics.m2.label": "REST · GraphQL · Webhook",
            "metrics.m3.value": "Hà Nội", "metrics.m3.label": "Bản địa hóa, tầm nhìn toàn cầu",
            "metrics.m4.value": "24/7", "metrics.m4.label": "Giám sát pipeline",
            "tech.eyebrow": "Công nghệ", "tech.title": "Xây dựng cho pipeline thông minh",
            "tech.desc": "Mọi thứ cần để thu thập dữ liệu, chạy logic AI và đưa kết quả ra app production.",
            "tech.c1.title": "Thu thập dữ liệu", "tech.c1.desc": "API, webhook, stream, file batch và event bus về một lõi Nexus.",
            "tech.c2.title": "AI & mô hình", "tech.c2.desc": "LLM, phân loại, embedding, rule engine và điều phối model tùy chỉnh.",
            "tech.c3.title": "Giao ra ứng dụng", "tech.c3.desc": "REST, GraphQL, webhook và SDK nhúng trí tuệ vào sản phẩm.",
            "tech.c4.title": "Giám sát", "tech.c4.desc": "Truy vết pipeline, audit log, metric chất lượng và cảnh báo.",
            "tech.c5.title": "Bảo mật", "tech.c5.desc": "Mã hóa, phân quyền, tách tenant và thiết kế sẵn sàng tuân thủ.",
            "tech.c6.title": "Mở rộng", "tech.c6.desc": "Kiến trúc cloud-native, hàng đợi, cache và scale ngang.",
            "tech.featured": "Lõi trung tâm",
            "prod.eyebrow": "Khả năng", "prod.title": "Nexus mang lại gì",
            "prod.soft.title": "Cho team sản phẩm", "prod.soft.desc": "Triển khai tính năng AI mà không xây lại hạ tầng từ đầu.",
            "prod.soft.0": "Tìm kiếm & gợi ý thông minh", "prod.soft.1": "Hiểu tài liệu", "prod.soft.2": "Giao diện hội thoại",
            "prod.soft.3": "Tự động hóa quy trình", "prod.soft.4": "Dashboard thời gian thực", "prod.soft.5": "Tích hợp doanh nghiệp",
            "prod.iot.title": "Cho team dữ liệu", "prod.iot.desc": "Hợp nhất nguồn, áp logic và xuất output sạch.",
            "prod.iot.0": "Hợp nhất đa nguồn", "prod.iot.1": "ETL & xử lý stream", "prod.iot.2": "Định tuyến & versioning model",
            "prod.iot.3": "Lớp output API-first",
            "prod.ind.0": "SaaS", "prod.ind.1": "FinTech", "prod.ind.2": "HealthTech", "prod.ind.3": "Logistics", "prod.ind.4": "E-commerce", "prod.ind.5": "Doanh nghiệp",
            "about.eyebrow": "Về chúng tôi",
            "about.title": "Về chúng tôi",
            "about.desc": "Hanoora Nexus giúp doanh nghiệp tăng trưởng nhờ AI, Business Process Outsourcing và đổi mới số. Chúng tôi kết hợp công nghệ thông minh với giải pháp kinh doanh thực tiễn để nâng hiệu quả, giảm chi phí và hỗ trợ tăng trưởng dài hạn.",
            "about.desc2": "Được sáng lập bởi hai doanh nhân Đức, Mohammadi Akhabach và Björn Rittstieg, với hơn 40 năm kinh nghiệm kết hợp trong ngành Digital, BPO và AI, Hanoora Nexus mang tiêu chuẩn chất lượng Đức cùng năng lực năng động của Việt Nam. Trụ sở tại Hà Nội, chúng tôi đồng hành cùng doanh nghiệp toàn cầu để giao giải pháp tin cậy, mở rộng được và hướng đến kết quả.",
            "about.tagline": "Lãnh đạo Đức. Tiêu chuẩn toàn cầu. Giải pháp thông minh.",
            "about.ceo.credit": "Björn Rittstieg — Founder &amp; CEO",
            "about.f1.name": "Mohammadi Akhabach", "about.f1.role": "Founder and Business Angel",
            "about.f2.name": "Björn Rittstieg", "about.f2.role": "Founder and CEO",
            "about.partner.label": "Partner",
            "about.partner.title": "Được hỗ trợ bởi business angel Mohammadi Akhabach",
            "about.partner.p1": "Song song với hoạt động kinh doanh, tôi tham gia các dự án xã hội và cộng đồng nhiều năm. Tôi là thành viên ủy ban chống thiếu hụt nhân lực của Hiệp hội Nghề tự do Liên bang và tư vấn cho nhiều tổ chức tại Đức. Từ 2021, tôi là đại sứ đọc sách của Stiftung Lesen và đã hỗ trợ nhiều sáng kiến xã hội, gồm cung cấp khẩu trang y tế cho miền Bắc Maroc.",
            "about.partner.p2": "Năm 2018 tôi sáng lập AMIRA World — đến nay là nền tảng đào tạo lớn nhất cho đội ngũ nhà thuốc tại Đức.",
            "about.partner.p3": "Hiện tôi điều hành tám công ty — bảy tại Đức và, cùng Hanoora Nexus, một công ty tại Hà Nội, Việt Nam.",
            "about.partner.credit": "Mohammadi Akhabach — Founder &amp; Business Angel",
            "proc.eyebrow": "Pipeline", "proc.title": "Nexus hoạt động thế nào",
            "proc.s1.title": "Data in", "proc.s1.desc": "Thu stream, API, file và event vào lõi Nexus.",
            "proc.s2.title": "AI logic", "proc.s2.desc": "Xử lý, phân loại, dự đoán và suy luận với model cấu hình được.",
            "proc.s3.title": "App out", "proc.s3.desc": "Đưa insight và hành động vào web, mobile và app doanh nghiệp.",
            "proc.s4.title": "Monitor", "proc.s4.desc": "Quan sát pipeline, audit output và cải tiến liên tục.",
            "contact.eyebrow": "Liên hệ", "contact.title": "Bắt đầu với Hanoora Nexus",
            "contact.desc": "Chia sẻ nguồn dữ liệu và app của bạn — chúng tôi sẽ demo luồng Nexus phù hợp.",
            "contact.f1": "Tư vấn kiến trúc miễn phí", "contact.f2": "Phản hồi trong 1–2 ngày làm việc", "contact.f3": "Hỗ trợ EN · VI · DE",
            "contact.name": "Họ và tên", "contact.email": "Email", "contact.message": "Tin nhắn", "contact.send": "Gửi tin nhắn",
            "contact.errName": "Vui lòng nhập tên (tối thiểu 2 ký tự).", "contact.errEmail": "Vui lòng nhập email hợp lệ.",
            "contact.errMessage": "Vui lòng nhập nội dung tin nhắn.", "contact.success": "Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm.",
            "contact.errSend": "Có lỗi xảy ra. Vui lòng thử lại hoặc gửi email info@hanoora-nexus.com.",
            "contact.errConfig": "Form chưa được cấu hình. Vui lòng gửi email info@hanoora-nexus.com.",
            "footer.tagline": "Ánh sáng Hà Nội · Lõi AI Nexus",
            "footer.hq.title": "Trụ sở · Hà Nội", "footer.hq.addr": "Hanoora Nexus<br>Hà Nội, Việt Nam",
            "footer.prod.title": "Nền tảng", "footer.prod.desc": "Thu thập dữ liệu · Xử lý AI · Giao app · Giám sát & API",
            "footer.copy": "© 2026 Hanoora Nexus. Mọi quyền được bảo lưu."
        },
        de: {
            "nav.0": "Home", "nav.1": "Plattform", "nav.2": "Funktionen", "nav.3": "Über uns", "nav.4": "Der Flow", "nav.5": "Kontakt",
            "hero.eyebrow": "Licht von Hanoi · KI-Kern",
            "hero.line1": "Daten fließen ein", "hero.line2": "Hanoora Nexus", "hero.line3": "treibt Ihre App",
            "hero.lead": "Ein KI-Kern für die gesamte Pipeline — Daten aufnehmen, intelligent verarbeiten und Ergebnisse direkt in Ihre Anwendungen liefern.",
            "hero.cta1": "Demo anfragen", "hero.cta2": "Flow ansehen",
            "hero.badge1": "Data In", "hero.badge2": "AI Logic", "hero.badge3": "App Out",
            "metrics.m1.value": "3-in-1", "metrics.m1.label": "Data · KI · App",
            "metrics.m2.value": "API-first", "metrics.m2.label": "REST · GraphQL · Webhooks",
            "metrics.m3.value": "Hanoi", "metrics.m3.label": "Lokale Wurzeln, global skalierbar",
            "metrics.m4.value": "24/7", "metrics.m4.label": "Pipeline-Überwachung",
            "tech.eyebrow": "Der Stack", "tech.title": "Für intelligente Pipelines gebaut",
            "tech.desc": "Alles zum Einspeisen von Daten, Ausführen von KI-Logik und Liefern in Produktions-Apps.",
            "tech.c1.title": "Datenaufnahme", "tech.c1.desc": "APIs, Webhooks, Streams, Batch-Dateien und Event-Bus in einen Nexus-Kern.",
            "tech.c2.title": "KI & Modelle", "tech.c2.desc": "LLMs, Klassifikation, Embeddings, Regelwerke und Model-Orchestrierung.",
            "tech.c3.title": "App-Auslieferung", "tech.c3.desc": "REST, GraphQL, Webhooks und SDKs für intelligente Produkte.",
            "tech.c4.title": "Observability", "tech.c4.desc": "Pipeline-Tracing, Audit-Logs, Qualitätsmetriken und Alerts.",
            "tech.c5.title": "Sicherheit", "tech.c5.desc": "Verschlüsselung, Zugriffskontrolle, Mandantenisolation und Compliance.",
            "tech.c6.title": "Skalierung", "tech.c6.desc": "Cloud-native Architektur, Queues, Caching und horizontale Skalierung.",
            "tech.featured": "Kern-Engine",
            "prod.eyebrow": "Funktionen", "prod.title": "Was Nexus ermöglicht",
            "prod.soft.title": "Für Produktteams", "prod.soft.desc": "KI-Features liefern, ohne Infrastruktur neu zu bauen.",
            "prod.soft.0": "Intelligente Suche & Empfehlungen", "prod.soft.1": "Dokumentenverständnis", "prod.soft.2": "Konversationsschnittstellen",
            "prod.soft.3": "Workflow-Automatisierung", "prod.soft.4": "Echtzeit-Dashboards", "prod.soft.5": "Enterprise-Integrationen",
            "prod.iot.title": "Für Datenteams", "prod.iot.desc": "Quellen vereinen, Logik anwenden, saubere Outputs bereitstellen.",
            "prod.iot.0": "Multi-Source Data Fusion", "prod.iot.1": "ETL & Stream Processing", "prod.iot.2": "Model Routing & Versioning",
            "prod.iot.3": "API-first Output Layers",
            "prod.ind.0": "SaaS", "prod.ind.1": "FinTech", "prod.ind.2": "HealthTech", "prod.ind.3": "Logistik", "prod.ind.4": "E-Commerce", "prod.ind.5": "Enterprise",
            "about.eyebrow": "Über uns",
            "about.title": "Über uns",
            "about.desc": "Hanoora Nexus hilft Unternehmen beim Wachstum durch KI, Business Process Outsourcing und digitale Innovation. Wir verbinden intelligente Technologie mit praxisnahen Business-Lösungen — für mehr Effizienz, niedrigere Kosten und nachhaltiges Wachstum.",
            "about.desc2": "Gegründet von zwei deutschen Unternehmern, Mohammadi Akhabach und Björn Rittstieg, mit zusammen über 40 Jahren Erfahrung in Digital, BPO und KI, verbindet Hanoora Nexus deutsche Qualitätsstandards mit den dynamischen Stärken Vietnams. Mit Sitz in Hanoi arbeiten wir weltweit mit Unternehmen zusammen — zuverlässig, skalierbar und ergebnisorientiert.",
            "about.tagline": "Deutsche Führung. Globale Standards. Clevere Lösungen.",
            "about.ceo.credit": "Björn Rittstieg — Founder &amp; CEO",
            "about.f1.name": "Mohammadi Akhabach", "about.f1.role": "Founder and Business Angel",
            "about.f2.name": "Björn Rittstieg", "about.f2.role": "Founder and CEO",
            "about.partner.label": "Partner",
            "about.partner.title": "Unterstützt durch Business Angel Mohammadi Akhabach",
            "about.partner.p1": "Neben meiner unternehmerischen Tätigkeit engagiere ich mich seit vielen Jahren in sozialen und gesellschaftlichen Projekten. Ich bin Mitglied im Ausschuss gegen den Fachkräftemangel des Bundesverbands der Freien Berufe und berate verschiedene Organisationen in Deutschland. Seit 2021 bin ich Lesebotschafter der Stiftung Lesen und habe zahlreiche soziale Initiativen unterstützt, darunter die Bereitstellung von medizinischen Masken für den Norden Marokkos.",
            "about.partner.p2": "2018 gründete ich AMIRA World, das sich seitdem zur größten Weiterbildungsplattform für Apothekenteams in Deutschland entwickelt hat.",
            "about.partner.p3": "Heute führe ich acht Unternehmen – sieben in Deutschland und mit Hanoora Nexus ein Unternehmen in Hanoi, Vietnam.",
            "about.partner.credit": "Mohammadi Akhabach — Founder &amp; Business Angel",
            "proc.eyebrow": "Die Pipeline", "proc.title": "So funktioniert Nexus",
            "proc.s1.title": "Data in", "proc.s1.desc": "Streams, APIs, Dateien und Events in den Nexus-Kern aufnehmen.",
            "proc.s2.title": "AI logic", "proc.s2.desc": "Verarbeiten, klassifizieren, vorhersagen und schlussfolgern mit konfigurierbaren Modellen.",
            "proc.s3.title": "App out", "proc.s3.desc": "Erkenntnisse und Aktionen in Web-, Mobile- und Enterprise-Apps liefern.",
            "proc.s4.title": "Monitor", "proc.s4.desc": "Pipelines beobachten, Outputs prüfen und kontinuierlich verbessern.",
            "contact.eyebrow": "Kontakt", "contact.title": "Starten Sie mit Hanoora Nexus",
            "contact.desc": "Erzählen Sie uns von Ihren Datenquellen und Apps — wir zeigen den passenden Nexus-Flow.",
            "contact.f1": "Kostenlose Architektur-Beratung", "contact.f2": "Antwort innerhalb von 1–2 Werktagen", "contact.f3": "EN · VI · DE unterstützt",
            "contact.name": "Ihr Name", "contact.email": "Ihre E-Mail", "contact.message": "Nachricht", "contact.send": "Nachricht senden",
            "contact.errName": "Name erforderlich (mind. 2 Zeichen).", "contact.errEmail": "Bitte gültige E-Mail eingeben.",
            "contact.errMessage": "Nachricht erforderlich.", "contact.success": "Vielen Dank! Wir melden uns bald.",
            "contact.errSend": "Etwas ist schiefgelaufen. Bitte erneut versuchen oder info@hanoora-nexus.com schreiben.",
            "contact.errConfig": "Kontaktformular noch nicht konfiguriert. Bitte an info@hanoora-nexus.com schreiben.",
            "footer.tagline": "Licht von Hanoi · KI-Nexus-Kern",
            "footer.hq.title": "Hauptsitz · Hanoi", "footer.hq.addr": "Hanoora Nexus<br>Hanoi, Vietnam",
            "footer.prod.title": "Plattform", "footer.prod.desc": "Datenaufnahme · KI-Verarbeitung · App-Lieferung · Monitoring & APIs",
            "footer.copy": "© 2026 Hanoora Nexus. Alle Rechte vorbehalten."
        }
    };

    var dict = I18N[LANG] || I18N.en;

    function t(key) {
        return dict[key] || I18N.en[key] || key;
    }

    function applyI18n() {
        document.documentElement.lang = LANG;
        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            var val = t(key);
            if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                el.setAttribute("placeholder", val);
            } else {
                el.innerHTML = val;
            }
        });
        document.querySelectorAll(".lang-switch a").forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("data-lang") === LANG);
            a.setAttribute("href", "?lang=" + a.getAttribute("data-lang") + location.hash);
        });
        var nameEl = document.getElementById("name");
        var emailEl = document.getElementById("email");
        var msgEl = document.getElementById("message");
        if (nameEl) nameEl.placeholder = t("contact.name");
        if (emailEl) emailEl.placeholder = t("contact.email");
        if (msgEl) msgEl.placeholder = t("contact.message");
    }

    function initHeader() {
        var header = document.querySelector(".site-header");
        window.addEventListener("scroll", function () {
            header.classList.toggle("scrolled", window.scrollY > 24);
        }, { passive: true });

        var toggle = document.getElementById("nav-toggle");
        var nav = document.getElementById("site-nav");
        toggle.addEventListener("click", function () {
            var open = nav.classList.toggle("open");
            toggle.setAttribute("aria-expanded", open);
        });
        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                nav.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    function initScrollSpy() {
        var links = document.querySelectorAll(".site-nav a");
        var sections = Array.from(links).map(function (a) {
            return document.querySelector(a.getAttribute("href"));
        }).filter(Boolean);

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var id = "#" + entry.target.id;
                    links.forEach(function (a) {
                        a.classList.toggle("active", a.getAttribute("href") === id);
                    });
                }
            });
        }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

        sections.forEach(function (s) { observer.observe(s); });
    }

    function initReveal() {
        var els = document.querySelectorAll(".reveal");
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    e.target.classList.add("visible");
                    io.unobserve(e.target);
                }
            });
        }, { threshold: 0.12 });
        els.forEach(function (el) { io.observe(el); });
    }

    function initForm() {
        var form = document.getElementById("contact-form");
        var success = document.getElementById("form-success");
        var globalError = document.getElementById("form-error");
        var accessKeyInput = document.getElementById("web3forms-access-key");
        var accessKey = (window.__ENV && window.__ENV.WEB3FORMS_ACCESS_KEY) || "";

        if (accessKeyInput) accessKeyInput.value = accessKey;

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            var name = form.name.value.trim();
            var email = form.email.value.trim();
            var message = form.message.value.trim();
            var ok = true;

            ["name", "email", "message"].forEach(function (field) {
                document.getElementById("err-" + field).classList.remove("show");
            });
            success.hidden = true;
            if (globalError) {
                globalError.hidden = true;
                globalError.classList.remove("show");
            }

            if (name.length < 2) {
                document.getElementById("err-name").classList.add("show");
                ok = false;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                document.getElementById("err-email").classList.add("show");
                ok = false;
            }
            if (!message) {
                document.getElementById("err-message").classList.add("show");
                ok = false;
            }
            if (!ok) return;

            if (!accessKey) {
                if (globalError) {
                    globalError.textContent = t("contact.errConfig");
                    globalError.hidden = false;
                    globalError.classList.add("show");
                }
                return;
            }

            var btn = form.querySelector("button[type=submit]");
            var label = btn.textContent;
            btn.textContent = LANG === "vi" ? "Đang gửi..." : LANG === "de" ? "Senden..." : "Sending...";
            btn.disabled = true;

            var payload = new FormData(form);
            payload.set("access_key", accessKey);
            payload.set("name", name);
            payload.set("email", email);
            payload.set("message", message);

            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: payload
            })
                .then(function (res) { return res.json().then(function (data) { return { ok: res.ok, data: data }; }); })
                .then(function (result) {
                    if (!result.ok || !result.data.success) {
                        throw new Error((result.data && result.data.message) || "submit failed");
                    }
                    form.reset();
                    if (accessKeyInput) accessKeyInput.value = accessKey;
                    success.hidden = false;
                })
                .catch(function () {
                    if (globalError) {
                        globalError.textContent = t("contact.errSend");
                        globalError.hidden = false;
                        globalError.classList.add("show");
                    }
                })
                .finally(function () {
                    btn.textContent = label;
                    btn.disabled = false;
                });
        });
    }

    function initHeroEffects() {
        var visual = document.getElementById("hero-visual");
        var hero = document.getElementById("home");
        var canvas = document.getElementById("hero-particles");
        if (!hero) return;

        if (visual) {
            hero.addEventListener("mousemove", function (e) {
                var rect = hero.getBoundingClientRect();
                var x = (e.clientX - rect.left) / rect.width - 0.5;
                var y = (e.clientY - rect.top) / rect.height - 0.5;
                visual.style.setProperty("--ry", (x * 10).toFixed(2) + "deg");
                visual.style.setProperty("--rx", (-y * 8).toFixed(2) + "deg");
            });

            hero.addEventListener("mouseleave", function () {
                visual.style.setProperty("--ry", "0deg");
                visual.style.setProperty("--rx", "0deg");
            });
        }

        if (!canvas) return;
        var ctx = canvas.getContext("2d");
        var particles = [];
        var count = 64;

        function resize() {
            canvas.width = hero.clientWidth;
            canvas.height = hero.clientHeight;
        }

        function seed() {
            particles = [];
            for (var i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    r: Math.random() * 2.2 + 0.4,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    a: Math.random() * 0.55 + 0.2
                });
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(function (p, i) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = i % 4 === 0
                    ? "rgba(91, 207, 213, " + p.a + ")"
                    : i % 3 === 0
                        ? "rgba(84, 174, 180, " + p.a + ")"
                        : "rgba(65, 102, 172, " + p.a + ")";
                ctx.fill();
            });
            requestAnimationFrame(draw);
        }

        resize();
        seed();
        draw();
        window.addEventListener("resize", function () {
            resize();
            seed();
        });
    }

    applyI18n();
    initHeader();
    initHeroEffects();
    initScrollSpy();
    initReveal();
    initForm();
})();
