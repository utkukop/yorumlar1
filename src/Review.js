import React, { useState } from 'react';
import people from './data';  // people dış bir dosyadan kişi verilerini alan array tipinde bir modül
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'; // react-icons/fa modülünden getirilen ikonlar

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

/*checkNumber, sayının (index) dizinin sınırları içinde olup olmadığını kontrol eder.
Eğer sayı, dizideki en büyük indeksten (people.length - 1) büyükse, döngüsel olarak başa döner (0).
Eğer sayı, 0'ın altına düşerse, dizinin son elemanına gider.
Bu sayede kullanıcı, dizinin sınırlarını aştığında mantıksal olarak en başa veya en sona döner.
*/

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  /* nextPerson, index değerini 1 arttırır ve sonra checkNumber ile kontrol eder.
Bu, bir sonraki kişinin gösterilmesini sağlar. Eğer son kişideysek, başa döner. */

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  /* prevPerson, index değerini 1 azaltır ve sonra checkNumber ile kontrol eder.
  Bu, bir önceki kişinin gösterilmesini sağlar. Eğer ilk kişideysek, sona gider. */

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  /*
randomPerson, diziden rastgele bir indeks seçer ve o kişiyi gösterir.
Eğer seçilen indeks mevcut indeksle aynıysa, bir sonraki kişiyi gösterecek şekilde ayarlanır.
 */

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };


  /*
article = Bir kişi ile ilgili tüm bilgileri içerir
img kişinin görselini gösterir
h4,p etiketleri kişinin adını ve hakkındaki yazıyı gösterir
prev-btn = önceki kişiye
next-btn = sonraki kişiye geçmeyi sağlar
random-btn = rastgele arama yapılmasını sağlar

  */
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

/*
Bu bileşen, kullanıcıya bir dizi kişiyi gezebilme, rastgele bir kişi seçebilme ve 
mevcut kişi hakkında bilgi edinme imkanı sağlar. 
Bileşen, useState ile dinamik olarak durumu yönetir ve 
kullanıcı etkileşimlerine göre içeriği günceller.

*/

export default Review;