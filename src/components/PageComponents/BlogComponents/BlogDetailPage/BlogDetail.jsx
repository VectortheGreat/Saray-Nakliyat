import { useParams } from "react-router-dom";
import { database, getDatas } from "../../../../config/config";
import { get, ref } from "firebase/database";
import { useState } from "react";
import { useEffect } from "react";

const BlogDetail = () => {
  const { slug } = useParams();
  const [slugs, setSlugs] = useState([]);
  const fetchDataBase = async () => {
    const databaseRef = ref(database);
    get(databaseRef).then((snapshot) => {
      const keys = [];
      const slugsArray = [];
      snapshot.forEach((childSnapshot) => {
        keys.push(childSnapshot.val());
      });
      keys.map((x, i) => {
        if (i === 1 || i === 3) {
          x.map((y) => {
            slugsArray.push(y.slug);
          });
        }
      });
      const filteredSlugs = slugsArray.filter((value) => value === slug);
      setSlugs(filteredSlugs[0]);
    });
    console.log(true);
  };
  useEffect(() => {
    fetchDataBase();
  }, []);
  console.log(slugs);

  const card = {
    name: ` <p>
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
  };
  const createMarkup = () => {
    return { __html: card.name };
  };
  return (
    <div className="mx-2 px-5">
      <div className="container mx-auto text-white space-y-5">
        <h1 className="text-center text-2xl my-3">Evden Eve Nakliyat</h1>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
          <div className="md:col-span-5 space-y-3">
            <img
              className="w-full rounded-md shadow-sm shadow-white"
              src="https://kardelennakliyat.com.tr/wp-content/uploads/2021/01/evden-eve-nakliyat.jpg"
              alt=""
            />
            <h1 className="text-xl font-bold">OFİS ve KURUMSAL TAŞIMACILIK</h1>

            <div dangerouslySetInnerHTML={createMarkup()} />
          </div>
          <div className="md:col-span-2 space-y-3">
            <div className="border-2 rounded-lg border-gray-800 p-4">
              <h2 className="text-xl font-semibold">Diğer Yazılar</h2>
              <ul className="mt-4">
                <li className="mb-2">
                  <a href="/" className="hover:text-pink-600">
                    Örnek Blog Yazısı
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-2 rounded-lg border-gray-800 p-4">
              <h2 className="text-xl font-semibold">Nakliyat Bilgiler</h2>
              <ul className="mt-4">
                <li className="mb-2">
                  <a href="/" className="hover:text-pink-600">
                    Örnek Nakliyat Bilgiler
                  </a>
                </li>
              </ul>
            </div>
            <div className="border-2 rounded-lg border-gray-800 p-4">
              <h2 className="text-xl font-semibold">Sayfalar</h2>
              <ul className="mt-4">
                <li className="mb-2">
                  <a href="/" className="hover:text-pink-600">
                    Anasayfa
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/" className="hover:text-pink-600">
                    İletişim
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
