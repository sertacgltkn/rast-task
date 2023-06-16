

### Rast Mobile DataGrid Task
Projenin amacı kullanıcıların sosyal medya hesaplarının kayıt edilerek, sosyal medya linkine, sosyal medya adına ve açıklamalarına göre listelenmesi.

##### Proje Görselleri

![Proje ekran görüntüsü](/screenshots/Rast-1.jpg)
![Proje ekran görüntüsü](/screenshots/Rast-2.jpg)


##### Projeyi bilgisayarınızda çalıştırmak için önkoşullar
Bu projeyi çalıştırmak için, bilgisayarınızda şu yazılımların yüklü olduğundan emin olun:

Node.js NPM veya Yarn

##### Kurulum
* Bu projeyi klonlayın:

        git clone https://github.com/sertacgltkn/rast-task.git
* Proje dizinine gidin:

cd rast-task

* Gerekli paketleri yükleyin:

        npm install veya yarn install
* Proje dizininde, aşağıdaki komutu çalıştırarak projeyi başlatın:

        npm start veya yarn start

* Tarayıcınızda 

            http://localhost:3000 

adresine giderek uygulamayı görüntüleyin.


##### Yapım Aşamaları

•	Figma tasarımında ilk olarak kaç adet yapımızın bulunduğuna bakılıp ona göre bir grid yapısı oluşturulması gerektiğine bakıldı.
•	4 adet yapı olduğuna karar verip 

    * Navbar, 
    * Search Input ve Yeni Hesap Ekle,
    * Tablo, 
    * Rows ve sayfalama sayısı  

bunları ayrı grid’lere ayırdım.
•	Navbar içerisindeki item’ları space-between özelliği ileayırdım.
•	Yine aynı şekilde Search Input ve Yeni Hesap Ekle buttonlarını ayırmak ve eşit mesafe bırakmak için display:flex ve jc:space-between style özelliklerini kullandım.
•	DataGrid yapısında kütüphane install edilip import’u yapıldıktan sonra dummy bir data’yı başlık olarak kullandım. Daha sonra modal içerisinden eklenecek olan data’lar için DataGrid’in props’larından faydalandım.
•	Sayfada kaç satırın gösterileceği özellik eklendi bunun karşıtlığında kaçıncı sayfada olunduğunu gösteren özellik eklendi.
•	Daha sonra Modal eklenerek input içerisine girilen değerin DataGrid’e girdi olarak eklenmesi sağlandı.
•	Kullanıcının girdileri local’de kayıtlı kalması için localStorage’de tutulması sağlandı.
•	Component’lerin responsive olması için çalışıldı.
•	Yorum satırları eklendi.

![Proje ekran görüntüsü](/screenshots/Rast-Task.jpg)



##### Kullanılan NPM'ler
    * React
    * Material UI
    * DevExtreme


 
