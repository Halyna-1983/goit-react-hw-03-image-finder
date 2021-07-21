// При клике по элементу галереи должно открываться модальное окно с темным оверлеем и 
// отображаться большая версия изображения. Модальное окно должно закрываться по нажатию 
// клавиши ESC или по клику на оверлее.

// Внешний вид похож на функционал этого VanillaJS-плагина, только вместо белого модального 
// окна рендерится изображение (в примере нажми Run). Анимацию делать не нужно!

import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
   };

   handleKeyDown = e => {
    if(e.code === 'Escape') {
        this.props.onClose();
        }
   };

   handleBackdropClick = event => {
       if(event.currentTarget === event.target) {
           this.props.onClose();
       };
   };

render() {
    const {url, alt} = this.props
    return createPortal(
        <div className="Overlay" onClick={this.handleBackdropClick}>
            <div className="Modal">
                 <img src={url} alt={alt} />
             </div>
        </div>, 
        modalRoot,
    )
};
};

export default Modal;