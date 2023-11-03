import { useEffect } from "react";
import { database, getDatas } from "../../../../config/config";
import { ref, set } from "firebase/database";
import { useState } from "react";

const ProfessionalPackaging = () => {
  const [data, setData] = useState(null);
  async function fetchDatas() {
    try {
      const datas = await getDatas("ProfessionalPackaging");
      setData(datas);
    } catch (error) {
      console.error("Mesajları alma hatası:", error);
    }
  }
  console.log(data);

  const setDatas = async () => {
    const messageRef = ref(database, "ProfessionalPackaging");
    set(messageRef, [
      {
        name: "Patpat",
        description:
          "Taşıma esnasında eşyaların zarar görmemesi için 1. kalite patpat ile eşyanızı paketliyoruz.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/paketleme/paket-1.png",
      },
      {
        name: "Streç",
        description:
          "Eşyaların ambalajı daha iyi tutması ve kirlenmemesi için streç ile eşyaları sarıyoruz.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/paketleme/paket-2.png",
      },
      {
        name: "Bant",
        description:
          "Patpat ile kaplanan eşyaların taşınma esnasında açılmaması için bant ile destekliyoruz.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/paketleme/paket-3.png",
      },
      {
        name: "Yatak Kılıfı",
        description:
          "Evinizdeki yatağın taşıma esnasında kirlenmemesi için özel üretim kılıf ile taşıyoruz.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/paketleme/paket-4.png",
      },
    ]);
    set(ref(database, "ProfessionalService"), [
      {
        name: "Evden Eve Nakliyat",
        slug: "evden-eve-nakliyat",
        description:
          "Yılların vermiş olduğu tecrübemiz ile evinizi profesyonelce sigortalı olarak taşıyoruz.",
        imageUrl:
          "https://www.a1nakliyat.com/wp-content/uploads/2022/02/evden-eve-nakliyat-1024x682.jpg",
        longDescrition: ` <p>
              Atasayar Nakliyat ekibi olarak, müşterilerimizle birlikte
              taşımacılık işlemi için kararlaştırdığımız randevu gününde
              eksperlerimiz evinize gelerek yada Whatsapp ile yolladığınız
              resimleri inceleyerek gerekli olan incelemelerini yapar. Ekspertiz
              hizmetinin amacı taşıma fiyatını netleştirmek, sahip olduğunuz
              eşyaların nasıl bir araç ile taşınabileceğini tespit etmek, kaç
              kişilik kadronun taşınma işlemi için yeterli olacağını saptamak ve
              evden eve taşınma işlemi için ne kadarlık bir sigortaya ihtiyaç
              duyulduğunu tespit etmektir.
            </p>
            <p>
              Eğer karşılıklı anlaşma sağlanması durumunda taşınma işlemi için
              bir sözleşme hazırlanarak imzalanır. Evden eve nakliyat hizmeti
              için bundan sonraki aşamalarda ise taşınmaya karar verilen gün
              eğer eşyalarınızın sayısı fazla ise bir gün önceden değilse
              taşınmanın olacağı gün ambalajlama ve paketleme elemanlarımız
              gelerek eşyalarınızın paketleme ve ambalajlama işlemlerini
              yaparlar.
            </p>
            <p>
              Ambalaj malzemesi olarak “Beyaz eşya, mobilya, koltuk takımları,
              vb.” Avrupa’dan ithal pet graft kağıtları, kırılacak eşyalarınız
              ise beyaz kağıtlara sarılıp özel karton kutulara yerleştirilir.
              Evden eve nakliyat hizmetinde aile bireylerinden bir kişinin
              olması yeterlidir. Taşınma işlemi esnasında eşyalarınızın zarar
              görmemesi için gerekli prosedürler uygulanarak, paketleme ve
              ambalajlama işleminde büyük önem gözetmektedir.
            </p>
            <p>
              Evden Eve Nakliyat hizmetleri, Saray Nakliyat firmasının
              müşterilerine sunduğu yüksek kalitede evden eve nakliyat ve
              asansörlü taşımacılık ile ekonomik fiyatlandırma sayesinde,
              Ülkemiz’de bulunan kisi ve kurumlara taşınma konusunda ciddi
              kolaylık ve kalite sağlamaktadır.
            </p>
            <p>
              Aynı zamanda müşterimiz taşınma işleminin bittiğini tam olarak
              belirttiği takdirde elemanlarımız işlemlerini bitirmiş oluyorlar.
              Yapılması gereken ve yapabilecekleri her türlü işlemi
              gerçekleştiren personelimiz uzman olarak eğitim almış kişilerden
              oluşmaktadır. Eşyalarınızın taşınması sırasında doğabilecek
              hasarlarda, eğer firmamız sorumluluğunda olmuş ise, sorumluluk
              firmamıza aittir.
            </p>
            <p>
              Atasayar Nakliyat ekibi olarak karşılaşabileceğimiz tüm
              olumsuzlukları düşünerek eşyalarınız için sigorta işlemi de
              yapmaktayız. Müşterilerimizle görüşme esnasından, taşımacılık
              işlemleri tamamen bitene kadar yapılabilecek ne kadar işlem varsa
              gerçekleştirmekteyiz.
            </p>
            <p>
              Detaylı bilgi almak isterseniz bizimle iletişim kurabilirsiniz.
            </p>`,
      },
      {
        name: "Ofis Taşıma",
        slug: "ofis-tasima",
        description:
          "Ofis ve büro taşımacılığında tüm eşyalarınızı özenle paketleyip sorunsuz hizmet sunuyoruz.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/hizmetler/ofis-tasima-1.png",
        longDescrition: `  <h1 className="text-xl font-bold">OFİS ve KURUMSAL TAŞIMACILIK</h1>
            <p>
              Atasayarlar Nakliyat, ofislerinizi gerek şehir içi taşımacılık gerekse de şehirler arası taşımacılık hizmetleri ile güvenle taşımaktadır. İşten işe ofis ve büro taşımacılığı iş dünyasının tüm bürolarını ofislerini konusundaki uzmanlaşmış ekip ve yenilikçi kişiliğimiz ile siz değerli müşterilerimizin hizmetindeyiz. Ofisinizin büyüklüğü ne olursa olsun taşınma işleminizi en kolay hale getirmek için çalışıyoruz. Bizim amacımız taşınırken işinize ara vermeden ve bağlantılarınızı kesintiye uğratmadan en uygun teknikle sizi yeni ofisinize yerleştirmektir. Müşterilerimizin ihtiyaçlarını esaslı bir şekilde belirleyip onların isteklerini gözardı etmeden taşıma planını oluşturur, yeni işyerlerine geçiş dönemini kolaylaştırırız. Biz biliyoruz ki bütün taşımacılık firmaları aynı değildir, biz sizin bireysel ihtiyaçlarınıza ofisinizi taşırken en iyi yanıtı verebilecek deneyim ve birikime sahibiz.
            </p>
           <h1 className="text-xl font-bold">FUAR VE STAND TAŞIMACILIĞI</h1>
            <p>
             Yurt içinde fuarlarda yer alan kişi yada kurumlara özel bir hizmet. “Tam Zamanında TESLİM” Fuar malzemeleri alınacağı yerden titizlikle alındıktan sonra, fuar yerinde STANT fuar malzemelerini önemli bir titizlikle kurulumu yapılır. Daha sonra yetkili kişinin belirlediği yerlere fuar da sergilenecek eşyalar aynı şekilde önemli bir titizlikle yerleştirilir. Fuar bitiminde gine aynı şekilde önemli bir titizlikle fuar STANT malzemelerini ve sergilenmiş eşyaları aldığımız yere bırakıyoruz. Bütün bu çalışmaları hızlı ve güvenli bir şekilde yapmaktayız..
            </p>`,
      },
      {
        name: "Asansörlü Nakliyat",
        slug: "asansorlu-nakliyat",
        description:
          "Katınız kaçınca kat olursa olsun, son teknoloji modüler asansörümüz ile asansörlü evinizi taşıyoruz.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/hizmetler/asansorlu-nakliyat-1.png",
        longDescrition: `  <h1 className="text-xl font-bold">15. kata kadar çıkabilen modüler asansörümüz ile eşyalarınızı 0 risk ile taşıyoruz</h1>
            <p>
             Kardelen Nakliyat, en geniş araç ve yük asansörü filosu ile aynı gün onlarca noktada asansörlü taşıma hizmeti verebilmektedir. 15. kata kadar ulaşabilen asansör sistemi ile Türkiye’de bir ilke imza attık. Türkiye’de ilkleri müşterilerine yaşatan bir firma olarak çözüm odaklı çalışmalarımızla müşterilerimizin her zaman güvenini kazandık.
            </p>
           <h1 className="text-xl font-bold">Bina içi eşya taşımaya artık son !</h1>
            <p>
         Özellikle yüksek katlardan oturanların ev taşınmaları oldukça sıkıntı bir süreçtir. Bina içinde bulunan asansörle eşyaların taşınması sağlıklı bir taşıma hizmetini en iyi şekilde sunamamaktadır. Bina içi asansöre sığmayan eşyaların ise taşınması %100 risktir. Bina yönetimi ile yaşanan sıkıntılar ve yüksek katta bulunmanız nedeni ile diğer nakliye firmalarının istediği yüksek taşıma fiyatları artık Kardelen Nakliyat ile sona eriyor. 15. kata kadar uzanabilen asansörümüz ile ev taşımacılığında %100 güvenli şekilde taşıma kolaylığı sunuyoruz.
            </p>`,
      },
      {
        name: "Parça Eşya Taşıma",
        slug: "parca-esya-tasima",
        description:
          "Taşınacak bir kaç parça eşyanız mı var? En uygun fiyatlara, zamanında teslimat garantisi ile hizmet alın.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/hizmetler/parca-esya-1.png",
        longDescrition: `  <h1 className="text-xl font-bold">Bir kaç parça eşyanız mı taşınacak ? Ufak boy araçlarımızla uygun fiyatlı hizmet bizde !</h1>
            <p>
             Kargo, parça veya parsiyel ev eşyalarınızı Türkiye’nin her tarafına, Kardelen Nakliyat güvencesiyle gönderebilirsiniz. Şirketimiz istediğiniz gün ve saate mevcut evinizde alıp istediğiniz gün ve tarihte adresinize teslimat gerçekleştirmektedir. Kardelen Evden Eve Nakliyat olarak parça eşya taşımalarında kurumsal olarak da hizmet vermektedir. Detaylar için bizimle iletişime geçebilirsiniz.
            </p>`,
      },
      {
        name: "Eşya Depolama",
        slug: "esya-depolama",
        description:
          "Eşyalarınızı güvende tutacak yer mi arıyorsunuz? Sigortalı 7/24 kameralı depolarımız hizmetinize hazır.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/hizmetler/esya-depolama.png",
        longDescrition: `  <h1 className="text-xl font-bold">7/24 Güvenlikli Kameralı Depo</h1>
            <p>
             Bazı nedenlerden dolayı gitmek istediğiniz yere evinizdeki eşyaları götürmek imkansız olabiliyor. Bu durumu yaşayan insanlar için Kardelen Nakliyat sizlere güvenli eşya depolama hizmeti sunar. Depolarımız mevsim şartlarından etkilenmez. 7/24 kamera ile izlenir ve güvenliklidir. Depolanan eşyalarınızın taşıma işlemini firmamız en uygun fiyat seçeneği ile size sunar. Sözleşmeli bir şekilde garanti altında eşyalarınızı depolamak istiyorsanız iletişim numaralarımızdan bizlere ulaşabilir en uygun fiyatlara eşya depolama hizmeti alabilirsiniz.
            </p>`,
      },
      {
        name: "Şehir İçi Nakliye",
        slug: "sehir-ici-nakliye",
        description:
          "Taşıma türü ne olursa olsun, şehir içi taşımacılık isteğinize profesyonelce nakliye hizmeti veriyoruz.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/hizmetler/sehir-ici-nakliye-1.png",
        longDescrition: `  <h1 className="text-xl font-bold">Şehir İçi Nakliyat</h1>
            <p>
             Kardelen Nakliyat şehrimizin her noktasında şehir içi nakliyat hizmeti sunmaktadır. İster eviniz taşınsın ister ofisiniz, firmamız sizlere şehir içi taşımacılık işlerinde profesyonel hizmet sunar. Şehir içi nakliyat hizmetine ihtiyacınız var ise firmamızdan sigortalı ve garantili şehir içi nakliye hizmeti alabilirsiniz. Firmamızdan hızlıca şehir içi nakliye fiyatı almak için telefon numaralarımızı yada teklif formunu kullanabilirsiniz.
            </p>`,
      },
      {
        name: "Şehirler Arası Nakliye",
        slug: "sehirler-arasi-nakliye",
        description:
          "Şehirler arası nakliyede garantili, zamanında teslimat ve uygun fiyat ile hizmet sunuyoruz.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/hizmetler/sehirler-arasi-nakliye-1.png",
        longDescrition: `  <h1 className="text-xl font-bold">Sigortalı Şehirler Arası Nakliyat</h1>
            <p>
             Kardelen Nakliyat 10 yılı aşkın şehirler arası nakliye tecrübesi ile sizlere profesyonel hizmet sunar. Şehirler arası taşıma hizmetinde ister eviniz olsun ister ofisiniz, şehirler arası taşınan bütün yükleriniz sözleşmeli ve sigortalı olarak taşınır. Şehirler arası nakliyat yapan araçlarımızın periyodik bakımları zamanında yapılır. Araçlarımızda bulunan çelik kasalar sayesinde yükünüz mevsim şartlarından asla etkilenmez. Sözleşmeli ve sigortalı profesyonel şehirler arası nakliyat hizmeti almak istiyorsanız iletişim sayfamızdaki numaralarımızdan bizlere ulaşabilir 7/24 destek alabilirsiniz.
            </p>`,
      },
      {
        name: "Ücretsiz Ekspertiz",
        slug: "ucretsiz-ekspertiz",
        description:
          "Taşınacak eşyalarınızı yerinde inceleyip, en iyi hizmeti vermek için ücretsiz ekspertiz hizmetimiz ile kapınızdayız.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/themes/tema/assets/img/hizmetler/ucretsiz-ekspertiz-1.png",
        longDescrition: `  <h1 className="text-xl font-bold">Eşyalarınızı Yerinde Görelim</h1>
            <p>
             Kardelen Nakliyat sizlere ücretsiz ekspertiz hizmeti sunar. Ekspertiz hizmeti ile taşınacak olan eşyalarınız yerinde incelenir ve taşıma planlanması yapılır. Yerince incelenen eşyalarınızın planlanması yapıldıktan sonra taşıma günü firmamız hazırlı bir şekilde taşıma hizmeti vermeye başlar. Ücretsiz ekspertiz hizmetimizden yararlanmak için iletişim sayfamızdaki numaralardan bizlere ulaşabilirsiniz.
            </p>`,
      },
    ]);
    set(ref(database, "ContactUs"), [
      {
        name: "Whatsapp Destek",
        shortname: "Telefon",
        description:
          "WhatsApp üzerinden firmamıza eşya resmi göndererek anında fiyat alabilirsiniz.",
        buttonName: "0532 376 49 84",
        buttonLink: "tel:05323764984",
        imageUrl:
          "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/1490000/whatsapp-aa-1490025.jpg",
      },
      {
        name: "Ofis Adresimiz",
        shortname: "Adres",
        description:
          "Ofisimizi ziyaret ederek yüz yüze görüşme sağlayabilirsiniz.",
        buttonName: "Harita Konumu",
        buttonLink: "https://maps.app.goo.gl/qzRaqu5vRnCradFU7",
        imageUrl:
          "https://www.a1nakliyat.com/wp-content/uploads/2022/02/evden-eve-nakliyat-1024x682.jpg",
      },
      {
        name: "Teklif Formu",
        shortname: "E-Posta",
        description:
          "Teklif formunu doldurarak firmamızdan hızlıca fiyat alabilirsiniz.",
        buttonName: "Teklif Formu",
        buttonLink: "iletisim",
        imageUrl:
          "https://images.hindustantimes.com/tech/rf/image_size_960x540/HT/p2/2017/02/28/Pictures/_8fcc5b2c-fd95-11e6-a3af-7fa15638f741.jpg",
      },
    ]);
    set(ref(database, "UserReviews"), [
      {
        name: "Yunus Güneş",
        description:
          "Merhabalar, Söz verdikleri tarihte taşıdılar. Taşınma sırasında sürekli iletişim halindeydik. Eşyalarım aynı gün içinde taşınacağı bölgeye ulaştı. Yine taşınma işlemim olursa aynı firmayı değerlendiriyor olurdum. Teşekkürler, İyi Çalışmalar.",
        gender: "male",
        date: "10 Ekim 2023",
        score: 5,
      },
      {
        name: "Büşra Yazıcı",
        description:
          "Konuşulan gün ve saatinde eşyalarım hiç zarar görmeden teslim aldım. Çalışanların samimiyeti ve eşyalara zarar vermemek için ellerinden geleni yapmaları harikaydı. Çok memnun kaldım teşekkürler.",
        gender: "female",
        date: "1 Haziran 2023",
        score: 4,
      },
      {
        name: "Sezer Akbulut",
        description:
          "Gayet güzel bir taşma oldu benim için. Açıkçası bu kadar zor bir işin bu kadar özenli yapılması son derece güzel. Ben çok memnun kaldım.",
        gender: "male",
        date: "6 Ocak 2023",
        score: 5,
      },
      {
        name: "Mehmet Bayrıl",
        description:
          "Bir daha taşınırsam kime taşıtacağımı artık biliyorum. Güler yüzlü ve işinin ehli ustalar. Sorunsuz bir taşınma oldu. Kendilerine teşekkür ediyorum. Kesinlikle herkese tavsiye ediyorum.",
        gender: "male",
        date: "28 Temmuz 2023",
        score: 4,
      },
    ]);
    set(ref(database, "PraticalTransportationInfos"), [
      {
        name: "Paketlenmemesi Gereken Eşyalar",
        slug: "paketlenmemesi-gereken-esyalar",
        description:
          "Taşınma gününden önce paketlenmesi gereken eşyalar hakkında daha detaylı bilgi almak için tıklayınız.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-6.jpg",
        longDescrition: `  <h1 className="text-xl font-bold">Paketlenmemesi Gereken Eşyalar</h1>
            <p>
            Taşınma gününden önce bir kısım eşyalarınızı aceleyle paketlemek sanıldığı gibi işinizi hızlandırmaktan ziyade sıkıntı yaratabilecektir.
            </p>
            <p>
            Gerçekten içinize sinen nakliye firmasını buldunuz ve profesyonel insanlarla çalışacağınıza inancınız tam. Yine de ön hazırlıklarla meşgul olup evi kendiniz toparlamak isteyebilirsiniz. Büyük bir heyecan dalgasına kapılıp hemen her şeyi kolilemeden önce bir kez daha düşünün. Sıkıntı yaratacak durumlarla karşılaşmamak için bir takım eşyaların paketlenmesi işini taşınma gününden önce yapmamanız lehinize olacaktır.
            </p>
            <p>
           Evden çıkacağınız son ana kadar listemizde yer alan eşyaları kullanmaya devam edeceğiniz gerçeğini göz önünde bulundurarak hareket etmenizde yarar görüyoruz.
            </p>
            <h3 className="font-bold">1-Buzdolabı ve derin dondurucu</h3>
            <p>
              Yiyecekleriniz de sizinle beraber yeni eve gidecekler. Buzdolabı ve derin dondurucuda sakladığınız gıda maddelerini bozulmadan yalnızca birkaç saat muhafaza etme imkanınız bulunduğundan fişlerini en son çekmeniz ve yeni evde çabucak kullanıma sokmanız gerekmektedir. Bu tavsiye şehir içi nakliyat için geçerli bir durum ama şehirlerarası nakliyat için bir gün önceden buzdolabı ve derin dondurucuların fişini çekmiş içini boşaltmış olmanız gerekli. Aksi halde yeni şehirde nakliyat aracının kapılarını açmanız ile tüm eşyalarınıza sinen kötü bir koku ile karşılaşabilirsiniz.
            </p>
            <h3 className="font-bold">2-Fırın ve ocak</h3>
            <p>
              Eğer evde küçük tüp ya da elektrikli pratik bir pişiriciniz yoksa acıktığınızda ya da yorgunluk kahvesi içmek istediğinizde hiç şüphesiz fırınınıza ihtiyaç duyacaksınız. Siz en iyisi son ana kadar risk almayın ve ocak ve fırınınızı paketleme işini nakliye firmasına bırakın.
            </p>
            <h3 className="font-bold">3-Oturma grubu</h3>
            <p>
              Yerde oturmayı seven bir millet olsak da hazırlıkların yorgunluğunu atmak isteyeceğiniz rahat bir koltuğu arayacaksınız. Bu sebeple oturma grubunuzu son güne kadar ambalajlamamanız menfaatinizedir.
            </p>
            <h3 className="font-bold">4-Perde ve güneşlik</h3>
            <p>
              Sizde benim gibi her akşam bu perdeler niye açık diye annenizden fırça yemek istemiyorsanız perdeleri paketleme işini taşınma günü sabahına bırakın. Her ne kadar gizli saklı işler çevirmiyor olsanız da dışarıdan sürekli gözetlendiğiniz hissine kapılmanız sizi huzursuz edecektir. Perde ve güneşlikleri evden ayrılmadan önce çıkartabilirsiniz.
            </p>
            <h3 className="font-bold">5-Yatak</h3>
            <p>
              Gece bir kenarda kıvrılıp uyuma fikriniz varsa bundan vazgeçin. Taşınma gününden önce iyi bir uykuya ihtiyaç duyacaksınız. Yatak ve diğer uyku ekipmanlarını paketlenmek için son gün beklenmelidir.
            </p>
            <h3 className="font-bold">6-Aydınlatma</h3>
            <p>
              Hemen lambaları, avizeleri sökme işine girmeyin. Bunları eşyalar kamyona yüklenirken, eğer taşınacağınız yer yakınsa eşyalar yola çıktıktan sonra bile halledebilirsiniz. Son gecenizi karanlık bir evde, mum ışığı altında romantik bir şekilde geçirmek istiyorsanız o ayrı tabi. Ancak dikkat edin, bir kenara istiflediğiniz kolilere çarpıp kırılmalarına yol açabilirsiniz.
            </p>
            <h3 className="font-bold">7-Saksı ve çiçekler</h3>
            <p>
              Taşınmada size bir katkısı olmayacaklarsa da onları günler öncesinden kolilerin içine koymak havasız ve sıcak ortamda kalmalarına ve ölmelerine yol açabilecektir. Bu sebeple bir köşede taşınmaya hazır halde bekletmeniz en doğrusu olacaktır.
            </p>
            <h3 className="font-bold">8-Temizlik ürünleri</h3>
            <p>
              Sabun, deterjan, yağ ve kir sökücüler gibi bilumum temizlik ürünlerine, kişisel temizliğiniz ve evi boşalttıktan sonraki son temizlik için ihtiyaç duyacaksınız. Bu sebeple bir kenarda bekletilmelerinde fayda var.
            </p>
            `,
      },
      {
        name: "Tasarruf Sağlayacak Fikirler",
        slug: "tasarruf-saglayacak-fikirler",
        description:
          "Taşınma sırasında tasarruf sağlayacak bilgiler almak için tıklayınız",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-5.jpg",
        longDescrition: `  <h1 className="text-xl font-bold">Taşınırken Tasarruf Sağlayacak 4 Fikir</h1>
            <p>
            Taşınmak zorlu bir iştir, eğer çok fazla eşyaya sahipseniz çok pahalı da olabilir. Burada tasarruf etmenize yardımcı olacak fikirler bulacak ve yeni evinize planladığınız bir bütçe ile taşınmanıza destek olacaktır.
            </p>
            <h3 className="font-bold">1-Taşınacak Eşyaları Azaltmaya Çalışın</h3>
            <p>
              Taşınmayı planlamaya başladığınızda artık pek kullanmadığınız ve gereksiz eşyalardan kurtulun. Çünkü nakliyat firmaları taşınacak eşyanın hacmine göre fiyatlama yapar. Taşınacak eşyanın hacmi ne kadar fazla olursa o kadar yüksek fiyat teklifleri alacaksınız. Fazlalıklardan kurtulurken önceliğinizi giymediğiniz elbiseleri tekrar bir gözden geçirin ve fazlalıklardan kurtulun. Ardından mutfak dolaplarında çok az kullanılan eşyaları da gözden geçirmenizi öneriyoruz.
            </p>
            <p>
             Gerçekten hiç kullanmadığınız veya atmaya da gönlünüz el vermiyorsa bu eşyaları ikinci el ürünlerin satıldığı web sitelerinde satabilirsiniz. Taşınmaya birkaç hafta kala bu çalışmalara başlayın. Satmak istemediğiniz ürünleri bağışlama seçeneğini de tercih edebilirsiniz. Belediye ve yardım kurumlarının böyle çalışmaları oluyor. Bunun için internette biraz araştırma yapmanızı öneriyoruz.
            </p>
            <h3 className="font-bold">2-İyi Bir Evden Eve Nakliyat Firması Seçin</h3>
            <p>
            Taşınacak eşya az ise küçük kamyonet nakliye hizmeti alabilirsiniz. Ancak eğer tüm ev eşyaları taşınacaksa bu iş için profesyonel hizmet almanız daha doğru olacaktır. Nakliyat firması seçerken tasarruf etmenizi için iyi ve ideal bir nakliyat firması seçmek çok daha doğru olacaktır. Birçok firmadan teklif alacaksınız bu tekliflerden bazıları çok düşük, bazıları çok yüksek olabilir. Bu düşük ve yüksek fiyatları görmezlikten gelin. Ardından aldığınız fiyat tekliflerin ortalamasına en yakın teklifi tercih etmenizi öneriyorum. Çünkü düşük fiyatların size tasarruf sağlamayacağını kesinlikle biliyoruz. İstatistikler bunu bize gösteriyor.
            </p>
            <h3 className="font-bold">3-Birçok Firmadan Teklif Alın</h3>
            <p>
              Firma seçimindeki önemli bir etkende birçok firmadan fiyat teklifi alıp bu teklifleri karşılaştırarak en ideal firmayı bulabilirsiniz. Teklif aldığınız firmaların müşteri yorumlarını inceleyerek tercihinizi yapmanızı öneriyoruz. Firmalar ile taşınma için pazarlık yaparken firmaların yoğun olduğu hafta sonu yerine haftanın ortasında taşınarak daha iyi fiyatlar alabilirsiniz.
            </p>
            <h3 className="font-bold">4-Ambalaj Malzemeleri İçin Fazla Harcama Yapmayın</h3>
            <p>
              Evden eve nakliyat firmaları tüm eşyaların paketlemesini yapıyor. Ancak kolileme işlerini siz yaparsanız firmadan daha iyi fiyat teklifleri alabilirsiniz. Diğer eşyaların paketlemesi işini nakliyat firmalarına bırakmanızı öneriyoruz. Koli ve diğer paketleme malzemelerini market, beyaz eşya ve mobilya satıcılarından koli ve diğer paketleme malzemelerini temin edebilirsiniz.
            </p>
            <h3 className="font-bold">Stressiz Rahat Taşının</h3>
            <p>
              Evet taşınmanın stresli, pahalı ve zaman alıcı bir iş olması gerekmez. Hazırlık yaparak, biraz araştırarak hem rahat taşınabilirsiniz hemde tasarruf edebilirsiniz. Unutmayın iyi bir taşınmanın ilk adımı iyi araştırarak ve bir taşınma planı hazırlamak çok önemlidir. Böylece stressiz rahat taşınabilirsiniz.
            </p>
            `,
      },
      {
        name: "En Çok Gerekli Aletler",
        slug: "en-cok-gerekli-aletler",
        description:
          "Taşınma sırasında sizin işinize çok gerekli olacak aletler hakkında bilgi almak için tıklayınız.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-4.jpg",
        longDescrition: `  <h1 className="text-xl font-bold">Taşınma Sırasında En Çok Lazım Olan Aletler</h1>
            <p>
            Taşınma işlemi esnasında daha planlı ve hızlı hareket edebilmek için kullandığınız ekipman ve aletlerin, işinizi kolaylaştıracak niteliğe sahip olması oldukça önemlidir. Kullanışlı aletler, zamandan tasarruf etmenize ve zorlu işleri külfet olmaktan çıkarmaya yardımcı olur. Yazımızda, taşınırken elinizin altında olmasını isteyeceğiniz fonksiyonel alet ve eşyaları sizler için derledik.
            </p>
            <h3 className="font-bold">Tornavida Takımı ve Lokma Setleri</h3>
            <p>
              Tornavida takımı ve lokma setleri, demonte özelliğe sahip olan dolap, gardırop, masa ve yatak odası takımı gibi mobilyaların hızlı bir şekilde ayrılıp birleştirilmesi için gereklidir. Fonksiyonel lokma takımı ve vidalama aletleri ile her boy cıvata ve vidayı kolaylıkla söküp takabilirsiniz. Cırcır kurmalı lokma takımları ve şarjlı vidalama tabancaları ile hız ve zaman kazanabilirsiniz.
            </p>
            <p>
            Ucu bozulan vidaları çok zorlamadan önce bir parça lastik kullanarak vidanın başını bozmadan vidayı sökebilirsiniz. Bunun için bir parça lastiği vida ve tornavida arasına koyarak sıkıca bastırın ve yavaş yavaş çevirmeye çalışın. Eğer bu seçenekte işinize yaramaz ise biraz pas sökücü sıkın ve belli bir müddet bekledikten sonra aynı yöntem ile tekrar deneyin.
            </p>
            <h3 className="font-bold">Koli Ambalaj Kağıdı ve Poşetler</h3>
            <p>
            Cam ve porselen gibi hassas eşyalarınızı toplarken farklı en ve boy ölçülerine sahip kolileri kullanabilirsiniz. Karton kutular, nem alıcı özelliği sayesinde her türlü malzemeyi taşımaya olanak tanır. Oluklu mukavva kutular, darbelere en dayanıklı ürünler arasında yer alır. Kolilere özellikle kırılacak eşyaları paketlerken bol bol ambalaj kağıdına sarın ve kolideki tüm boşlukları ambalaj kağıtları ile doldurun. Kolideki eşyaların sağlam kalabilmesi için hareket etmemesi önemlidir. Perde, havlu ve halı gibi ev eşyalarınızı ise, dayanıklı poşetler içinde taşıyabilirsiniz.
            </p>
            <h3 className="font-bold">Koli Bandı ve Koli Bantlama Makinesi</h3>
            <p>
            Eşyalarınızı koli ve ambalaj içine yerleştirdikten sonra, ağzını kapamak için en uygun ve pratik yöntem koli bandı kullanmaktır. Güçlü yapıştırma özelliği sayesinde geniş alanlı bantları, koli alt ve üstünü örtmek ve sağlamlaştırma işlemleri için de kullanabilirsiniz. Oldukça makul fiyatlarla temin edebileceğiniz koli bantlama makineleri ise, hızınızı önemli ölçüde artıracaktır.
            </p>
            <h3 className="font-bold">Hareketli Kaldıraç İpi ve Aparatları</h3>
            <p>
             Hareketli kaldıraç ipi ve aparatları, çamaşır makinesi, televizyon, buzdolabı ve yatak gibi büyük ve ağır eşyaları iki kişi ile kolaylıkla taşımanıza yardımcı olur. Bel ve omuz desteği ile sabitlenen esnek aparatlar, ağırlık merkezini dengeli bir şekilde paylaştırdığı için, güvenli ve kolay taşıma imkanını sunar. Ayrıca taşınma esnasında yaşanabilecek olası kazaları da önler.
            </p>
            <h3 className="font-bold">Maket Bıçağı ve Makas</h3>
            <p>
             Maket bıçağı ve makas taşınırken en çok kullanacağınız aletler arasında yer alır. Poşetleme yaparken, bant keserken ve koli açarken maket bıçağını sıkça kullanabilirsiniz.
            </p>
            <h3 className="font-bold">Köpük ve Naylon Malzemeler</h3>
            <p>
            Kırılma riski bulunan eşyalarınızın içini ve dışını, darbe emici köpük ve gazete kağıdı gibi malzemelerle sarmak ekstra güvenlik sağlar. Hava kabarcıklı naylon veya strafor süngerler, beyaz eşya ve elektronik cihazların muhafazası için ideal çözümler sunar.
            </p>
            <h3 className="font-bold">Keçeli Kalemler</h3>
            <p>
            Karton kutuların ve poşetlerin üzerine uyarı yazıları yazmak için, arka cebinizde kalem bulundurmayı da ihmal etmeyin.
            </p>
            `,
      },
      {
        name: "Kırılacak Eşyalar Nasıl Paketlenir?",
        slug: "kirilacak-esyalar-nasil-paketlenir",
        description:
          "Kırılacak eşyalara zarar gelmeden nakil etmenin yöntemlerini öğrenmek için tıklayınız.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-3.jpg",
        longDescrition: `  <h1 className="text-xl font-bold">Taşınma Süreci Ve Olası Problemler</h1>
            <p>
            Yeni bir eve taşınmaya karar verdiyseniz, bu duruma alışmak için kendinizi bir an önce hazırlamanızda fayda var. Her ne kadar gereken bütün önlemleri alsanız da, o büyük gün geldiğinde ya da öncesinde bazı şeyler sizin kontrolünüzden çıkabilir. Böylesi durumlarda en iyi kararları alabilmeniz için, fikir vermesi açısından taşınma sırasında yaşanan genel sorunları sizler için derledik.
            </p>
            <p>
           Öncelikle bilmelisiniz ki, her sorunun bir çözümü mutlaka vardır. İster evcil dostlarınızla birlikte taşının, ister kocaman bitkileriniz olsun, isterseniz eşyalarınız çok olsun, sakın dert etmeyin.
            </p>
            <p>
           Bazı paketleme malzemelerinin yerini gerçekten de hiçbir şey tutmaz. Mesela stresli anlarda patlatmaktan hoşlandığınız baloncuklu olanlar, hassas eşyaların paketlenmesinde olmazsa olmazlar arasındadır. Bu tip özel paketleme malzemelerini önceden temin etmelisiniz. Eğer profesyonel bir nakliye firması ile çalışmaya karar vermişseniz, bu işi yapmaktan kurtulabilirsiniz. Aksi takdirde taşınma malzemesi arayışına zaman ayırmanız şart!
            </p>
            <h3 className="font-bold">Fiziksel olarak siz ya da eşyalarınız zarar görebilir!</h3>
            <p>
             Eski evinizden yenisine taşınırken, bir ilk yardım çantasını hazır etmelisiniz. Çünkü eğer dikkatli olmazsanız, taşınma sırasında fiziksel olarak yaralanabilirsiniz! Böyle olası bir kaza anında nelere ihtiyacınız olacağını düşünerek bir ilk yardım çantasını hazır bulundurmalısınız!
            </p>
            <p>
             Kendiniz kazadan kurtulsanız dahi, mesela sandalye ayağı gibi kolay zarar görebilecek eşyalarınıza bir şey olabilir. Dolayısıyla profesyonel yardım almayacaksanız, pahalı eşyalarınızı uygun malzemelerle düzgün bir şekilde paketlemelisiniz. Özellikle elektronik eşyalarınıza daha çok özen göstermeniz gerekecektir. Eğer bu eşyaların orijinal kutuları mevcut değil ise en yakın nalburdan bir iki strafor alın ve bu eşyaları balonlu naylon ve strafor ile iyice sarıp paketleyin.
            </p>
            <h3 className="font-bold">Taşınma sırasında zaman problemi</h3>
            <p>
           Eğer taşınmak için yeterince zamanınız yoksa, nakliye firması olmadan bu işi çözmeniz pek kolay olmayabilir. Yıllık izninizi taşınma ile harcamak isterseniz tabii ki bu da sizin tercihiniz. İş arkadaşlarınızın tatil fotoğraflarına bakarken pişman olmayın sakın!
            </p>
            <h3 className="font-bold">Taşınma sırasında ekonomik problemler</h3>
            <p>
          Taşınma maliyetlerini azaltmak için kendinizce önlemler alırken, sürpriz harcama kalemleri ile karşılaşabilirsiniz. Taşınırken kırdığınız için yenisini almak zorunda kaldığınız eşyalar, yardımcı eleman maliyeti, taşıma asansörü maliyeti… Bir nakliye firması ile anlaştığınızda ise, fiyat başta belirlenenden değişiklik göstermeyecektir.
            </p>
            <h3 className="font-bold">Değerli eşyalarınız yanınızda olsun!</h3>
            <p>
             Kira sözleşmesi, banka cüzdanı, kredi kartları, önemli faturalar, mücevherler, sürekli kullandığınız ilaçlarınız gibi sizin için önemli olan eşyaları yanınızda bulundurmanızda fayda var. Çünkü her ne kadar düzenli organize edilse de, taşınmanın kendi içinde yarattığı bir dağınıklık mutlaka olacaktır. Öte yandan bu eşyalara ya da belgelere, yeni evinize yerleşene kadar acil ihtiyacınız olabilir. Dolayısıyla önemli eşyalarınızı özel bir çantada, ulaşabileceğiniz bir yerde muhafaza etmeniz, olası krizlerleri engelleyecek basit bir önlemdir.
            </p>
            `,
      },
      {
        name: "Taşınırken Koli Nasıl Hazırlanır?",
        slug: "tasinirken-koli-nasil-hazirlanir",
        description:
          "Kırılacak eşyalara zarar gelmeden nakil etmenin yöntemlerini öğrenmek için tıklayınız.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-2.jpg",
        longDescrition: `  <h1 className="text-xl font-bold">Taşınırken Koli Nasıl Hazırlanır?</h1>
            <p>
        Evden eve nakliyat çok sık yaptığımız işlerden biri değildir. Ama gündemimize geldiğinde stres düzeyimizi arttırmaktadır. Birçok belirsizlik ile karşı karşıya olmak bizi endişeye sürüklüyor. Bu stresimizin bize zarar vermemesi için yeni eve taşınmadan önce dikkatli bir planlama yapılması bizi ferahlatacaktır.
            </p>
            <p>
          Yeni eve taşınmadan önce yapılması gereken önemli konulardan biride kolilerin hazırlanması işidir. Doğru bir paketleme yapmadığımızda onca zahmet ile paketlediğimiz eşyalarımız yeni evde koli açıldığında bizi hüsrana boğabilir. Çünkü artık kullanılabilir durumda değildir.
            </p>
            <p>
        Paketlemenin nasıl yapılacağına geçmeden önce sizinle birkaç kötü paketleme örneği paylaşmak istiyorum.
            </p>
              <h3 className="font-bold">Doğru Paketlemeyi Şöyle Özetleyebiliriz</h3>
            <p>
               Özellikle kırılacaklar diye adlandırılan cam, porselen ve seramiklerin iyi paketlenmesi gerekir, yanlış paketleme ile en sevdiğiniz porselen takımınız bozulabilir. Paketlerken dikkat etmeniz gereken önemli bilgileri sırayla yazmakta yarar olacağını düşünüyorum.
            </p>
            <ol>
              <li>Orta boy çift oluklu kolileri kullanın</li>
              <li>Tabakları tek tek kağıtlara sarın ve koliye dik olarak yerleştirin.</li>
              <li>Bardakların içlerine değil daha çok dışlarına kağıt sarmaya özen gösterin.</li>
              <li>Koliye bu eşyaları yerleştirmeden önce kolinin altına kırıştırdığınız kağıtları tampon olarak yerleştirin. Ardından önce büyük tabak ve porselenleri yerleştirin. İlk sıra dolduktan sonra her kat ve boşluklara kağıt sıkıştırın. Kolinin üstlerine doğru daha küçük olan eşyaları örnek olarak bardakları yerleştirin.</li>
              <li>Koli dolduğunda üst kısmına da kağıt kırıştırarak tampon olarak kullanın. Böylece hem altta hemde üstte tampon bölgeler orta kısımda ise eşyalarınız olacaktır.</li>
              <li>Koliyi doldurduktan sonra etiketlemeye özen gösterin. Her tarafına uyarıcı notlar alın ve içindekiler hakkında bilgi verecek şekilde notlar alın.</li>
              <li>Kolilerin çok ağır olmamasına dikkat edin. Ağır koliler başka eşya veya kolilerde hasarların oluşmasına neden olabilir.</li>
           </ol>
            `,
      },
      {
        name: "Kırılacak Eşyalar Nasıl Paketlenir?",
        slug: "kirilacak-esyalar-nasil-paketlenir",
        description:
          "Kırılacak eşyalara zarar gelmeden nakil etmenin yöntemlerini öğrenmek için tıklayınız.",
        imageUrl:
          "https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/blog-1.jpg",
        longDescrition: `  <h1 className="text-xl font-bold">Kırılacak Eşyalar Nasıl Paketlenir?</h1>
            <p>
           Kırılacaklar diye adlandırdığımız eşyaları şöyle özetleyebiliriz cam, porselen, kristal, seramik eşyalar bu guruba dahildir. Bu eşyaların çoğu mutfakta bulunsa da daha çok yeme ve içme işlerimizde yardımcı olarak kullandığımız eşyaların isimleridir. Örneğin aynalar bu guruba girmez kırılabiliyor olsa bile, tanım önemli burada anlaştıysak devam edebiliriz.
            </p>
            <p>
           Bir müşterimiz nakliyecinin bu eşyalara “kırılacaklar” demesine çok sinirlenmiş ve bu neden böyle diye Enakliyat’ı aramış ve nakliyat firması bunları kıracak bu nedenle kırılacaklar diyor diye sitem etmişti. Bunu sadece bir terim olduğu konusunda müşteriyi zor ikna edebilmiştik. Evet bu ismi bu eşyalara nakliyeciler vermiş olabilir. Neden mi çünkü taşınma işi bittiğinde bu eşyaların çoğu kırılmış oluyor. Böylece isimleri kırılacaklar diye kalmış. Nakliyeci de bu eşyaları kırılacaklar olarak adlandırıp önceden ince bir uyarıda bulunmuş oluyor. Haberin olsun bak bu eşyalar kırılabiliyor diye.
            </p>
            <p>
         Ancak doğru bir paketleme bu kaderi kökünden değiştirebilir. İster evinizi taşırken veya bu eşyaları kargoya verirken nasıl paketlenmesi gerektiğini bilirseniz kesinlikle kırılmayacaklar. Paketlemeye başlamak için aşağıdaki malzemeler gerekecektir:
            </p>
            <ul>
              <li>Yeterli büyüklükteki bir koli</li>
              <li>Koli bandı</li>
              <li>Ambalaj kağıdı veya gazete kağıdı, hatta kağıt havlu bile iyi iş görür</li>
              <li>Eğer paketlenecek eşya değerliyse balonlu naylon</li>
              <li>Koli üzerine içindekiler ve nasıl taşınacağını yazmak için kalem</li>
            </ul>
            <p>
               İşte tüm ihtiyacımız olan malzemeler bunlar hadi paketlemeye başlayalım.
            </p>
            <p>
              Bu eşyaların iyi paketlenmesi gerekir, yanlış paketleme ile en sevdiğiniz porselen takımınız bozulabilir. Paketlerken dikkat etmeniz gereken önemli bilgileri sırayla yazmakta yarar olacağını düşünüyorum.
            </p>
            <ol>
              <li>Orta boy çift oluklu kolileri kullanın.</li>
              <li>Tabakları tek tek kağıtlara sarın ve koliye dik olarak yerleştirin.</li>
              <li>Bardakların içlerine değil daha çok dışlarına kağıt sarmaya özen gösterin.</li>
              <li>Koliye bu eşyaları yerleştirmeden önce kolinin altına kırıştırdığınız kağıtları tampon olarak yerleştirin. Ardından önce büyük tabak ve porselenleri yerleştirin. İlk sıra dolduktan sonra her kat ve boşluklara kağıt sıkıştırın. Kolinin üstlerine doğru daha küçük olan eşyaları örnek olarak bardakları yerleştirin.</li>
              <li>Koli dolduğunda üst kısmına da kağıt kırıştırarak tampon olarak kullanın. Böylece hem altta hemde üstte tampon bölgeler orta kısımda ise eşyalarınız olacaktır.</li>
              <li>Koliyi doldurduktan sonra etiketlemeye özen gösterin. Her tarafına uyarıcı notlar alın ve içindekiler hakkında bilgi verecek şekilde notlar alın.</li>
              <li>Kolilerin çok ağır olmamasına dikkat edin. Ağır koliler başka eşya veya kolilerde hasarların oluşmasına neden olabilir.</li>
           </ol>
           <p>Daha çok değer verdiğiniz eşyaları çok fazla ambalaj kağıdı ile sarın ve tek başlarına kolilere yerleştirin. Kolinin kalan diğer tüm boşluklarını ambalaj kağıtlarını kırıştırarak doldurun. Kolinin içine koyduğunuz eşyanın hareket etmemesi sağlam taşınması için çok önemli. Ayrıca kırılacakların paketlenmesinde koli ne kadar ağır olursa içindekilerin kırılma olasılığı o kadar artar. Büyük kolileri bu iş için kullanmayın. </p>
            `,
      },
    ]);
    set(ref(database, "ilcehizmet"), [
      {
        name: "Develi Evden Eve Nakliyat",
        slug: "develi-evden-eve-nakliyat",
      },
      {
        name: "Yahyalı Evden Eve Nakliyat",
        slug: "yahyali-evden-eve-nakliyat",
      },
      {
        name: "Melikgazi Evden Eve Nakliyat",
        slug: "melikgazi-evden-eve-nakliyat",
      },
      {
        name: "Kocasinan Evden Eve Nakliyat",
        slug: "kocasinan-evden-eve-nakliyat",
      },
      {
        name: "Talas Evden Eve Nakliyat",
        slug: "talas-evden-eve-nakliyat",
      },
      {
        name: "İncesu Evden Eve Nakliyat",
        slug: "incesu-evden-eve-nakliyat",
      },
      {
        name: "Tomarza Evden Eve Nakliyat",
        slug: "tomarza-evden-eve-nakliyat",
      },
      {
        name: "Bünyan Evden Eve Nakliyat",
        slug: "bunyan-evden-eve-nakliyat",
      },
      {
        name: "Pınarbaşı Evden Eve Nakliyat",
        slug: "pinarbasi-evden-eve-nakliyat",
      },
    ]);
  };
  useEffect(() => {
    fetchDatas();
    setDatas();
  }, []);

  return (
    <section>
      <div className="text-center space-y-4">
        <h1 className="text-4xl">Profesyonel Paketleme!</h1>
        <p className="text-lg w-full lg:w-3/4 xl:w-3/4 2xl:w-3/4 mx-auto">
          Taşınacak eşyalarınızı en iyi ambalaj ürünleri ile profesyonelce
          paketliyoruz.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-3 my-3">
        {data?.map((card, index) => (
          <div
            key={index}
            className="w-full rounded shadow-lg bg-gray-800 flex text-white my-3"
          >
            <img
              src={card.imageUrl}
              alt="image"
              className="h-full object-cover"
            />
            <div className="p-4 w-full">
              <h2 className="font-bold text-base mb-2">{card.name}</h2>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalPackaging;
