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

    leadId: "Dashboard interaktif untuk menganalisis performa penjualan retail secara menyeluruh melalui berbagai indikator bisnis. Proyek ini mengeksplorasi kontribusi produk, pelanggan, toko, dan periode penjualan untuk memberikan gambaran mengenai kondisi serta perkembangan bisnis.",
    leadEn: "An interactive dashboard designed to analyze retail sales performance through various business indicators. This project explores product, customer, store, and sales period contributions to provide insights into overall business conditions and performance trends.",

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

    overviewId: "Proyek ini berfokus pada pengolahan dan analisis data transaksi retail untuk memahami performa penjualan dari berbagai dimensi bisnis. Dataset yang terdiri dari lebih dari 56.000 baris data dipersiapkan melalui proses data cleaning dan transformation menggunakan Power Query. Selanjutnya, data dimanfaatkan untuk menganalisis omzet, laba kotor, margin keuntungan, serta kontribusi penjualan berdasarkan kategori produk, toko, pelanggan, karyawan, dan waktu. Hasil analisis disajikan dalam dashboard Power BI yang memungkinkan pengguna mengeksplorasi informasi secara lebih terstruktur dan interaktif.",
    overviewEn: "This project focuses on processing and analyzing retail transaction data to understand sales performance across multiple business dimensions. The dataset, containing more than 56,000 rows, was prepared through data cleaning and transformation using Power Query. The processed data was then used to analyze revenue, gross profit, profit margin, and sales contributions across product categories, stores, customers, employees, and time periods. The findings are presented in a Power BI dashboard that allows users to explore information in a structured and interactive way.",

    objectiveId: "Mengembangkan dashboard analisis penjualan yang mampu menyajikan informasi bisnis secara menyeluruh dan mudah dipahami. Analisis dilakukan untuk mengidentifikasi kategori produk dengan kontribusi penjualan terbesar, memahami karakteristik segmen pelanggan, membandingkan performa antarwilayah dan toko, serta mengevaluasi perubahan kinerja penjualan dari waktu ke waktu. Melalui pendekatan ini, pengguna dapat memperoleh gambaran yang lebih jelas mengenai faktor-faktor yang memengaruhi performa bisnis.",
    objectiveEn: "To develop a sales analytics dashboard that presents comprehensive and easy-to-understand business information. The analysis aims to identify product categories with the highest sales contributions, understand customer segment characteristics, compare performance across regions and stores, and evaluate changes in sales performance over time. This approach provides a clearer understanding of the factors influencing business performance.",

    outcomeId: "Menghasilkan dashboard Power BI interaktif yang terdiri dari tiga halaman dengan lebih dari 25 visualisasi. Dashboard menyajikan berbagai indikator, termasuk omzet, laba kotor, dan margin keuntungan, serta analisis berdasarkan produk, pelanggan, toko, karyawan, dan waktu. Hasil eksplorasi menunjukkan bahwa kategori Televisi memberikan kontribusi omzet sekitar Rp92 miliar, sedangkan segmen pelanggan Regular menyumbang sekitar Rp149 miliar. Dashboard ini membantu menyajikan informasi penjualan secara lebih informatif untuk mendukung evaluasi performa bisnis.",
    outcomeEn: "Produced an interactive Power BI dashboard consisting of three pages with more than 25 visualizations. It presents various indicators, including revenue, gross profit, and profit margin, alongside analyses of products, customers, stores, employees, and time. The findings show that the Television category contributed approximately IDR 92 billion in revenue, while the Regular customer segment accounted for around IDR 149 billion. The dashboard provides informative sales insights to support business performance evaluation.",

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

    images: ["images/projects/sales-overview.jpeg"]
  },


  /* =====================================
     02. COFFEE SALES
  ===================================== */

  "coffee-sales": {
    title: "Coffee Sales Analysis",
    category: "PROJECT 02 · POWER BI",

    leadId: "Dashboard analisis penjualan kopi yang mengeksplorasi tren transaksi dan profitabilitas berdasarkan produk, cabang, kategori, serta periode waktu. Proyek ini membantu memahami perubahan performa penjualan dan mengidentifikasi pola bisnis melalui visualisasi data interaktif.",
    leadEn: "A coffee sales analytics dashboard that explores transaction trends and profitability across products, branches, categories, and time periods. This project helps identify sales performance changes and business patterns through interactive data visualizations.",

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

    overviewId: "Proyek ini berfokus pada pengolahan dan analisis lebih dari 303.000 baris data transaksi penjualan kopi untuk memahami pola penjualan dan profitabilitas bisnis. Data dipersiapkan melalui proses cleaning dan transformation menggunakan Power Query, kemudian dianalisis berdasarkan produk, cabang, kategori, serta periode waktu. Analisis juga mencakup perbandingan performa penjualan dan indikator keuntungan untuk melihat perkembangan bisnis dari waktu ke waktu. Seluruh hasil pengolahan disajikan dalam dashboard Power BI yang terbagi menjadi tiga halaman.",
    overviewEn: "This project focuses on processing and analyzing more than 303,000 rows of coffee sales transactions to understand sales patterns and business profitability. The data was prepared through cleaning and transformation using Power Query, then analyzed by product, branch, category, and time period. The analysis also covers sales performance comparisons and profitability indicators to evaluate business development over time. All findings are presented in a Power BI dashboard consisting of three pages.",

    objectiveId: "Menganalisis pola penjualan dan mengevaluasi performa bisnis berdasarkan produk serta cabang. Proyek ini bertujuan untuk mengetahui perubahan penjualan dari waktu ke waktu, membandingkan kontribusi setiap kategori, serta mengidentifikasi periode yang menunjukkan perubahan signifikan pada profitabilitas. Hasil analisis diharapkan dapat memberikan gambaran mengenai kondisi penjualan dan membantu mengidentifikasi aspek bisnis yang memerlukan evaluasi lebih lanjut.",
    objectiveEn: "To analyze sales patterns and evaluate business performance across products and branches. This project aims to identify changes in sales over time, compare category contributions, and highlight periods showing significant changes in profitability. The analysis provides an overview of sales conditions and helps identify business aspects that may require further evaluation.",

    outcomeId: "Menghasilkan dashboard Power BI interaktif dengan tiga halaman dan 17 visualisasi yang mengolah lebih dari 303.000 baris data transaksi. Dashboard memungkinkan eksplorasi penjualan berdasarkan produk, cabang, kategori, dan periode waktu. Hasil analisis menunjukkan adanya peningkatan penjualan sepanjang 2025 menuju Oktober, sementara gross profit margin mengalami penurunan tajam pada Juli. Temuan tersebut memberikan gambaran mengenai perbedaan perkembangan penjualan dan profitabilitas yang dapat menjadi bahan evaluasi bisnis.",
    outcomeEn: "Produced an interactive Power BI dashboard with three pages and 17 visualizations, processing more than 303,000 transaction records. The dashboard enables sales exploration by product, branch, category, and time period. The analysis shows an increase in sales throughout 2025 toward October, while gross profit margin experienced a sharp decline in July. These findings highlight differences between sales growth and profitability that can be used for further business evaluation.",

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

    images: ["images/projects/coffee-sales.jpeg"]
  },


  /* =====================================
     03. ELECTRONICS SALES
  ===================================== */

  "electronics-sales": {
    title: "Electronics Sales Analysis",
    category: "PROJECT 03 · GOOGLE DATA STUDIO",

    leadId: "Dashboard analisis transaksi penjualan produk elektronik untuk mengevaluasi perkembangan penjualan, karakteristik pelanggan, dan distribusi transaksi. Visualisasi interaktif digunakan untuk mengeksplorasi informasi berdasarkan periode, wilayah, segmen pelanggan, serta metode pembayaran.",
    leadEn: "An electronics sales analytics dashboard designed to evaluate sales trends, customer characteristics, and transaction distribution. Interactive visualizations explore information by period, region, customer segment, and payment method.",

    categoryInfo: "Data Analytics · Dashboard",
    tools: "Google Data Studio",
    focus: "Sales and Customer Analysis",

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

    overviewId: "Proyek ini mengolah 4.950+ data transaksi penjualan elektronik untuk mengeksplorasi pola penjualan dan karakteristik pelanggan. Analisis mencakup perkembangan penjualan berdasarkan periode, distribusi transaksi antarwilayah, segmentasi pelanggan, frekuensi pembelian, serta metode pembayaran yang digunakan. Data disajikan melalui Google Data Studio dalam satu halaman dashboard dengan berbagai visualisasi dan filter interaktif, sehingga pengguna dapat melihat informasi penjualan berdasarkan dimensi yang dibutuhkan.",
    overviewEn: "This project processes more than 4,950 electronics sales transactions to explore sales patterns and customer characteristics. The analysis covers sales trends over time, regional transaction distribution, customer segmentation, purchase frequency, and payment methods. The data is presented through a one-page Google Data Studio dashboard with various visualizations and interactive filters, allowing users to explore sales information across different dimensions.",

    objectiveId: "Menyajikan informasi penjualan elektronik secara terstruktur agar pengguna dapat memahami tren transaksi dan karakteristik pelanggan. Analisis bertujuan untuk mengidentifikasi perubahan penjualan antarperiode, mengetahui wilayah dengan kontribusi penjualan tertinggi, mengeksplorasi pola pembelian pelanggan, serta membandingkan penggunaan metode pembayaran. Dashboard juga dirancang agar informasi dapat dieksplorasi dengan lebih fleksibel melalui filter interaktif.",
    objectiveEn: "To present electronics sales information in a structured way so users can understand transaction trends and customer characteristics. The analysis aims to identify changes in sales across periods, determine regions with the highest sales contributions, explore customer purchasing patterns, and compare payment method usage. The dashboard is also designed to provide flexible data exploration through interactive filters.",

    outcomeId: "Menghasilkan dashboard Google Data Studio satu halaman dengan lebih dari 10 visualisasi berdasarkan 4.950+ transaksi. Dashboard mencakup analisis tren penjualan, distribusi wilayah, segmen pelanggan, frekuensi transaksi, dan metode pembayaran. Hasil analisis menunjukkan bahwa penjualan mengalami tren penurunan dari 2023 hingga 2025, sementara DKI Jakarta menjadi wilayah dengan penjualan tertinggi. Informasi tersebut memberikan dasar untuk mengevaluasi perkembangan penjualan dan memahami distribusi pelanggan.",
    outcomeEn: "Produced a one-page Google Data Studio dashboard with more than 10 visualizations based on over 4,950 transactions. It covers sales trends, regional distribution, customer segments, transaction frequency, and payment methods. The analysis shows a declining sales trend from 2023 to 2025, while DKI Jakarta recorded the highest sales. These insights provide a basis for evaluating sales development and understanding customer distribution.",

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

    leadId: "Penelitian klasifikasi Polycystic Ovary Syndrome (PCOS) menggunakan algoritma Support Vector Machine dengan pendekatan Genetic Algorithm untuk seleksi fitur dan Bayesian Optimization untuk optimasi hyperparameter. Proyek ini mengevaluasi kombinasi metode tersebut dalam meningkatkan performa model klasifikasi.",
    leadEn: "A Polycystic Ovary Syndrome (PCOS) classification study using Support Vector Machine with Genetic Algorithm for feature selection and Bayesian Optimization for hyperparameter optimization. This project evaluates the combination of these methods to improve classification model performance.",

    categoryInfo: "Machine Learning · Classification",
    tools: "Python, SVM, Genetic Algorithm, Bayesian Optimization",
    focus: "Classification Model Development",

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
      ["541", "Data", "Records", "▤"],
      ["44", "Fitur", "Features", "▧"],
      ["SVM", "Algoritma", "Algorithm", "▥"],
      ["GA + BO", "Optimasi", "Optimization", "⌘"]
    ],

    overviewId: "Proyek tugas akhir ini mengembangkan model machine learning untuk mengklasifikasikan kondisi PCOS berdasarkan dataset yang terdiri dari 541 data dan 44 fitur. Penelitian menggunakan Support Vector Machine (SVM) sebagai algoritma utama, Genetic Algorithm (GA) untuk menyeleksi fitur yang relevan, serta Bayesian Optimization (BO) untuk mencari kombinasi hyperparameter yang optimal. Tahapan penelitian mencakup persiapan dataset, seleksi fitur, pelatihan model, optimasi, dan evaluasi performa menggunakan metrik klasifikasi.",
    overviewEn: "This final project develops a machine learning model to classify PCOS using a dataset containing 541 records and 44 features. The research uses Support Vector Machine (SVM) as the main algorithm, Genetic Algorithm (GA) to select relevant features, and Bayesian Optimization (BO) to identify optimal hyperparameter combinations. The research stages include dataset preparation, feature selection, model training, optimization, and performance evaluation using classification metrics.",

    objectiveId: "Mengembangkan dan mengevaluasi model klasifikasi PCOS dengan mengombinasikan seleksi fitur dan optimasi hyperparameter. Penelitian ini bertujuan untuk mengurangi jumlah fitur yang digunakan tanpa mengabaikan informasi penting dalam dataset, sekaligus mencari konfigurasi model yang memberikan performa klasifikasi terbaik. Evaluasi dilakukan untuk mengetahui efektivitas kombinasi Genetic Algorithm dan Bayesian Optimization terhadap model Support Vector Machine.",
    objectiveEn: "To develop and evaluate a PCOS classification model by combining feature selection and hyperparameter optimization. This research aims to reduce the number of features without overlooking important dataset information while identifying model configurations that provide the best classification performance. The evaluation examines the effectiveness of combining Genetic Algorithm and Bayesian Optimization with Support Vector Machine.",

    outcomeId: "Menghasilkan model klasifikasi terbaik menggunakan Linear Kernel SVM setelah penerapan Genetic Algorithm dan Bayesian Optimization. Proses seleksi fitur berhasil mengurangi jumlah fitur dari 41 menjadi 36 fitur yang digunakan dalam pemodelan. Model memperoleh akurasi sebesar 92,66% dan ROC-AUC sebesar 96,35%. Hasil penelitian juga diimplementasikan dalam aplikasi berbasis Streamlit untuk mendemonstrasikan proses prediksi. Proyek ini merupakan penelitian akademik dan tidak ditujukan sebagai alat diagnosis medis.",
    outcomeEn: "Produced the best classification model using Linear Kernel SVM after applying Genetic Algorithm and Bayesian Optimization. Feature selection reduced the number of features from 41 to 36 for model development. The model achieved 92.66% accuracy and a 96.35% ROC-AUC score. The research was also implemented in a Streamlit-based application to demonstrate the prediction process. This is an academic research project and is not intended to serve as a medical diagnostic tool.",

    processId: [
      ["01", "Dataset Preparation", "Memahami dataset, menentukan target klasifikasi, dan menyiapkan data."],
      ["02", "Feature Selection", "Menerapkan Genetic Algorithm untuk memilih fitur."],
      ["03", "Model Optimization", "Menggunakan Bayesian Optimization untuk optimasi hyperparameter."],
      ["04", "Model Development", "Melatih model SVM dan mengintegrasikannya ke aplikasi Streamlit."]
    ],

    processEn: [
      ["01", "Dataset Preparation", "Reviewed the dataset, defined the classification target, and prepared the data."],
      ["02", "Feature Selection", "Applied Genetic Algorithm for feature selection."],
      ["03", "Model Optimization", "Used Bayesian Optimization for hyperparameter optimization."],
      ["04", "Model Development", "Trained the SVM model and integrated it into a Streamlit application."]
    ],

    images: ["images/projects/PCOS.jpeg"]
  },


  /* =====================================
     05. ELDERLY HEALTH
  ===================================== */

  "elderly-health": {
    title: "Elderly Health Monitoring Website",
    category: "PROJECT 05 · WEB DEVELOPMENT",

    leadId: "Pengembangan website pemantauan informasi kesehatan lansia yang terintegrasi dengan database SQL. Proyek ini berfokus pada pengelolaan data secara terstruktur untuk mendukung proses pencatatan, pembaruan, dan penyajian informasi kesehatan melalui platform berbasis web.",
    leadEn: "A website development project for managing elderly health information integrated with an SQL database. It focuses on structured data management to support recording, updating, and presenting health information through a web-based platform.",

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

    overviewId: "Proyek ini mengembangkan website yang terintegrasi dengan database SQL untuk mendukung pengelolaan informasi kesehatan lansia. Pengembangan mencakup penyusunan struktur basis data, pengelolaan informasi menggunakan SQL, serta integrasi database dengan antarmuka website. Sistem dirancang agar informasi dapat disimpan dan dikelola secara terstruktur sehingga proses pencatatan maupun pemantauan data menjadi lebih mudah dilakukan.",
    overviewEn: "This project develops a website integrated with an SQL database to support elderly health information management. The development includes database structure design, information management using SQL, and database integration with the website interface. The system is designed to store and organize information systematically, making data recording and monitoring easier.",

    objectiveId: "Mengembangkan platform berbasis web yang dapat mendukung pengelolaan informasi kesehatan lansia secara lebih terorganisasi. Proyek ini bertujuan untuk menerapkan penggunaan database SQL dalam penyimpanan dan pengelolaan data, serta mengintegrasikan proses tersebut dengan antarmuka website agar informasi dapat diakses dan disajikan secara lebih sistematis.",
    objectiveEn: "To develop a web-based platform that supports more organized elderly health information management. This project aims to apply an SQL database for data storage and management and integrate these processes with the website interface so information can be accessed and presented systematically.",

    outcomeId: "Menghasilkan website yang terhubung dengan database SQL untuk mendukung penyimpanan, pengelolaan, dan penyajian informasi kesehatan lansia. Implementasi mencakup integrasi antara basis data dan antarmuka website serta penerapan operasi pengelolaan data. Proyek ini menunjukkan penerapan konsep database dan pengembangan web dalam membangun sistem informasi yang terstruktur.",
    outcomeEn: "Produced a website connected to an SQL database to support the storage, management, and presentation of elderly health information. The implementation includes database integration with the website interface and data management operations. This project demonstrates the application of database concepts and web development in building a structured information system.",

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

    leadId: "Pengembangan aplikasi berbasis Java untuk membantu pencatatan transaksi serta pengelolaan informasi keuangan dan properti. Proyek ini menerapkan konsep database dan operasi CRUD agar proses penyimpanan, pencarian, pembaruan, serta penghapusan data dapat dilakukan melalui satu sistem.",
    leadEn: "A Java-based application designed to support transaction recording and financial and property information management. This project applies database concepts and CRUD operations to manage data storage, retrieval, updating, and deletion within a single system.",

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

    overviewId: "Proyek ini berfokus pada pengembangan aplikasi untuk mengelola informasi keuangan dan properti secara terstruktur. Aplikasi dikembangkan menggunakan bahasa pemrograman Java dengan dukungan database untuk menyimpan informasi yang dibutuhkan. Fungsionalitas aplikasi mencakup proses pencatatan transaksi serta pengelolaan data melalui operasi CRUD (Create, Read, Update, Delete), sehingga pengguna dapat melakukan pengelolaan informasi dalam satu platform.",
    overviewEn: "This project focuses on developing an application to manage financial and property information systematically. The application is built using Java with database support to store the required information. Its functionality includes transaction recording and data management through CRUD (Create, Read, Update, Delete) operations, allowing users to manage information within a single platform.",

    objectiveId: "Membangun aplikasi yang dapat mempermudah proses pencatatan transaksi dan pengelolaan informasi keuangan serta properti. Pengembangan bertujuan untuk menerapkan konsep pemrograman berorientasi objek, integrasi database, dan operasi CRUD dalam sebuah aplikasi yang memiliki alur pengelolaan data secara terstruktur.",
    objectiveEn: "To build an application that simplifies transaction recording and financial and property information management. The development aims to apply object-oriented programming concepts, database integration, and CRUD operations within an application that provides a structured data management workflow.",

    outcomeId: "Menghasilkan aplikasi berbasis Java yang mendukung pencatatan transaksi serta pengelolaan informasi keuangan dan properti. Aplikasi menerapkan operasi CRUD untuk menambahkan, menampilkan, memperbarui, dan menghapus data. Melalui proyek ini, konsep pengembangan aplikasi, pengelolaan database, dan pemrosesan data diterapkan dalam sebuah sistem yang terintegrasi.",
    outcomeEn: "Produced a Java-based application that supports transaction recording and financial and property information management. The application implements CRUD operations to create, display, update, and delete records. Through this project, application development concepts, database management, and data processing are applied within an integrated system.",

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

    leadId: "Pengembangan website edukasi nutrisi yang menggabungkan kalkulator kebutuhan gizi, artikel informatif, dan informasi konsultasi ahli gizi. Proyek capstone tim ini mencakup perancangan UI/UX serta implementasi front-end untuk menghadirkan pengalaman akses informasi nutrisi yang lebih terstruktur.",
    leadEn: "A nutrition education website that combines a nutritional needs calculator, informative articles, and dietitian consultation information. This team capstone project covers UI/UX design and front-end implementation to provide a more structured nutrition information experience.",

    categoryInfo: "Web Development · Team Project",
    tools: "HTML, CSS, JavaScript, Figma",
    focus: "Nutrition Education Website",

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

    overviewId: "NutriGuide merupakan proyek capstone tim yang berfokus pada pengembangan platform edukasi nutrisi berbasis web. Website dirancang untuk membantu pengguna memperoleh informasi seputar kebutuhan gizi melalui berbagai fitur, seperti kalkulator nutrisi, artikel edukasi, dan informasi konsultasi ahli gizi. Dalam proyek ini, pekerjaan mencakup perancangan UI/UX untuk menyusun alur dan tampilan website serta implementasi front-end menggunakan HTML, CSS, dan JavaScript. Pengembangan dilakukan secara kolaboratif sebagai bagian dari proyek akhir program Studi Independen.",
    overviewEn: "NutriGuide is a team capstone project focused on developing a web-based nutrition education platform. The website is designed to help users access nutritional information through features such as a nutrition calculator, educational articles, and dietitian consultation information. The project involved UI/UX design to organize the website flow and interface, as well as front-end implementation using HTML, CSS, and JavaScript. Development was carried out collaboratively as part of the Independent Study final project.",

    objectiveId: "Menyediakan platform edukasi nutrisi yang dapat membantu pengguna memahami kebutuhan gizi dan menemukan informasi kesehatan yang relevan. Pengembangan bertujuan untuk menggabungkan fitur kalkulator kebutuhan nutrisi, artikel edukasi, dan informasi konsultasi ahli gizi dalam satu website. Selain itu, proyek ini bertujuan menghadirkan antarmuka yang informatif dan mudah digunakan melalui perancangan pengalaman pengguna serta implementasi front-end.",
    objectiveEn: "To provide a nutrition education platform that helps users understand their nutritional needs and access relevant health information. The development aims to combine a nutritional needs calculator, educational articles, and dietitian consultation information within one website. It also aims to deliver an informative and user-friendly interface through user experience design and front-end implementation.",

    outcomeId: "Menghasilkan website edukasi nutrisi dengan sembilan fitur utama yang mencakup kalkulator kebutuhan gizi, artikel edukasi, dan kartu informasi konsultasi ahli gizi yang terhubung ke WhatsApp. Kontribusi dalam tim meliputi perancangan UI/UX dan implementasi front-end untuk membangun tampilan serta interaksi website. Proyek ini menjadi penerapan kolaborasi antara desain antarmuka dan pengembangan web dalam membangun platform edukasi digital.",
    outcomeEn: "Produced a nutrition education website with nine main features, including a nutritional needs calculator, educational articles, and dietitian consultation information cards linked to WhatsApp. The team contribution covered UI/UX design and front-end implementation to develop the website interface and interactions. This project demonstrates collaboration between interface design and web development in building a digital education platform.",

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

    leadId: "Perancangan UI/UX aplikasi GoFast menggunakan Figma dengan fokus pada penyusunan tampilan, struktur navigasi, dan alur interaksi pengguna. Proyek ini menghasilkan rancangan antarmuka yang menggambarkan pengalaman penggunaan aplikasi melalui serangkaian layar dan prototype.",
    leadEn: "A UI/UX design project for the GoFast application using Figma, focusing on interface layouts, navigation structure, and user interaction flows. The project produces an interface design that illustrates the application experience through multiple screens and a prototype.",

    categoryInfo: "UI/UX Design",
    tools: "Figma",
    focus: "Interface Design and Prototyping",

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

    overviewId: "GoFast merupakan proyek perancangan antarmuka aplikasi yang berfokus pada pengalaman dan kemudahan penggunaan. Proses desain dilakukan menggunakan Figma dengan menyusun struktur navigasi, alur penggunaan, serta tampilan antarmuka untuk menggambarkan bagaimana pengguna berinteraksi dengan aplikasi. Perancangan mencakup beberapa tahapan, mulai dari penyusunan user flow dan wireframe hingga pengembangan desain visual serta prototype. Hasil rancangan terdiri dari lebih dari 16 layar yang merepresentasikan bagian-bagian utama aplikasi.",
    overviewEn: "GoFast is an application interface design project focused on usability and user experience. The design process was carried out using Figma by organizing navigation structures, user flows, and interface layouts to illustrate how users interact with the application. The design includes several stages, from user flow development and wireframing to visual design and prototyping. The final design consists of more than 16 screens representing the application's main sections.",

    objectiveId: "Merancang antarmuka aplikasi yang memiliki struktur navigasi jelas dan alur interaksi yang mudah dipahami. Proyek ini bertujuan untuk menyusun pengalaman penggunaan secara sistematis, memastikan keterkaitan antarlayar, serta menghasilkan tampilan visual yang konsisten. Rancangan juga dibuat untuk menggambarkan alur penggunaan aplikasi melalui prototype interaktif.",
    objectiveEn: "To design an application interface with a clear navigation structure and easy-to-understand interaction flows. The project aims to organize the user experience systematically, maintain consistency between screens, and produce a cohesive visual interface. The design also aims to demonstrate the application workflow through an interactive prototype.",

    outcomeId: "Menghasilkan rancangan UI/UX dengan lebih dari 16 layar menggunakan Figma yang mencakup berbagai tampilan dan alur penggunaan aplikasi. Hasil pekerjaan meliputi penyusunan user flow, wireframe, komponen antarmuka, desain visual, dan prototype. Dokumentasi desain ini menggambarkan struktur navigasi serta hubungan interaksi antarlayar sebagai representasi konsep aplikasi.",
    outcomeEn: "Produced a UI/UX design with more than 16 screens using Figma, covering various application interfaces and user flows. The work includes user flow development, wireframes, interface components, visual design, and prototyping. The design documentation illustrates the navigation structure and interactions between screens as a representation of the application concept.",

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

    leadId: "Perancangan UI/UX aplikasi Cookify sebagai platform eksplorasi resep masakan dan inspirasi memasak. Proyek ini berfokus pada penyajian informasi resep melalui antarmuka yang terstruktur, navigasi yang mudah dipahami, serta alur interaksi yang mendukung pengalaman pengguna.",
    leadEn: "A UI/UX design project for Cookify, a platform for discovering recipes and cooking inspiration. It focuses on presenting recipe information through structured interfaces, intuitive navigation, and interaction flows that support the user experience.",

    categoryInfo: "UI/UX Design",
    tools: "Figma",
    focus: "Recipe App Interface Design",

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

    overviewId: "Cookify merupakan proyek perancangan UI/UX aplikasi resep masakan menggunakan Figma. Aplikasi dirancang untuk memberikan gambaran pengalaman pengguna dalam menemukan dan mengeksplorasi berbagai resep. Proses perancangan mencakup penentuan konsep aplikasi, penyusunan user flow, pembuatan wireframe, pengembangan desain antarmuka, serta penyusunan prototype. Setiap bagian dirancang untuk menyajikan informasi resep secara terstruktur sehingga pengguna dapat memahami alur penggunaan aplikasi dengan lebih mudah.",
    overviewEn: "Cookify is a UI/UX design project for a recipe application created using Figma. The application is designed to illustrate the user experience of discovering and exploring various recipes. The design process includes defining the application concept, developing user flows, creating wireframes, designing interfaces, and building a prototype. Each section is structured to present recipe information clearly and help users understand the application workflow.",

    objectiveId: "Merancang aplikasi yang memberikan pengalaman eksplorasi resep secara intuitif dan terorganisasi. Proyek ini bertujuan untuk menyusun alur navigasi yang memudahkan pengguna menemukan resep, memahami informasi yang disajikan, serta berpindah antarhalaman dengan nyaman. Selain itu, perancangan difokuskan pada konsistensi tampilan dan keterhubungan antarkomponen agar keseluruhan pengalaman aplikasi terasa lebih terarah.",
    objectiveEn: "To design an application that provides an intuitive and organized recipe discovery experience. The project aims to create navigation flows that help users find recipes, understand the presented information, and move between pages comfortably. The design also focuses on visual consistency and connected interface components to create a more cohesive application experience.",

    outcomeId: "Menghasilkan rancangan UI/UX aplikasi dengan lebih dari 35 layar menggunakan Figma. Rancangan mencakup tampilan halaman, komponen antarmuka, alur eksplorasi resep, serta prototype untuk menggambarkan interaksi antarlayar. Hasil desain memberikan representasi visual mengenai struktur dan pengalaman penggunaan aplikasi Cookify sebagai platform pencarian inspirasi resep masakan.",
    outcomeEn: "Produced a UI/UX application design with more than 35 screens using Figma. The design includes page layouts, interface components, recipe exploration flows, and a prototype illustrating interactions between screens. The final design provides a visual representation of the structure and user experience of Cookify as a recipe discovery platform.",

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

  document.getElementById("detailBreadcrumb").textContent =
    project.title;

  document.getElementById("detailCategory").textContent =
    project.category;

  document.getElementById("detailTitle").textContent =
    project.title;

  document.getElementById("detailLeadId").textContent =
    project.leadId;

  document.getElementById("detailLeadEn").textContent =
    project.leadEn;


  /* =========================================
     HERO PROJECT HIGHLIGHTS
  ========================================= */

  const heroHighlights =
    document.getElementById("detailHeroHighlights");

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


  /* =========================================
     ABOUT THE PROJECT
  ========================================= */

  document.getElementById("detailOverviewId").textContent =
    project.overviewId;

  document.getElementById("detailOverviewEn").textContent =
    project.overviewEn;

  document.getElementById("detailObjectiveId").textContent =
    project.objectiveId;

  document.getElementById("detailObjectiveEn").textContent =
    project.objectiveEn;

  document.getElementById("detailResultId").textContent =
    project.outcomeId;

  document.getElementById("detailResultEn").textContent =
    project.outcomeEn;


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

  processContainer.innerHTML = `
    <div class="lang-id detail-process-grid">
      ${renderProcess(project.processId)}
    </div>

    <div class="lang-en detail-process-grid">
      ${renderProcess(project.processEn)}
    </div>
  `;


  /* =========================================
     MAIN PROJECT IMAGE
  ========================================= */

  const mainImage =
    document.getElementById("mainProjectImage");

  const previewPlaceholder =
    document.getElementById("previewPlaceholder");

  const mainImagePath = project.images[0];

  mainImage.style.display = "none";
  previewPlaceholder.style.display = "block";

  mainImage.onload = () => {
    mainImage.style.display = "block";
    previewPlaceholder.style.display = "none";
  };

  mainImage.onerror = () => {
    mainImage.style.display = "none";
    previewPlaceholder.style.display = "block";
  };

  mainImage.src = mainImagePath;
  mainImage.alt = `${project.title} preview`;

  document.getElementById("previewFilename").textContent =
    mainImagePath.split("/").pop();

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
