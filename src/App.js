import React, { useEffect, useState } from 'react';
import './App.css';
import SideMenu from './components/SideMenu';
import MainView from './components/MainView';
import ProductGuide from './components/ProductGuide';
import Feedback from './components/Feedback';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import getTokenMappings, { getProducts } from './contents/data';

function App(props) {
  const [mode, setMode] = useState("normal");
  const [previousMode, setPreviousMode] = useState("normal");
  const productStore = getProducts();
  const aliasMappings = getTokenMappings();
  const [activeProducts, setActiveProducts] = useState(productStore);
  const [searchTags, setSearchTags] = useState([]);
  const [currentBOM, setCurrentBOM] = useState([]);
  const [activeTags, setActiveTags] = useState([]);


  function openGuide(){
    setPreviousMode(mode);
    setMode("guide");
  }

  function closeGuide(){
    setMode(previousMode);
    setPreviousMode("guide");
  }

  function openFeedback(){
    setPreviousMode(mode);
    setMode("feedback");
  }

  function closeFeedback(){
    setMode(previousMode);
    setPreviousMode("feedback");
  }

  // function removeTagByIndex(tagIndex){
  //   // const newList = this.state.activeTags.splice(tagIndex,1);
  //   // this.setState({
  //   //     activeTags: newList
  //   // })
  // }

  function addTag(tagName){
      if (activeTags.includes(tagName)){
          return;
      }else{
          let newTags = [...activeTags, tagName]
          setActiveTags(newTags);
          filterProductStore(newTags);
      }
  }

  function tagDisplayUpdate(tagList){
    setActiveTags(tagList);
    filterProductStore(tagList);
  }

  function getTags(){
      return activeTags;
  }

  function removeTagByName(tagName){
      const newList = [...activeTags].filter((value) => (value !== tagName));
      setActiveTags(newList);
      filterProductStore(newList);
  }

  function checkTag(tagName){
      return activeTags.includes(tagName);
  }

  function filterProductStore(newTags) {
      console.log(newTags);
      let currentProducts = [];
      if( newTags.length === 0){
        setActiveProducts(productStore);
      }else{
        productStore.forEach((product)=> {
          newTags.forEach((tag) => {
            if(Object.values(product).includes(tag)){
              currentProducts.push(product);
            }
          })
        });
        setActiveProducts(currentProducts);
      }
    }

  function addToBoM(product){
    let newBoM = [...currentBOM,product];
    setCurrentBOM(newBoM);
    alert("Product Added!")
  }

  return (
    <div>
        <div style={{"background-color":"black",
                     "padding-top":"10px",
                     "padding-bottom":"10px",
                     "padding-left":"30px",
                     "padding-right":"30px",
                     "width": "100%"}}>
          <div style={{"width":"14%", "float":"left"}}>
            <h1 style={{"color":"white", 'font-family': "sans-serif"}}>Corning</h1>
          </div>
          <div style={{
                      "background-color": "white",
                      "position": "absolute",
                      "left": "200px",
                      "float":"center",
                      "height": "60px",
                      "width": "3px",
                      "display":"block"}}>
                        <h1 style={{'color':"white"}}></h1>
                      </div>
          <div>
            <h3 style={{"color":"white"}}>P.O.E.T</h3>
            <h6 style={{"color":"white"}}>Product Online Expert Tool</h6>
          </div>
        </div>
        <div style={{width: "100%","outline":"5px black"}}>
          <Modal show={(mode == "guide")} centered>
            <ProductGuide currentMode={mode} closeFunction={closeGuide}/>
          </Modal>
          <Modal show={(mode == "feedback")}>
            <Feedback currentMode={mode} closeFunction={closeFeedback} />
          </Modal>
          <div style={{"display":"grid", "grid-template-columns": "1fr 8fr", "gridGap":"0px"}}>
            <div style={{float: "left", "border":"3px solid black", "margin": "5px"}}>
                <SideMenu openGuideFunction={openGuide}
                          mappings={aliasMappings}
                          activeTags={activeTags}
                          tagUpdateFunction={tagDisplayUpdate}
                          removeTagByNameFunction={removeTagByName}
                          addTagFunction={addTag}/>
            </div>
            <div style={{width: "80%", float: "right"}}>
                <MainView activeProducts={activeProducts} currentBoM={currentBOM} addToBoMFunction={addToBoM}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App;