import './css/App.css';
import Add from './Add';
import Home from './Home';
import Like from './Like';
import Deleted from './Deleted';
import advice from './advice.json'
import { useEffect, useState } from 'react';
function App() {
  const [action, setAction] = useState('');
  const [advicerandomshow, setAdviceRanDomShow] = useState([]);

  //Tất cả Lời khuyên 
  const [advices, setAdvices] = useState(() => {
    const adviceLocals = JSON.parse(localStorage.getItem('advices'));
    if (adviceLocals)
      return adviceLocals;
    else
      return [];
  });
  //Lời khuyên yêu thích
  const [advicelikes, setAdviceLike] = useState(() => {
    const advicelikeLocals = JSON.parse(localStorage.getItem('advicelikes'));
    if (advicelikeLocals)
      return advicelikeLocals;
    else
      return [];
  });
  //Lời khuyên đã xóa
  const [advicedeleted, setAdviceDeleted] = useState(() => {
    const advicedeletedLocals = JSON.parse(localStorage.getItem('advicedeleted'));
    if (advicedeletedLocals)
      return advicedeletedLocals;
    else
      return [];
  });
  //Component Homme
  // Xử lý cho lần đầu render cho thiết bị mới
  useEffect(() => {
    const adviceLocals = JSON.parse(localStorage.getItem('advices'));
    if (!adviceLocals) {
      console.log(advice);
      localStorage.setItem('advices', JSON.stringify(advice));
      setAdvices(advice);
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('advices', JSON.stringify(advices));
  }, [advices])
  //Hàm xử lý ramdom ra lời khuyên
  const handleRanDomAdvice = () => {
    const idRanDom = Math.floor(Math.random() * advices.length);
    const adviceRanDom = advices[idRanDom];
    setAdviceRanDomShow(adviceRanDom);
  }
  //Hàm xử lý click lời khuyên yêu thích
  const handleLikeAdvice = (id) => {
    const advicelike = advices[id];
    //nếu advicelike không rỗng
    if (advicelike) {
      document.getElementById('popup__thongbao').checked = true;
      const advicelikelocal = JSON.parse(localStorage.getItem('advicelikes'));
      if (advicelikelocal.length > 0) {
        const bolean = advicelikelocal.some(item => item.id ===id);
        //nếu id không trùng với id đã được đưa vào localstorage
        if (!bolean) {
          localStorage.setItem('advicelikes', JSON.stringify(advicelike));
          setAdviceLike((preAdvicelike) => [...preAdvicelike, advicelike]);
        } 
      }
      else {
        localStorage.setItem('advicelikes', JSON.stringify(advicelike));
        setAdviceLike((preAdvicelike) => [...preAdvicelike, advicelike]);
      }

    }
  }
  useEffect(() => {
    localStorage.setItem('advicelikes', JSON.stringify(advicelikes));
  }, [advicelikes]);
  //component add
  const handleAddAdivce = (value) => {
    if (value.trim() !== "") {
      document.getElementById('popup__advice').checked = true;
      document.getElementById('value_advice').value = "";
      const newAdvice = { "id": advices.length, "advice": value.trim() };
      setAdvices((preAdvices) => [...preAdvices, newAdvice]);
    }
  }

  ///component like
  const handleDeleted = (id) => {
    document.getElementById('popup__deleted').checked = true;
    const newAdvcieLikes = advicelikes.filter(item => item.id !== id);
    const newAdviceDeleted = advices[id];
    localStorage.setItem('advicedeleted', JSON.stringify(newAdviceDeleted));
    setAdviceDeleted((preAdviceDeleted) => [...preAdviceDeleted, newAdviceDeleted]);
    setAdviceLike(newAdvcieLikes);
  }

  useEffect(() => {
    localStorage.setItem('advicedeleted', JSON.stringify(advicedeleted));
  }, [advicedeleted]);

  //Xử lý component deleted
  const handleKhoiPhuc = (id) => {
    document.getElementById("popup__khoiphuc").checked = true;
    const advicekhoiphuc = advices[id];
    const newadvicedeleted = advicedeleted.filter(item => item.id !== id);
    setAdviceDeleted(newadvicedeleted);
    setAdviceLike((preAdvicelike) => [...preAdvicelike, advicekhoiphuc])
  }

  //Xử lý action
  const Action = () => {
    switch (action) {
      //Component Lời khuyên ramdom (trang chủ)
      case "Home": return <Home handleRanDomAdvice={handleRanDomAdvice}
        advicerandomshow={advicerandomshow}
        handleLikeAdvice={handleLikeAdvice}
      />
      //Component Add thêm lời khuyên
      case "Add": return <Add handleAddAdivce={handleAddAdivce} />
      //Component Lời khuyên Yêu thích
      case "Like": return <Like advicelikes={advicelikes} handleDeleted={handleDeleted} setAction={setAction}/>
      //Component Lời khuyên Yêu thích đã xóa
      case "Deleted": return <Deleted advicedeleted={advicedeleted} handleKhoiPhuc={handleKhoiPhuc} />

      default: return <Home handleRanDomAdvice={handleRanDomAdvice}
        advicerandomshow={advicerandomshow}
        handleLikeAdvice={handleLikeAdvice}
      />
    }
  }
  return (
    <div className="base">
      <header >
        <nav className="navbar_advice-desktop">
          <ul>
            <li onClick={() => setAction("Home")}>Trang chủ</li>
            <li onClick={() => setAction("Add")}>Thêm lời khuyên</li>
            <li onClick={() => setAction("Like")}>Lời khuyên yêu thích</li>
            <li onClick={() => setAction("Deleted")}>Lời khuyên đã xóa</li>
          </ul>
        </nav>
        <div>
          <input hidden type="checkbox" id="checkbox__hidden" />
          <label htmlFor="checkbox__hidden" className="setting__icon"><i className="fas fa-bars"></i></label>
          <label htmlFor="checkbox__hidden" className="over__background"></label>
          <nav className="navbar_advice_tablet_mobile">
            <label htmlFor="checkbox__hidden"><i className="fas fa-times"></i></label>
            <ul>
              <label htmlFor="checkbox__hidden"><li onClick={() => setAction("Home")}>Trang chủ</li></label>
              <label htmlFor="checkbox__hidden"> <li onClick={() => setAction("Add")}>Thêm lời khuyên</li></label>
              <label htmlFor="checkbox__hidden"> <li onClick={() => setAction("Like")}>Lời khuyên yêu thích</li></label>
              <label htmlFor="checkbox__hidden"> <li onClick={() => setAction("Deleted")}>Lời khuyên đã xóa</li></label>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        {Action()}
      </div>
    </div>

  );
}

export default App;
