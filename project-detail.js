/* =========================================
   PROJECT DETAIL DATA
========================================= */

const projectDetails = {

  /* =====================================
     01. SALES PERFORMANCE
  ===================================== */

  "sales-performance": {
    title: "Sales Performance Analysis",
    category: "PROJECT 01 · POWER BI",
    leadId: "Proyek ini berfokus pada analisis performa penjualan untuk memahami kontribusi produk, toko, pelanggan, dan berbagai faktor yang memengaruhi pencapaian bisnis. Melalui pengolahan data dan visualisasi menggunakan Power BI, proyek ini menyajikan informasi penjualan dalam dashboard interaktif yang membantu pengguna mengevaluasi performa bisnis dari berbagai sudut pandang.",
    leadEn: "This project focuses on sales performance analysis to understand the contributions of products, stores, customers, and various factors influencing business performance. Through data processing and visualization using Power BI, the project presents sales information in an interactive dashboard that helps users evaluate business performance from different perspectives.",
    categoryInfo: "Data Analytics · Dashboard",
    tools: "Power BI, Power Query, DAX",
    focus: "Sales Performance Analysis",

    focusCard: {
      titleId: "Analisis Penjualan",
      titleEn: "Sales Insights",
      items: [
        {
          labelId: "Masalah",
          labelEn: "Problem",
          textId: "Evaluasi performa penjualan membutuhkan analisis berdasarkan kategori produk, toko, wilayah, dan segmen pelanggan.",
          textEn: "Sales performance evaluation requires analysis across product categories, stores, regions, and customer segments."
        },
        {
          labelId: "Temuan Utama",
          labelEn: "Key Insight",
          textId: "Kategori Televisi menjadi kontributor omzet terbesar dengan sekitar Rp92 miliar, sedangkan segmen Regular mendominasi omzet pelanggan sekitar Rp149 miliar.",
          textEn: "The Television category contributed the highest revenue at approximately IDR 92 billion, while the Regular segment accounted for around IDR 149 billion in customer revenue."
        },
        {
          labelId: "Rekomendasi",
          labelEn: "Recommendation",
          textId: "Evaluasi strategi penjualan pada kategori dan segmen dengan kontribusi berbeda untuk meningkatkan omzet dan profitabilitas.",
          textEn: "Review sales strategies across categories and customer segments with different contributions to improve revenue and profitability."
        }
      ]
    },

    metrics: [
      ["56K+", "Baris Data", "Data Rows", "▤"],
      ["3", "Halaman Dashboard", "Dashboard Pages", "▧"],
      ["25+", "Visualisasi", "Visualizations", "▥"],
      ["DAX", "Perhitungan Data", "Data Calculations", "⌘"]
    ],

    overviewId: "Sales Performance Analysis merupakan proyek analisis data penjualan yang menggunakan dataset dengan lebih dari 56.000 baris transaksi. Data diolah untuk mengeksplorasi berbagai aspek penjualan, mulai dari performa produk, kategori, toko, wilayah, pelanggan, hingga periode transaksi. Proyek ini juga mencakup proses pembersihan dan transformasi data menggunakan Power Query sebelum disajikan dalam bentuk visualisasi interaktif.",
    overviewEn: "Sales Performance Analysis is a sales data analytics project using a dataset containing more than 56,000 transaction records. The data is processed to explore various aspects of sales, including product performance, categories, stores, regions, customers, and transaction periods. The project also involves data cleaning and transformation using Power Query before presenting the results through interactive visualizations.",

    objectiveId: "Proyek ini bertujuan untuk memberikan gambaran menyeluruh mengenai performa penjualan dan profitabilitas bisnis. Analisis dilakukan untuk mengidentifikasi produk dan kategori dengan kontribusi terbesar, membandingkan performa penjualan antar toko, memahami karakteristik pelanggan, serta mengevaluasi perubahan kinerja berdasarkan waktu. Dashboard dirancang agar informasi tersebut dapat diakses dan dianalisis secara lebih mudah melalui indikator serta filter interaktif.",
    objectiveEn: "This project aims to provide a comprehensive overview of business sales performance and profitability. The analysis identifies products and categories with the highest contributions, compares sales performance across stores, explores customer characteristics, and evaluates performance changes over time. The dashboard is designed to make this information easier to access and analyze through interactive indicators and filters.",

    outcomeId: "Menghasilkan dashboard Power BI interaktif yang terdiri dari 3 halaman dengan lebih dari 25 visualisasi. Dashboard menyajikan informasi mengenai omzet, laba kotor, margin keuntungan, kontribusi produk, performa toko, dan karakteristik pelanggan. Hasil analisis menunjukkan bahwa kategori Televisi menjadi kontributor omzet terbesar dengan nilai sekitar Rp92 miliar, sedangkan segmen pelanggan Regular menyumbang omzet sekitar Rp149 miliar.",
    outcomeEn: "The project produced an interactive Power BI dashboard consisting of 3 pages with more than 25 visualizations. The dashboard presents information on revenue, gross profit, profit margin, product contributions, store performance, and customer characteristics. The analysis shows that the Television category generated the highest revenue contribution at approximately IDR 92 billion, while the Regular customer segment accounted for around IDR 149 billion.",

    processId: [
      ["01", "Data Inspection", "Memeriksa struktur, tipe data, nilai kosong, dan konsistensi dataset."],
      ["02", "Data Cleaning", "Membersihkan dan mentransformasikan data menggunakan Power Query."],
      ["03", "Data Modeling", "Menyusun relasi tabel dan perhitungan untuk kebutuhan analisis."],
      ["04", "Visualization", "Membangun measure DAX, indikator, dan dashboard interaktif."]
    ],

    processEn: [
      ["01", "Data Inspection", "Reviewed the structure, data types, missing values, and dataset consistency."],
      ["02", "Data Cleaning", "Cleaned and transformed the data using Power Query."],
      ["03", "Data Modeling", "Prepared table relationships and calculations for analysis."],
      ["04", "Visualization", "Built DAX measures, indicators, and interactive dashboards."]
    ],

    images: ["images/projects/sales-overview.jpeg",
      "images/projects/sales-overview2.png", 
      "images/projects/sales-overview3.jpeg"
    ]
  },


  /* =====================================
     02. COFFEE SALES
  ===================================== */

  "coffee-sales": {
    title: "Coffee Sales Analysis",
    category: "PROJECT 02 · POWER BI",
    leadId: "Proyek ini mengeksplorasi data penjualan kopi untuk memahami pola transaksi, perkembangan penjualan, serta profitabilitas dari berbagai cabang dan kategori produk. Dengan memanfaatkan Power BI, data dalam jumlah besar diolah dan divisualisasikan menjadi dashboard interaktif yang memberikan gambaran mengenai performa bisnis dari waktu ke waktu.",
    leadEn: "This project explores coffee sales data to understand transaction patterns, sales development, and profitability across different branches and product categories. Using Power BI, large volumes of data are processed and visualized into an interactive dashboard that provides an overview of business performance over time.",
    categoryInfo: "Data Analytics · Dashboard",
    tools: "Power BI, Power Query, DAX",
    focus: "Product and Branch Sales Analysis",

    focusCard: {
      titleId: "Analisis Penjualan Kopi",
      titleEn: "Coffee Sales Insights",
      items: [
        {
          labelId: "Masalah",
          labelEn: "Problem",
          textId: "Perubahan penjualan dan profitabilitas perlu dievaluasi berdasarkan periode dan performa setiap cabang.",
          textEn: "Changes in sales and profitability need to be evaluated over time and across branch performance."
        },
        {
          labelId: "Temuan Utama",
          labelEn: "Key Insight",
          textId: "Penjualan 2025 meningkat menuju Oktober, tetapi gross profit margin mengalami penurunan tajam pada Juli.",
          textEn: "Sales in 2025 increased toward October, while gross profit margin experienced a sharp decline in July."
        },
        {
          labelId: "Rekomendasi",
          labelEn: "Recommendation",
          textId: "Evaluasi penyebab penurunan margin pada Juli dan identifikasi faktor yang mendorong peningkatan penjualan hingga Oktober.",
          textEn: "Investigate the causes of the July margin decline and identify the factors driving sales growth through October."
        }
      ]
    },

    metrics: [
      ["303K+", "Baris Data", "Data Rows", "▤"],
      ["3", "Halaman Dashboard", "Dashboard Pages", "▧"],
      ["17", "Visualisasi", "Visualizations", "▥"],
      ["4", "Tahapan Analisis", "Analysis Stages", "⌘"]
    ],

    overviewId: "Coffee Sales Analysis merupakan proyek analisis data menggunakan dataset dengan lebih dari 303.000 baris transaksi penjualan. Proyek ini mencakup proses pembersihan dan transformasi data menggunakan Power Query, kemudian dilanjutkan dengan analisis berdasarkan waktu, produk, kategori, dan cabang. Data tersebut digunakan untuk mengevaluasi perkembangan penjualan serta profitabilitas bisnis kopi.",
    overviewEn: "Coffee Sales Analysis is a data analytics project using a dataset containing more than 303,000 sales transactions. The project includes data cleaning and transformation using Power Query, followed by analysis based on time, products, categories, and branches. The data is used to evaluate sales development and the profitability of the coffee business.",

    objectiveId: "Proyek ini bertujuan untuk mengidentifikasi tren penjualan dan memahami faktor yang memengaruhi performa setiap cabang. Analisis juga difokuskan pada perbandingan kontribusi produk dan kategori, perubahan penjualan berdasarkan periode, serta hubungan antara perkembangan penjualan dan profitabilitas. Hasilnya diharapkan dapat memberikan informasi yang lebih terstruktur untuk mengevaluasi kinerja bisnis.",
    objectiveEn: "This project aims to identify sales trends and understand the factors influencing the performance of each branch. The analysis also focuses on comparing product and category contributions, examining sales changes across periods, and exploring the relationship between sales development and profitability. The results are intended to provide structured information for evaluating business performance.",

    outcomeId: "Menghasilkan dashboard Power BI interaktif yang terdiri dari 3 halaman dengan 17 visualisasi. Dashboard menampilkan perkembangan penjualan, gross profit margin, performa cabang, serta kontribusi produk dan kategori. Salah satu temuan analisis menunjukkan bahwa penjualan selama 2025 meningkat menuju Oktober, sementara gross profit margin mengalami penurunan tajam pada Juli. Temuan tersebut dapat digunakan sebagai dasar untuk mengevaluasi perubahan performa bisnis.",
    outcomeEn: "The project produced an interactive Power BI dashboard consisting of 3 pages with 17 visualizations. The dashboard presents sales trends, gross profit margin, branch performance, and product and category contributions. One of the findings shows that sales in 2025 increased toward October, while gross profit margin experienced a sharp decline in July. These findings can serve as a basis for evaluating changes in business performance.",

    processId: [
      ["01", "Data Inspection", "Memahami kolom transaksi, produk, dan cabang serta memeriksa kualitas data."],
      ["02", "Data Cleaning", "Membersihkan dan menyiapkan data menggunakan Power Query."],
      ["03", "Analysis", "Membandingkan penjualan berdasarkan produk, cabang, kategori, dan periode."],
      ["04", "Visualization", "Menyusun visualisasi dan filter interaktif di Power BI."]
    ],

    processEn: [
      ["01", "Data Inspection", "Reviewed transaction, product, and branch fields and checked data quality."],
      ["02", "Data Cleaning", "Cleaned and prepared the data using Power Query."],
      ["03", "Analysis", "Compared sales by product, branch, category, and period."],
      ["04", "Visualization", "Built visualizations and interactive filters in Power BI."]
    ],

    images: ["images/projects/coffee-sales.jpeg",
      "images/projects/coffee-sales2.jpeg",
      "images/projects/coffee-sales3.jpeg"
    ]
  },


  /* =====================================
     03. ELECTRONICS SALES
  ===================================== */

  "electronics-sales": {
    title: "Electronics Sales Analysis",
    category: "PROJECT 03 · GOOGLE DATA STUDIO",
    leadId: "Proyek ini berfokus pada eksplorasi data transaksi penjualan elektronik untuk memahami perkembangan penjualan, kontribusi wilayah, serta karakteristik pelanggan. Data divisualisasikan menggunakan Google Data Studio ke dalam dashboard interaktif sehingga informasi mengenai performa penjualan dapat ditinjau melalui berbagai indikator dan filter.",
    leadEn: "This project focuses on exploring electronics sales transaction data to understand sales development, regional contributions, and customer characteristics. The data is visualized using Google Data Studio in an interactive dashboard, allowing sales performance information to be explored through various indicators and filters.",
    categoryInfo: "Data Analytics · Dashboard",
    tools: "Google Data Studio",
    focus: "Sales and Customer Analysis",
    projectType: "dashboard",
    externalUrl: "https://datastudio.google.com/s/rc6PfDSGrqs",
    actionLabelId: "Lihat Dashboard",
    actionLabelEn: "View Dashboard",

    focusCard: {
      titleId: "Analisis Penjualan Elektronik",
      titleEn: "Electronics Sales Insights",
      items: [
        {
          labelId: "Masalah",
          labelEn: "Problem",
          textId: "Performa penjualan perlu dipantau berdasarkan tren waktu, wilayah, produk, dan segmen pelanggan.",
          textEn: "Sales performance needs to be monitored across time trends, regions, products, and customer segments."
        },
        {
          labelId: "Temuan Utama",
          labelEn: "Key Insight",
          textId: "Penjualan menunjukkan tren penurunan sejak 2023 hingga 2025, sementara DKI Jakarta menjadi wilayah dengan penjualan tertinggi.",
          textEn: "Sales showed a declining trend from 2023 to 2025, while DKI Jakarta recorded the highest sales."
        },
        {
          labelId: "Rekomendasi",
          labelEn: "Recommendation",
          textId: "Investigasi faktor penurunan penjualan dan evaluasi strategi berdasarkan performa wilayah serta karakteristik pelanggan.",
          textEn: "Investigate the factors behind declining sales and evaluate strategies based on regional performance and customer characteristics."
        }
      ]
    },

    metrics: [
      ["4,950+", "Transaksi", "Transactions", "▤"],
      ["1", "Halaman Dashboard", "Dashboard Page", "▧"],
      ["10+", "Visualisasi", "Visualizations", "▥"],
      ["Interactive", "Filter Dashboard", "Dashboard Filters", "⌘"]
    ],

    overviewId: "Electronics Sales Analytics merupakan proyek analisis data yang menggunakan dataset dengan lebih dari 4.950 transaksi penjualan. Analisis mencakup perkembangan penjualan berdasarkan periode, distribusi transaksi berdasarkan wilayah, performa produk, segmentasi pelanggan, frekuensi pembelian, serta metode pembayaran. Data kemudian disajikan melalui dashboard yang dilengkapi visualisasi dan filter interaktif.",
    overviewEn: "Electronics Sales Analytics is a data analytics project using a dataset containing more than 4,950 sales transactions. The analysis covers sales development over time, transaction distribution by region, product performance, customer segmentation, purchase frequency, and payment methods. The data is then presented through a dashboard equipped with visualizations and interactive filters.",

    objectiveId: "Proyek ini bertujuan untuk memahami pola dan perkembangan penjualan elektronik berdasarkan waktu, wilayah, produk, dan karakteristik pelanggan. Analisis dilakukan untuk mengetahui wilayah dengan kontribusi penjualan tertinggi, mengidentifikasi perubahan tren penjualan, serta mengeksplorasi pola transaksi dan preferensi pelanggan. Dashboard juga dirancang untuk memudahkan pengguna dalam membandingkan data melalui filter yang tersedia.",
    objectiveEn: "This project aims to understand electronics sales patterns and development based on time, region, products, and customer characteristics. The analysis identifies regions with the highest sales contributions, examines changes in sales trends, and explores transaction patterns and customer preferences. The dashboard is also designed to help users compare data through available filters.",

    outcomeId: "Menghasilkan dashboard Google Data Studio dalam satu halaman dengan lebih dari 10 visualisasi dan filter interaktif. Dashboard menyajikan ringkasan penjualan, tren transaksi, distribusi wilayah, performa produk, serta karakteristik pelanggan. Hasil analisis menunjukkan adanya tren penurunan penjualan sejak 2023 hingga 2025, sementara DKI Jakarta menjadi wilayah dengan penjualan tertinggi.",
    outcomeEn: "The project produced a Google Data Studio dashboard consisting of one page with more than 10 visualizations and interactive filters. The dashboard presents sales summaries, transaction trends, regional distribution, product performance, and customer characteristics. The analysis reveals a declining sales trend from 2023 to 2025, while DKI Jakarta recorded the highest sales.",

    processId: [
      ["01", "Data Understanding", "Memahami struktur transaksi dan atribut pelanggan serta produk."],
      ["02", "Data Preparation", "Menyiapkan field dan dimensi untuk kebutuhan visualisasi."],
      ["03", "Data Exploration", "Mengeksplorasi segmen pelanggan, metode pembayaran, dan distribusi penjualan."],
      ["04", "Dashboard Design", "Menyusun visualisasi dan filter interaktif di Google Data Studio."]
    ],

    processEn: [
      ["01", "Data Understanding", "Reviewed transaction structures and customer and product attributes."],
      ["02", "Data Preparation", "Prepared fields and dimensions required for visualization."],
      ["03", "Data Exploration", "Explored customer segments, payment methods, and sales distribution."],
      ["04", "Dashboard Design", "Created visualizations and interactive filters in Google Data Studio."]
    ],

    images: ["images/projects/Electronics-Sales.jpeg"]
  },


  /* =====================================
     04. PCOS CLASSIFICATION
  ===================================== */

  "pcos-classification": {
    title: "PCOS Classification",
    category: "PROJECT 04 · MACHINE LEARNING",
    leadId: "Proyek ini merupakan penelitian klasifikasi Polycystic Ovary Syndrome (PCOS) menggunakan algoritma Support Vector Machine (SVM). Penelitian menggabungkan Genetic Algorithm untuk seleksi fitur dan Bayesian Optimization untuk optimasi hyperparameter guna memperoleh model klasifikasi dengan performa yang optimal. Hasil penelitian kemudian diimplementasikan dalam aplikasi berbasis web menggunakan Streamlit.",
    leadEn: "This project is a Polycystic Ovary Syndrome (PCOS) classification study using the Support Vector Machine (SVM) algorithm. The research combines Genetic Algorithm for feature selection and Bayesian Optimization for hyperparameter tuning to obtain an optimized classification model. The research results are then implemented in a web-based application using Streamlit.",
    categoryInfo: "Machine Learning · Classification",
    tools: "Python, SVM, Genetic Algorithm, Bayesian Optimization",
    focus: "Classification Model Development",

    projectType: "website",
    externalUrl: "https://pcos-prediction-app.streamlit.app/",
    actionLabelId: "Lihat Aplikasi",
    actionLabelEn: "View Application",

    focusCard: {
      titleId: "Model Insights",
      titleEn: "Model Insights",
      items: [
        {
          labelId: "Masalah",
          labelEn: "Problem",
          textId: "Klasifikasi PCOS melibatkan sejumlah fitur yang perlu dianalisis untuk mengidentifikasi pola antara kasus PCOS dan non-PCOS. Penggunaan fitur yang kurang relevan dan parameter model yang belum optimal dapat memengaruhi performa klasifikasi.",
          textEn: "PCOS classification involves multiple features that need to be analyzed to identify patterns between PCOS and non-PCOS cases. Irrelevant features and suboptimal model parameters may affect classification performance."
        },
        {
          labelId: "Pendekatan",
          labelEn: "Approach",
          textId: "Menggunakan Genetic Algorithm (GA) untuk seleksi fitur dan Bayesian Optimization (BO) untuk optimasi hyperparameter Support Vector Machine (SVM).",
          textEn: "Use Genetic Algorithm (GA) for feature selection and Bayesian Optimization (BO) to optimize Support Vector Machine (SVM) hyperparameters."
        },
        {
          labelId: "Hasil",
          labelEn: "Result",
          textId: "Menghasilkan model terbaik menggunakan Linear Kernel SVM setelah seleksi fitur GA dan optimasi BO. Seleksi fitur mengurangi jumlah fitur dari 41 menjadi 36, dengan akurasi 92,66% dan ROC-AUC 96,35%.",
          textEn: "The best model used a Linear Kernel SVM after GA feature selection and BO optimization. Feature selection reduced the number of features from 41 to 36, achieving 92.66% accuracy and a 96.35% ROC-AUC."
        }
      ]
    },

    metrics: [
      ["92.66%", "Akurasi Model", "Model Accuracy", "▤"],
      ["96.35%", "ROC-AUC", "ROC-AUC", "▧"],
      ["541", "Data Pasien", "Patient Records", "▥"],
      ["36", "Fitur Terpilih", "Selected Features", "⌘"]
    ],

    overviewId: "Penelitian ini menggunakan dataset PCOS yang terdiri dari 541 data dan 44 fitur. Data dianalisis untuk mengidentifikasi pola yang berkaitan dengan klasifikasi PCOS dan non-PCOS. Tahapan penelitian meliputi persiapan data, seleksi fitur menggunakan Genetic Algorithm, pemodelan Support Vector Machine, serta optimasi hyperparameter menggunakan Bayesian Optimization.",
    overviewEn: "This research uses a PCOS dataset containing 541 records and 44 features. The data is analyzed to identify patterns related to PCOS and non-PCOS classification. The research stages include data preparation, feature selection using Genetic Algorithm, Support Vector Machine modeling, and hyperparameter optimization using Bayesian Optimization.",

    objectiveId: "Penelitian ini bertujuan mengembangkan model klasifikasi PCOS dengan memanfaatkan seleksi fitur dan optimasi parameter model. Genetic Algorithm digunakan untuk memilih fitur yang relevan, sedangkan Bayesian Optimization digunakan untuk mencari kombinasi hyperparameter terbaik pada model SVM. Pendekatan ini diharapkan dapat meningkatkan kemampuan model dalam membedakan data PCOS dan non-PCOS.",
    objectiveEn: "This research aims to develop a PCOS classification model by applying feature selection and model parameter optimization. Genetic Algorithm is used to select relevant features, while Bayesian Optimization searches for the best hyperparameter combination for the SVM model. This approach is intended to improve the model's ability to distinguish between PCOS and non-PCOS records.",

    outcomeId: "Penelitian menghasilkan model terbaik menggunakan Linear Kernel SVM setelah proses seleksi fitur Genetic Algorithm dan optimasi Bayesian Optimization. Jumlah fitur berhasil dikurangi dari 41 menjadi 36 fitur terpilih, dengan akurasi sebesar 92,66% dan ROC-AUC sebesar 96,35%. Model kemudian diimplementasikan ke dalam aplikasi berbasis web menggunakan Streamlit.",
    outcomeEn: "The research produced the best model using Linear Kernel SVM after Genetic Algorithm feature selection and Bayesian Optimization. The number of features was reduced from 41 to 36 selected features, achieving 92.66% accuracy and a 96.35% ROC-AUC score. The model was then implemented in a web-based application using Streamlit.",

    processId: [
      ["01", "Data Preparation", "Menyiapkan dataset dan memeriksa kualitas data."],
      ["02", "Feature Selection", "Memilih fitur relevan menggunakan Genetic Algorithm."],
      ["03", "Model Optimization", "Mengoptimasi hyperparameter SVM menggunakan Bayesian Optimization."],
      ["04", "Implementation", "Mengimplementasikan model klasifikasi ke aplikasi Streamlit."]
    ],

    processEn: [
      ["01", "Data Preparation", "Prepared the dataset and checked data quality."],
      ["02", "Feature Selection", "Selected relevant features using Genetic Algorithm."],
      ["03", "Model Optimization", "Optimized SVM hyperparameters using Bayesian Optimization."],
      ["04", "Implementation", "Implemented the classification model in a Streamlit application."]
    ],

    images: ["images/projects/PCOS.jpeg",
      "images/projects/pcos2.jpeg",
      "images/projects/pcos3.jpeg",
      "images/projects/pcos4.jpeg",
      "images/projects/pcos5.jpeg",
      "images/projects/pcos6.png",
      "images/projects/pcos7.png",
      "images/projects/pcos8.png",
    ]
  },

    /* =====================================
     05. ELDERLY HEALTH
  ===================================== */

  "elderly-health": {
    title: "Elderly Health Monitoring Website",
    category: "PROJECT 05 · WEB DEVELOPMENT",
    leadId: "Proyek ini merupakan pengembangan website untuk mendukung pengelolaan dan pemantauan informasi kesehatan lansia. Sistem dirancang dengan mengintegrasikan website dan database SQL sehingga informasi dapat disimpan, dikelola, dan ditampilkan secara lebih terstruktur. Proyek ini menggabungkan penerapan pengelolaan basis data dengan pengembangan aplikasi berbasis web.",
    leadEn: "This project involves developing a website to support the management and monitoring of elderly health information. The system is designed by integrating a website with an SQL database, allowing information to be stored, managed, and presented in a more structured way. The project combines database management with web application development.",
    categoryInfo: "Database · Web Development",
    tools: "SQL, Web Development",
    focus: "Health Information Management",

    focusCard: {
      titleId: "Development Highlights",
      titleEn: "Development Highlights",
      items: [
        {
          labelId: "Masalah",
          labelEn: "Problem",
          textId: "Informasi kesehatan lansia perlu dikelola secara terstruktur agar data dapat disimpan, diperbarui, dan dipantau dengan lebih mudah.",
          textEn: "Elderly health information needs to be managed systematically so that records can be stored, updated, and monitored more easily."
        },
        {
          labelId: "Solusi",
          labelEn: "Solution",
          textId: "Mengembangkan website yang terintegrasi dengan database SQL untuk mendukung pengelolaan dan pemantauan informasi kesehatan lansia.",
          textEn: "Develop a website integrated with an SQL database to support the management and monitoring of elderly health information."
        },
        {
          labelId: "Implementasi",
          labelEn: "Implementation",
          textId: "Mengimplementasikan database SQL dan menghubungkannya dengan website untuk mendukung penyimpanan, pengelolaan, serta penyajian informasi kesehatan.",
          textEn: "Implement an SQL database and connect it to the website to support the storage, management, and presentation of health information."
        }
      ]
    },

    metrics: [
      ["SQL", "Database", "Database", "▤"],
      ["Web", "Platform", "Platform", "▧"],
      ["CRUD", "Pengelolaan Data", "Data Management", "▥"],
      ["01", "Proyek", "Project", "⌘"]
    ],

    overviewId: "Elderly Health Monitoring Website merupakan proyek pengembangan aplikasi berbasis web yang berfokus pada pengelolaan informasi kesehatan lansia. Proyek ini memanfaatkan database SQL sebagai media penyimpanan data dan website sebagai antarmuka untuk mengakses serta mengelola informasi. Pengembangan dilakukan dengan memperhatikan hubungan antara struktur basis data dan kebutuhan pengelolaan informasi pada aplikasi.",
    overviewEn: "Elderly Health Monitoring Website is a web application development project focused on managing elderly health information. The project uses an SQL database to store data and a website interface to access and manage the information. Development focuses on the relationship between database structure and the application's information management requirements.",

    objectiveId: "Proyek ini bertujuan untuk membangun sistem yang dapat membantu pengelolaan informasi kesehatan lansia secara terstruktur. Penggunaan database SQL ditujukan untuk mendukung penyimpanan dan pengelolaan data, sedangkan website dikembangkan sebagai media untuk menyajikan informasi agar lebih mudah diakses dan dipantau.",
    objectiveEn: "This project aims to build a system that supports structured management of elderly health information. The SQL database is used to support data storage and management, while the website serves as an interface for presenting information in a more accessible and manageable way.",

    outcomeId: "Menghasilkan website yang terintegrasi dengan database SQL untuk mendukung penyimpanan, pengelolaan, dan penyajian informasi kesehatan lansia. Proyek ini menerapkan konsep pengelolaan basis data dan integrasi antara sisi aplikasi dengan penyimpanan data. Hasil pengembangan menjadi implementasi penerapan SQL dalam sebuah sistem informasi berbasis web.",
    outcomeEn: "The project produced a website integrated with an SQL database to support the storage, management, and presentation of elderly health information. It applies database management concepts and integration between the application and data storage layers. The result demonstrates the implementation of SQL in a web-based information system.",

    processId: [
      ["01", "Database Design", "Menyusun struktur basis data untuk menyimpan informasi."],
      ["02", "SQL Operations", "Menggunakan SQL untuk mengelola dan mengambil data."],
      ["03", "Website Integration", "Menghubungkan website dengan basis data."],
      ["04", "Information Display", "Menyajikan informasi melalui antarmuka website."]
    ],

    processEn: [
      ["01", "Database Design", "Structured the database to store information."],
      ["02", "SQL Operations", "Used SQL to manage and retrieve data."],
      ["03", "Website Integration", "Connected the website to the database."],
      ["04", "Information Display", "Presented information through the website interface."]
    ],

    images: ["images/projects/elderly.png"]
  },


  /* =====================================
     06. FINANCIAL & PROPERTY
  ===================================== */

  "financial-property": {
    title: "Financial & Property Management App",
    category: "PROJECT 06 · JAVA",
    leadId: "Proyek ini berfokus pada pengembangan aplikasi untuk membantu pengelolaan informasi keuangan dan properti dalam satu sistem. Aplikasi dibangun menggunakan Java dengan menerapkan operasi CRUD (Create, Read, Update, Delete) untuk mendukung proses pencatatan transaksi serta pengelolaan data. Pengembangan ini menjadi penerapan konsep pemrograman berorientasi objek dan pengelolaan data dalam sebuah aplikasi.",
    leadEn: "This project focuses on developing an application to manage financial and property information within a single system. The application is built using Java and implements CRUD (Create, Read, Update, Delete) operations to support transaction recording and data management. The development applies object-oriented programming concepts and data management in an application.",
    categoryInfo: "Application Development · Database",
    tools: "Java, SQL, Database",
    focus: "Financial and Property Management",

    focusCard: {
      titleId: "Development Highlights",
      titleEn: "Development Highlights",
      items: [
        {
          labelId: "Masalah",
          labelEn: "Problem",
          textId: "Pencatatan transaksi keuangan dan pengelolaan informasi properti membutuhkan sistem yang terstruktur agar data lebih mudah dikelola.",
          textEn: "Financial transaction records and property information require a structured system to make data easier to manage."
        },
        {
          labelId: "Solusi",
          labelEn: "Solution",
          textId: "Mengembangkan aplikasi yang mengintegrasikan pengelolaan informasi keuangan dan properti dalam satu sistem.",
          textEn: "Develop an application that integrates financial and property information management into a single system."
        },
        {
          labelId: "Implementasi",
          labelEn: "Implementation",
          textId: "Mengembangkan aplikasi menggunakan Java dengan operasi CRUD untuk mendukung proses pencatatan transaksi serta pengelolaan data keuangan dan properti.",
          textEn: "Develop the application using Java and CRUD operations to support transaction recording and financial and property data management."
        }
      ]
    },

    metrics: [
      ["Java", "Bahasa Pemrograman", "Programming Language", "▤"],
      ["SQL", "Database", "Database", "▧"],
      ["CRUD", "Operasi Data", "Data Operations", "▥"],
      ["01", "Aplikasi", "Application", "⌘"]
    ],

    overviewId: "Financial & Property Management App merupakan proyek pengembangan aplikasi menggunakan bahasa pemrograman Java. Aplikasi dirancang untuk mengintegrasikan pengelolaan informasi keuangan dan properti. Dalam pengembangannya, operasi CRUD diterapkan sebagai fungsi utama untuk mengelola data, mulai dari menambahkan informasi baru, menampilkan data, memperbarui informasi, hingga menghapus data yang tidak diperlukan.",
    overviewEn: "Financial & Property Management App is an application development project using the Java programming language. The application is designed to integrate financial and property information management. CRUD operations are implemented as the main functions for managing data, including adding new information, displaying records, updating information, and deleting unnecessary data.",

    objectiveId: "Proyek ini bertujuan untuk membangun aplikasi yang dapat mengelola informasi keuangan dan properti secara terintegrasi. Penerapan operasi CRUD ditujukan untuk mempermudah proses pengelolaan data serta memberikan pengalaman penggunaan sistem yang lebih terstruktur. Proyek ini juga menjadi sarana penerapan konsep dasar pemrograman Java dalam pengembangan aplikasi.",
    objectiveEn: "This project aims to build an application that manages financial and property information in an integrated system. CRUD operations are implemented to simplify data management and provide a more structured application experience. The project also serves as an application of fundamental Java programming concepts in software development.",

    outcomeId: "Menghasilkan aplikasi berbasis Java yang mengintegrasikan pengelolaan informasi keuangan dan properti. Aplikasi mendukung fungsi penambahan, penampilan, pembaruan, dan penghapusan data melalui operasi CRUD. Hasil pengerjaan menunjukkan penerapan konsep pemrograman Java dalam membangun aplikasi dengan fungsi pengelolaan data.",
    outcomeEn: "The project produced a Java-based application that integrates financial and property information management. The application supports adding, displaying, updating, and deleting records through CRUD operations. The result demonstrates the application of Java programming concepts in developing a data management application.",

    processId: [
      ["01", "Requirement Analysis", "Mengidentifikasi kebutuhan pencatatan keuangan dan informasi properti."],
      ["02", "Database Structure", "Menyiapkan struktur penyimpanan data."],
      ["03", "Application Development", "Mengembangkan fungsi aplikasi menggunakan Java."],
      ["04", "CRUD Implementation", "Menerapkan fungsi tambah, baca, ubah, dan hapus data."]
    ],

    processEn: [
      ["01", "Requirement Analysis", "Identified financial recording and property information requirements."],
      ["02", "Database Structure", "Prepared the data storage structure."],
      ["03", "Application Development", "Developed application functions using Java."],
      ["04", "CRUD Implementation", "Implemented create, read, update, and delete operations."]
    ],

    images: ["images/projects/rise.png"]
  },


  /* =====================================
     07. NUTRIGUIDE
  ===================================== */

  "nutriguide": {
    title: "NutriGuide",
    category: "PROJECT 07 · WEB DEVELOPMENT",
    leadId: "NutriGuide merupakan proyek pengembangan website edukasi nutrisi yang dirancang untuk membantu pengguna memperoleh informasi seputar kebutuhan gizi dan pola hidup sehat. Website ini menggabungkan fitur kalkulator kebutuhan nutrisi, artikel edukasi, serta informasi konsultasi ahli gizi dalam satu platform. Dalam proyek ini, pengerjaan mencakup perancangan UI/UX dan implementasi front-end website.",
    leadEn: "NutriGuide is a nutrition education website project designed to help users access information about nutritional needs and healthy lifestyles. The website combines a nutritional needs calculator, educational articles, and dietitian consultation information in one platform. The project involves UI/UX design and front-end website implementation.",
    categoryInfo: "Web Development · Team Project",
    tools: "HTML, CSS, JavaScript, Figma",
    focus: "Nutrition Education Website",
    projectType: "website",
    externalUrl: "https://relystrix-code.github.io/NutriGuide/",
    actionLabelId: "Lihat Website",
    actionLabelEn: "View Website",

    focusCard: {
      titleId: "Development Highlights",
      titleEn: "Development Highlights",
      items: [
        {
          labelId: "Masalah",
          labelEn: "Problem",
          textId: "Pengguna membutuhkan akses informasi mengenai kebutuhan nutrisi, edukasi gizi, dan informasi konsultasi ahli gizi dalam satu platform.",
          textEn: "Users need access to nutritional requirements, nutrition education, and dietitian consultation information in one platform."
        },
        {
          labelId: "Solusi",
          labelEn: "Solution",
          textId: "Mengembangkan website edukasi nutrisi yang menggabungkan kalkulator kebutuhan gizi, artikel edukasi, dan informasi konsultasi ahli gizi.",
          textEn: "Develop a nutrition education website combining a nutritional needs calculator, educational articles, and dietitian consultation information."
        },
        {
          labelId: "Implementasi",
          labelEn: "Implementation",
          textId: "Merancang UI/UX dan mengimplementasikan front-end website dengan fitur kalkulator nutrisi, artikel, serta kartu informasi konsultasi ahli gizi yang terhubung ke WhatsApp.",
          textEn: "Design the UI/UX and implement the website front end with a nutrition calculator, articles, and dietitian consultation cards linked to WhatsApp."
        }
      ]
    },

    metrics: [
      ["9", "Fitur Utama", "Main Features", "▤"],
      ["Web", "Platform", "Platform", "▧"],
      ["UI/UX", "Perancangan", "Design", "▥"],
      ["Team", "Capstone", "Capstone", "⌘"]
    ],

    overviewId: "NutriGuide dikembangkan sebagai platform edukasi nutrisi yang menyediakan beberapa fitur utama untuk mendukung kebutuhan informasi pengguna. Fitur yang dikembangkan mencakup kalkulator kebutuhan nutrisi, artikel edukasi seputar gizi, serta kartu informasi ahli gizi yang menyediakan akses konsultasi melalui WhatsApp. Proyek ini dikerjakan secara tim dengan tanggung jawab pada perancangan UI/UX dan pengembangan front-end.",
    overviewEn: "NutriGuide was developed as a nutrition education platform that provides several key features to support users' information needs. The features include a nutritional needs calculator, nutrition-related educational articles, and dietitian information cards that provide consultation access through WhatsApp. This team project involved responsibilities in UI/UX design and front-end development.",

    objectiveId: "Proyek ini bertujuan untuk menyediakan platform yang menggabungkan informasi dan fitur edukasi nutrisi dalam satu website. Pengembangan difokuskan pada penyajian informasi yang mudah dipahami, penyediaan kalkulator untuk membantu pengguna memperkirakan kebutuhan nutrisi, serta akses informasi konsultasi ahli gizi. Perancangan antarmuka juga diarahkan untuk menciptakan pengalaman penggunaan yang mudah dipahami dan dinavigasi.",
    objectiveEn: "This project aims to provide a platform that combines nutrition information and educational features in one website. Development focuses on presenting easy-to-understand information, providing a calculator to help users estimate their nutritional needs, and offering access to dietitian consultation information. The interface is also designed to create an intuitive and easy-to-navigate user experience.",

    outcomeId: "Menghasilkan website edukasi nutrisi dengan 9 fitur utama, termasuk kalkulator kebutuhan nutrisi, artikel edukasi, dan informasi konsultasi ahli gizi. Pada proyek ini, tanggung jawab mencakup perancangan antarmuka menggunakan Figma serta implementasi front-end website. Fitur informasi konsultasi dilengkapi dengan tautan WhatsApp untuk memudahkan pengguna mengakses kontak ahli gizi.",
    outcomeEn: "The project produced a nutrition education website with 9 main features, including a nutritional needs calculator, educational articles, and dietitian consultation information. Responsibilities included designing the interface using Figma and implementing the website front end. The consultation information feature includes WhatsApp links to make dietitian contact information more accessible.",

    processId: [
      ["01", "Planning", "Mengidentifikasi kebutuhan pengguna dan ruang lingkup fitur edukasi nutrisi."],
      ["02", "UI/UX Design", "Merancang alur dan antarmuka website."],
      ["03", "Front-End Development", "Mengimplementasikan antarmuka menggunakan HTML, CSS, dan JavaScript."],
      ["04", "Team Capstone", "Mengintegrasikan hasil pekerjaan sebagai proyek capstone tim."]
    ],

    processEn: [
      ["01", "Planning", "Identified user needs and the scope of nutrition education features."],
      ["02", "UI/UX Design", "Designed the website flow and interface."],
      ["03", "Front-End Development", "Implemented the interface using HTML, CSS, and JavaScript."],
      ["04", "Team Capstone", "Integrated the work as a team capstone project."]
    ],

    images: ["images/projects/nutriguide.jpeg"]
  },


  /* =====================================
     08. GOFAST
  ===================================== */

  "gofast": {
    title: "GoFast",
    category: "PROJECT 08 · UI/UX DESIGN",
    leadId: "GoFast merupakan proyek perancangan UI/UX yang berfokus pada pembuatan antarmuka aplikasi dengan struktur navigasi dan alur penggunaan yang terorganisasi. Proyek ini mencakup penyusunan tampilan antarmuka, penentuan tata letak elemen, serta perancangan alur interaksi pengguna menggunakan Figma. Rancangan dibuat untuk memberikan pengalaman penggunaan aplikasi yang lebih jelas dan mudah dipahami.",
    leadEn: "GoFast is a UI/UX design project focused on creating an application interface with an organized navigation structure and user flow. The project includes interface layout planning, element arrangement, and user interaction flow design using Figma. The design aims to provide a clearer and more intuitive application experience.",
    categoryInfo: "UI/UX Design",
    tools: "Figma",
    focus: "Interface Design and Prototyping",
    projectType: "uiux",
    externalUrl: "https://www.figma.com/proto/873BJ2ZpBze0rpHqME8ewH/Software-Engineering?node-id=1-154&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A130",
    actionLabelId: "Lihat Prototype Figma",
    actionLabelEn: "View Figma Prototype",

    focusCard: {
      titleId: "Design Solution",
      titleEn: "Design Solution",
      items: [
        {
          labelId: "Masalah",
          labelEn: "Problem",
          textId: "Pengguna membutuhkan antarmuka aplikasi dengan struktur navigasi yang jelas agar dapat memahami alur penggunaan dan menemukan fitur dengan mudah.",
          textEn: "Users need a clear navigation structure to understand the application flow and find features easily."
        },
        {
          labelId: "Solusi",
          labelEn: "Solution",
          textId: "Merancang antarmuka dengan tata letak dan alur navigasi yang terorganisasi untuk mendukung pengalaman penggunaan aplikasi.",
          textEn: "Design an interface with an organized layout and navigation flow to support the application user experience."
        },
        {
          labelId: "Implementasi",
          labelEn: "Implementation",
          textId: "Mengembangkan rancangan UI/UX menggunakan Figma, mencakup penyusunan tampilan dan alur antarmuka dalam lebih dari 16 layar desain.",
          textEn: "Create the UI/UX design in Figma, covering interface layouts and user flows across more than 16 design screens."
        }
      ]
    },

    metrics: [
      ["16+", "Layar Desain", "Design Screens", "▤"],
      ["Figma", "Design Tool", "Design Tool", "▧"],
      ["UI/UX", "Fokus Proyek", "Project Focus", "▥"],
      ["01", "Proyek", "Project", "⌘"]
    ],

    overviewId: "GoFast merupakan proyek desain antarmuka aplikasi yang dikerjakan menggunakan Figma. Proses perancangan mencakup penyusunan struktur halaman, pengaturan tata letak, pemilihan elemen visual, serta pengembangan alur navigasi antarhalaman. Setiap tampilan dirancang sebagai bagian dari satu kesatuan pengalaman penggunaan aplikasi.",
    overviewEn: "GoFast is an application interface design project created using Figma. The design process includes page structure planning, layout arrangement, visual element selection, and navigation flow development between screens. Each interface is designed as part of a consistent application experience.",

    objectiveId: "Proyek ini bertujuan untuk menghasilkan rancangan antarmuka aplikasi dengan navigasi yang terstruktur dan alur interaksi yang mudah dipahami. Perancangan difokuskan pada konsistensi tampilan antarhalaman, penempatan elemen yang sesuai, serta penyusunan alur penggunaan agar pengguna dapat memahami fungsi dan perpindahan fitur dalam aplikasi.",
    objectiveEn: "This project aims to create an application interface with structured navigation and easy-to-understand interaction flows. The design focuses on visual consistency across screens, appropriate element placement, and organized user flows to help users understand application functions and navigate between features.",

    outcomeId: "Menghasilkan rancangan UI/UX aplikasi menggunakan Figma yang mencakup lebih dari 16 layar desain. Hasil perancangan meliputi tampilan antarmuka dan alur navigasi yang disusun untuk menggambarkan interaksi pengguna dengan berbagai fitur aplikasi. Proyek ini menunjukkan penerapan prinsip dasar desain antarmuka dan penyusunan user flow dalam pengembangan produk digital.",
    outcomeEn: "The project produced a UI/UX application design using Figma, consisting of more than 16 design screens. The design includes interface layouts and navigation flows that illustrate user interactions with various application features. This project demonstrates the application of fundamental interface design principles and user flow planning in digital product development.",

    processId: [
      ["01", "User Flow", "Menyusun alur penggunaan aplikasi."],
      ["02", "Wireframing", "Membuat kerangka awal tata letak antarmuka."],
      ["03", "UI Design", "Mengembangkan tampilan visual dan komponen antarmuka."],
      ["04", "Prototyping", "Menyusun prototype untuk memperlihatkan alur interaksi."]
    ],

    processEn: [
      ["01", "User Flow", "Outlined the application user flow."],
      ["02", "Wireframing", "Created initial interface layout structures."],
      ["03", "UI Design", "Developed visual layouts and interface components."],
      ["04", "Prototyping", "Created a prototype to demonstrate interactions."]
    ],

    images: ["images/projects/gofast.png"]
  },


  /* =====================================
     09. COOKIFY
  ===================================== */

  "cookify": {
    title: "Cookify",
    category: "PROJECT 09 · UI/UX DESIGN",
    leadId: "Cookify merupakan proyek perancangan UI/UX aplikasi resep masakan yang dirancang untuk membantu pengguna menemukan dan mengeksplorasi berbagai inspirasi memasak. Proyek ini berfokus pada penyusunan tampilan antarmuka, struktur informasi resep, serta alur navigasi agar pengguna dapat menjelajahi konten aplikasi dengan lebih mudah. Seluruh rancangan antarmuka dibuat menggunakan Figma.",
    leadEn: "Cookify is a UI/UX design project for a recipe application designed to help users discover and explore different cooking inspirations. The project focuses on interface layout, recipe information structure, and navigation flow to make application content easier to explore. All interface designs are created using Figma.",
    categoryInfo: "UI/UX Design",
    tools: "Figma",
    focus: "Recipe App Interface Design",
    projectType: "uiux",
    externalUrl: "https://www.figma.com/proto/ugbxPOfJxSEd5H7wQitXTw/Human-And-Computer-Interaction?node-id=11-682&scaling=scale-down&content-scaling=fixed&page-id=6%3A4",
    actionLabelId: "Lihat Prototype Figma",
    actionLabelEn: "View Figma Prototype",

    focusCard: {
      titleId: "Design Solution",
      titleEn: "Design Solution",
      items: [
        {
          labelId: "Masalah",
          labelEn: "Problem",
          textId: "Pengguna membutuhkan cara yang praktis untuk menemukan resep masakan dan mengeksplorasi informasi resep melalui aplikasi.",
          textEn: "Users need a practical way to find recipes and explore recipe information through an application."
        },
        {
          labelId: "Solusi",
          labelEn: "Solution",
          textId: "Merancang konsep aplikasi resep masakan dengan penyajian informasi yang terstruktur agar pengguna dapat menjelajahi berbagai inspirasi memasak.",
          textEn: "Design a recipe application concept with structured information so users can explore different cooking inspirations."
        },
        {
          labelId: "Implementasi",
          labelEn: "Implementation",
          textId: "Membuat rancangan antarmuka aplikasi menggunakan Figma yang mencakup tampilan dan alur eksplorasi resep dalam lebih dari 35 layar desain.",
          textEn: "Create the application interface design in Figma, covering screens and recipe exploration flows across more than 35 design screens."
        }
      ]
    },

    metrics: [
      ["35+", "Layar Desain", "Design Screens", "▤"],
      ["Figma", "Design Tool", "Design Tool", "▧"],
      ["UI/UX", "Fokus Proyek", "Project Focus", "▥"],
      ["01", "Proyek", "Project", "⌘"]
    ],

    overviewId: "Cookify merupakan proyek desain aplikasi yang berfokus pada penyajian informasi resep masakan dalam sebuah platform digital. Proses perancangan mencakup pembuatan tampilan halaman, pengaturan komponen antarmuka, penyusunan informasi resep, serta perancangan alur navigasi untuk mendukung eksplorasi konten. Figma digunakan sebagai tools utama dalam proses desain dan penyusunan keseluruhan tampilan aplikasi.",
    overviewEn: "Cookify is an application design project focused on presenting recipe information through a digital platform. The design process includes creating page layouts, arranging interface components, structuring recipe information, and developing navigation flows to support content exploration. Figma is used as the primary tool for designing and organizing the application's overall interface.",

    objectiveId: "Proyek ini bertujuan untuk merancang aplikasi resep masakan dengan tampilan yang terstruktur dan mudah digunakan. Fokus perancangan mencakup kemudahan pengguna dalam menemukan resep, memahami informasi yang disajikan, serta berpindah antarhalaman melalui navigasi yang konsisten. Struktur antarmuka juga dirancang agar informasi resep dapat disajikan secara lebih terorganisasi.",
    objectiveEn: "This project aims to design a recipe application with a structured and user-friendly interface. The design focuses on helping users find recipes, understand the presented information, and navigate between pages through a consistent navigation system. The interface structure is also designed to present recipe information in a more organized way.",

    outcomeId: "Menghasilkan rancangan UI/UX aplikasi Cookify menggunakan Figma dengan lebih dari 35 layar desain. Rancangan mencakup berbagai tampilan antarmuka dan alur eksplorasi resep yang disusun untuk menggambarkan pengalaman pengguna dalam menggunakan aplikasi. Hasil proyek menjadi representasi visual dari konsep aplikasi resep masakan yang telah dirancang.",
    outcomeEn: "The project produced a Cookify UI/UX design using Figma, consisting of more than 35 design screens. The design includes various interface layouts and recipe exploration flows that illustrate the intended user experience. The result serves as a visual representation of the designed recipe application concept.",

    processId: [
      ["01", "Concept", "Menentukan konsep aplikasi dan kebutuhan informasi resep."],
      ["02", "User Flow", "Menyusun alur pengguna untuk menemukan dan melihat resep."],
      ["03", "Interface Design", "Merancang tampilan halaman dan komponen aplikasi."],
      ["04", "Prototype", "Menyusun prototype untuk menggambarkan interaksi antarlayar."]
    ],

    processEn: [
      ["01", "Concept", "Defined the application concept and recipe information needs."],
      ["02", "User Flow", "Outlined the user flow for discovering and viewing recipes."],
      ["03", "Interface Design", "Designed application screens and components."],
      ["04", "Prototype", "Created a prototype to demonstrate interactions between screens."]
    ],

    images: ["images/projects/cookify.jpeg"]
  }

};

/* =========================================
   GET PROJECT FROM URL
========================================= */

const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");
const project = projectDetails[projectId];

const detailRoot = document.getElementById("projectDetail");


/* =========================================
   PROJECT EXTERNAL ACTION & APPLICATION LIGHTBOX
========================================= */

const projectExternalAction =
  document.getElementById("projectExternalAction");

const applicationLightbox =
  document.getElementById("applicationLightbox");

const applicationFrame =
  document.getElementById("applicationFrame");

const applicationClose =
  document.getElementById("applicationClose");

const applicationFallback =
  document.getElementById("applicationFallback");

const applicationNoticeLink =
  document.getElementById("applicationNoticeLink");

const applicationNoticeLinkEn =
  document.getElementById("applicationNoticeLinkEn");

const applicationOpenNew =
  document.getElementById("applicationOpenNew");

const applicationFallbackLink =
  document.getElementById("applicationFallbackLink");

const applicationModalTitle =
  document.getElementById("applicationModalTitle");


/* =========================================
   SET PROJECT EXTERNAL URL
========================================= */

if (projectExternalAction && project?.externalUrl) {

  // External action on project preview
  projectExternalAction.innerHTML = `
    <a
      href="${project.externalUrl}"
      class="btn-project-external"
      id="openApplication"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span class="lang-id">${project.actionLabelId}</span>
      <span class="lang-en">${project.actionLabelEn}</span>
      <span class="external-arrow">↗</span>
    </a>
  `;

  // Apply the active project's URL to every external link
  if (applicationNoticeLink) {
    applicationNoticeLink.href = project.externalUrl;
  }

  if (applicationNoticeLinkEn) {
    applicationNoticeLinkEn.href = project.externalUrl;
  }

  if (applicationOpenNew) {
    applicationOpenNew.href = project.externalUrl;
  }

  if (applicationFallbackLink) {
    applicationFallbackLink.href = project.externalUrl;
  }

  // Update modal title
  if (applicationModalTitle) {
    applicationModalTitle.textContent = project.title;
  }

  // Open application lightbox
  const openApplication =
    document.getElementById("openApplication");

  if (openApplication && applicationLightbox) {

    openApplication.addEventListener("click", function(event) {

      event.preventDefault();

      if (applicationFallback) {
        applicationFallback.classList.remove("show");
      }

      applicationLightbox.classList.add("active");

      applicationLightbox.setAttribute("aria-hidden", "false");

      document.body.style.overflow = "hidden";

      if (applicationFrame) {
        applicationFrame.src = project.externalUrl;
      }

    });

  }

}


/* =========================================
   CLOSE APPLICATION LIGHTBOX
========================================= */

function closeApplicationLightbox() {

  if (!applicationLightbox) return;

  applicationLightbox.classList.remove("active");

  applicationLightbox.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

  // Stop iframe when modal closes
  if (applicationFrame) {
    applicationFrame.src = "about:blank";
  }

}


// Close button
if (applicationClose) {

  applicationClose.addEventListener(
    "click",
    closeApplicationLightbox
  );

}


// Click outside modal
if (applicationLightbox) {

  applicationLightbox.addEventListener("click", function(event) {

    if (event.target === applicationLightbox) {
      closeApplicationLightbox();
    }

  });

}


// Escape key
document.addEventListener("keydown", function(event) {

  if (
    event.key === "Escape" &&
    applicationLightbox?.classList.contains("active")
  ) {
    closeApplicationLightbox();
  }

});


/* =========================================
   PROJECT NOT FOUND
========================================= */

if (!project) {

  detailRoot.innerHTML = `
    <section class="container detail-error">
      <h1>Project not found</h1>

      <p class="lang-id">
        Proyek tidak ditemukan. Silakan kembali ke halaman proyek.
      </p>

      <p class="lang-en">
        The requested project could not be found.
      </p>

      <a href="index.html#projects">← Back to Projects</a>
    </section>
  `;

} else {

  /* =========================================
     BASIC INFORMATION
  ========================================= */

  document.title = `${project.title} | Anindya Salsabila Putri`;

  const breadcrumb = document.getElementById("detailBreadcrumb");
  const category = document.getElementById("detailCategory");
  const title = document.getElementById("detailTitle");
  const leadId = document.getElementById("detailLeadId");
  const leadEn = document.getElementById("detailLeadEn");

  if (breadcrumb) breadcrumb.textContent = project.title;
  if (category) category.textContent = project.category;
  if (title) title.textContent = project.title;
  if (leadId) leadId.textContent = project.leadId;
  if (leadEn) leadEn.textContent = project.leadEn;


  /* =========================================
     PROJECT TAGS
  ========================================= */

  const detailTags = document.getElementById("detailTags");

  if (detailTags) {
    detailTags.innerHTML = (project.tools || "")
      .split(",")
      .map(tool => tool.trim())
      .filter(Boolean)
      .map(tool => `<span class="tag">${tool}</span>`)
      .join("");
  }


  /* =========================================
     HERO PROJECT HIGHLIGHTS
  ========================================= */

  const heroHighlights =
    document.getElementById("detailHeroHighlights");

  if (heroHighlights && project.metrics) {

    const primaryMetric = project.metrics[0];
    const secondaryMetrics = project.metrics.slice(1, 3);

    heroHighlights.innerHTML = `
      <div class="highlight-primary">

        <span class="highlight-label lang-id">
          ${primaryMetric[1]}
        </span>

        <span class="highlight-label lang-en">
          ${primaryMetric[2]}
        </span>

        <strong>${primaryMetric[0]}</strong>

        <span class="highlight-description">
          ${project.focus}
        </span>

      </div>

      <div class="highlight-secondary">

        ${secondaryMetrics.map(metric => `
          <div class="highlight-small">

            <strong>${metric[0]}</strong>

            <span class="lang-id">${metric[1]}</span>
            <span class="lang-en">${metric[2]}</span>

          </div>
        `).join("")}

      </div>
    `;
  }


  /* =========================================
     ABOUT THE PROJECT
  ========================================= */

  const textFields = [
    ["detailOverviewId", project.overviewId],
    ["detailOverviewEn", project.overviewEn],
    ["detailObjectiveId", project.objectiveId],
    ["detailObjectiveEn", project.objectiveEn],
    ["detailResultId", project.outcomeId],
    ["detailResultEn", project.outcomeEn]
  ];

  textFields.forEach(([id, value]) => {
    const element = document.getElementById(id);

    if (element) {
      element.textContent = value || "";
    }
  });


  /* =========================================
     PROJECT FOCUS CARD
  ========================================= */

  const focusTitle =
    document.getElementById("focusCardTitle");

  const focusContent =
    document.getElementById("detailInfoFocus");

  const focusData = project.focusCard;

  if (focusData && focusTitle && focusContent) {

    focusTitle.innerHTML = `
      <span class="lang-id">${focusData.titleId}</span>
      <span class="lang-en">${focusData.titleEn}</span>
    `;

    focusContent.innerHTML = focusData.items.map((item, index) => `
      <article class="focus-item">

        <div class="focus-item-heading">

          <span class="focus-item-number">
            ${String(index + 1).padStart(2, "0")}
          </span>

          <h4>
            <span class="lang-id">${item.labelId}</span>
            <span class="lang-en">${item.labelEn}</span>
          </h4>

        </div>

        <p>
          <span class="lang-id">${item.textId}</span>
          <span class="lang-en">${item.textEn}</span>
        </p>

      </article>
    `).join("");

  }


  /* =========================================
     WORKFLOW
  ========================================= */

  const processContainer =
    document.getElementById("detailProcess");

  function renderProcess(items) {

    return items.map(item => `
      <article class="detail-process-item">

        <div class="process-number">
          <span>${item[0]}</span>
          <i>↗</i>
        </div>

        <h3>${item[1]}</h3>

        <p>${item[2]}</p>

      </article>
    `).join("");

  }

  if (processContainer) {

    processContainer.innerHTML = `
      <div class="lang-id detail-process-grid">
        ${renderProcess(project.processId)}
      </div>

      <div class="lang-en detail-process-grid">
        ${renderProcess(project.processEn)}
      </div>
    `;

  }


  /* =========================================
     PROJECT IMAGE CAROUSEL
  ========================================= */

  const mainImage =
    document.getElementById("mainProjectImage");

  const previewPlaceholder =
    document.getElementById("previewPlaceholder");

  const previewImageWrap =
    document.getElementById("previewImageWrap");

  const previewFilename =
    document.getElementById("previewFilename");

  const previewPrev =
    document.getElementById("previewPrev");

  const previewNext =
    document.getElementById("previewNext");

  const previewDots =
    document.getElementById("previewDots");


  const projectImages = Array.isArray(project.images)
    ? project.images.filter(Boolean)
    : [];

  let currentImageIndex = 0;

  let touchStartX = 0;


  /* =========================================
     IMAGE CAROUSEL DOTS
  ========================================= */

  function renderImageDots() {

    if (!previewDots) return;

    previewDots.innerHTML = projectImages.map((image, index) => `
      <button
        type="button"
        class="preview-dot ${index === currentImageIndex ? "is-active" : ""}"
        data-index="${index}"
        aria-label="Show image ${index + 1}"
        aria-current="${index === currentImageIndex ? "true" : "false"}">
      </button>
    `).join("");

    previewDots.querySelectorAll(".preview-dot").forEach(dot => {

      dot.addEventListener("click", () => {
        showProjectImage(Number(dot.dataset.index));
      });

    });

  }


  /* =========================================
     SHOW PROJECT IMAGE
  ========================================= */

  function showProjectImage(index) {

    if (!mainImage || !previewPlaceholder) return;

    if (!projectImages.length) {

      mainImage.style.display = "none";
      previewPlaceholder.style.display = "block";

      if (previewPrev) previewPrev.classList.add("is-hidden");
      if (previewNext) previewNext.classList.add("is-hidden");
      if (previewDots) previewDots.classList.add("is-hidden");

      if (previewFilename) {
        previewFilename.textContent = "project-preview";
      }

      return;
    }


    currentImageIndex =
      (index + projectImages.length) % projectImages.length;

    const imagePath = projectImages[currentImageIndex];


    // Reset image state
    mainImage.style.display = "none";
    previewPlaceholder.style.display = "block";

    const placeholderTitle =
      previewPlaceholder.querySelector("span");

    if (placeholderTitle) {
      placeholderTitle.textContent = "PROJECT PREVIEW";
    }


    // Image loaded successfully
    mainImage.onload = () => {

      mainImage.style.display = "block";
      previewPlaceholder.style.display = "none";

    };


    // Image failed to load
    mainImage.onerror = () => {

      mainImage.style.display = "none";
      previewPlaceholder.style.display = "block";

      if (placeholderTitle) {
        placeholderTitle.textContent = "IMAGE NOT FOUND";
      }

    };


    mainImage.src = imagePath;

    mainImage.alt =
      `${project.title} preview ${currentImageIndex + 1}`;


    // Update filename
    if (previewFilename) {
      previewFilename.textContent =
        imagePath.split("/").pop();
    }


    // Show navigation only for multiple images
    const hasMultipleImages = projectImages.length > 1;

    if (previewPrev) {
      previewPrev.classList.toggle("is-hidden", !hasMultipleImages);
    }

    if (previewNext) {
      previewNext.classList.toggle("is-hidden", !hasMultipleImages);
    }

    if (previewDots) {

      previewDots.classList.toggle("is-hidden", !hasMultipleImages);

      renderImageDots();

    }

    // Update lightbox if currently open
    if (
      lightbox &&
      lightbox.classList.contains("is-open")
    ) {
      updateLightbox();
    }

  }


  /* =========================================
     CAROUSEL NAVIGATION
  ========================================= */

  if (previewNext) {

    previewNext.addEventListener("click", () => {
      showProjectImage(currentImageIndex + 1);
    });

  }

  if (previewPrev) {

    previewPrev.addEventListener("click", () => {
      showProjectImage(currentImageIndex - 1);
    });

  }


  /* =========================================
     CAROUSEL SWIPE SUPPORT
  ========================================= */

  if (previewImageWrap) {

    previewImageWrap.addEventListener("touchstart", event => {

      touchStartX = event.changedTouches[0].screenX;

    }, { passive: true });


    previewImageWrap.addEventListener("touchend", event => {

      const swipeDistance =
        event.changedTouches[0].screenX - touchStartX;

      if (
        Math.abs(swipeDistance) < 50 ||
        projectImages.length <= 1
      ) {
        return;
      }

      showProjectImage(
        currentImageIndex + (swipeDistance < 0 ? 1 : -1)
      );

    }, { passive: true });


    // Keyboard accessibility
    previewImageWrap.setAttribute("tabindex", "0");

    previewImageWrap.addEventListener("keydown", event => {

      if (projectImages.length <= 1) return;

      if (event.key === "ArrowRight") {
        showProjectImage(currentImageIndex + 1);
      }

      if (event.key === "ArrowLeft") {
        showProjectImage(currentImageIndex - 1);
      }

    });

  }


  /* =========================================
     IMAGE LIGHTBOX
  ========================================= */

  const lightbox =
    document.getElementById("imageLightbox");

  const lightboxClose =
    document.getElementById("lightboxClose");

  const lightboxCounter =
    document.getElementById("lightboxCounter");

  const lightboxPrev =
    document.getElementById("lightboxPrev");

  const lightboxImage =
    document.getElementById("lightboxImage");

  const lightboxNext =
    document.getElementById("lightboxNext");

  const lightboxCaption =
    document.getElementById("lightboxCaption");


  /* =========================================
     UPDATE LIGHTBOX CONTENT
  ========================================= */

  function updateLightbox() {

    if (!lightboxImage || !projectImages.length) return;

    const imagePath = projectImages[currentImageIndex];
    console.log("Index:", currentImageIndex);
    console.log("Image:", imagePath);

    lightboxImage.src = imagePath;

    lightboxImage.alt =
      `${project.title} preview ${currentImageIndex + 1}`;

    if (lightboxCaption) {
      lightboxCaption.textContent =
        `${project.title} · ${imagePath.split("/").pop()}`;
    }

    if (lightboxCounter) {

  const currentNumber = projectImages.indexOf(
    lightboxImage.src.split("/").pop()
  );

  lightboxCounter.textContent =
    `${String(currentImageIndex + 1).padStart(2, "0")} / ${String(projectImages.length).padStart(2, "0")}`;

}

    const hasMultipleImages = projectImages.length > 1;

    if (lightboxPrev) {
      lightboxPrev.classList.toggle("is-hidden", !hasMultipleImages);
    }

    if (lightboxNext) {
      lightboxNext.classList.toggle("is-hidden", !hasMultipleImages);
    }

    if (lightboxCounter) {
      lightboxCounter.classList.toggle("is-hidden", !hasMultipleImages);
    }

  }


  /* =========================================
     OPEN LIGHTBOX
  ========================================= */

  function openLightbox() {

    if (!lightbox || !projectImages.length) return;

    updateLightbox();

    lightbox.classList.add("is-open");

    lightbox.setAttribute("aria-hidden", "false");

    document.body.classList.add("lightbox-open");

  }


  /* =========================================
     CLOSE LIGHTBOX
  ========================================= */

  function closeLightbox() {

    if (!lightbox) return;

    lightbox.classList.remove("is-open");

    lightbox.setAttribute("aria-hidden", "true");

    document.body.classList.remove("lightbox-open");

  }

/* =========================================
   LIGHTBOX EVENTS
========================================= */

// Open when clicking the main project image
if (mainImage) {
  mainImage.addEventListener("click", openLightbox);
}


// Close button
if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}


// Previous image
if (lightboxPrev) {
  lightboxPrev.addEventListener("click", () => {

    if (currentImageIndex > 0) {
      currentImageIndex--;
    } else {
      currentImageIndex = projectImages.length - 1;
    }

    updateLightbox();

    showProjectImage(currentImageIndex);

  });
}


// Next image
if (lightboxNext) {
  lightboxNext.addEventListener("click", () => {

    currentImageIndex =
      (currentImageIndex + 1) % projectImages.length;

    updateLightbox();

    showProjectImage(currentImageIndex);

  });
}


// Close when clicking the background
if (lightbox) {
  lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {
      closeLightbox();
    }

  });
}


/* =========================================
   LIGHTBOX KEYBOARD SUPPORT
========================================= */

document.addEventListener("keydown", event => {

  if (!lightbox || !lightbox.classList.contains("is-open")) {
    return;
  }

  if (event.key === "Escape") {
    closeLightbox();
  }

  if (event.key === "ArrowRight" && projectImages.length > 1) {

    currentImageIndex =
      (currentImageIndex + 1) % projectImages.length;

    updateLightbox();
    showProjectImage(currentImageIndex);

  }

  if (event.key === "ArrowLeft" && projectImages.length > 1) {

    currentImageIndex =
      (currentImageIndex - 1 + projectImages.length) % projectImages.length;

    updateLightbox();
    showProjectImage(currentImageIndex);

  }

});


  /* =========================================
     INITIALIZE PROJECT IMAGE
  ========================================= */

  showProjectImage(0);

}


/* =========================================
   FOOTER YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}


/* =========================================
   LANGUAGE INITIALIZATION
========================================= */

function updateDetailLanguage() {

  const language = document.documentElement.lang;

  document.documentElement.setAttribute(
    "lang",
    language === "en" ? "en" : "id"
  );

}

updateDetailLanguage();
