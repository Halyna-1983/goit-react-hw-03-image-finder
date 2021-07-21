(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),o=n.n(c),s=(n(11),n(10)),i=n(4),l=n(5),u=n(7),h=n(6),d=n(0),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query)},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.query,onChange:this.handleChange,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(a.Component),p=n(20),m=n.n(p),j=function(e){var t=e.searchQuery,n=void 0===t?"":t,a=e.currentPage,r=void 0===a?1:a,c=e.pageSize,o=void 0===c?12:c;return m.a.get("https://pixabay.com/api/?key=".concat("21313289-b7c06230d54dda1d4d871d681","&q=").concat(n,"&image_type=photo&pretty=true&page=").concat(r,"&per_page=").concat(o)).then((function(e){return e.data.hits}))},b=function(e){var t=e.url,n=e.alt,a=e.onClick;return Object(d.jsx)("img",{src:t,alt:n,onOclick:a,className:"ImageGalleryItem-image"})},f=function(e){var t=e.pictures,n=e.onClick;return Object(d.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(d.jsx)("li",{className:"ImageGalleryItem",children:Object(d.jsx)(b,{url:a,alt:c,onClick:function(){return n(r,c)}})},t)}))})},y=document.querySelector("#modal-root"),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("pressed escape"),e.props.onClose())},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.alt;return Object(c.createPortal)(Object(d.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{src:t,alt:n})})}),y)}}]),n}(a.Component),v=n(21),k=n.n(v),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:"",pictures:[],currentPage:1,error:null,showModal:!1,largeImg:"",largeImgTags:"",isLoading:!1,fetchLength:""},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,pictures:[],error:null})},e.fetchPictures=function(){var t=e.state,n=t.currentPage,a={searchQuery:t.searchQuery,currentPage:n};e.setState({isLoading:!0}),j(a).then((function(t){e.setState((function(e){return{pictures:[].concat(Object(s.a)(e.pictures),Object(s.a)(t)),currentPage:e.currentPage+1,fetchLength:t.length}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoading:!1})}))},e.onPicClick=function(t,n){e.setState({showModal:!0,largeImg:t,largeImgTags:n})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchPictures()}},{key:"render",value:function(){var e=this.state,t=(e.searchQuery,e.pictures),n=e.showModal,a=e.isLoading,r=e.error,c=e.fetchLength,o=e.largeImg,s=e.largeImgTags,i=t.length>0&&12===c&&!a;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(g,{onSubmit:this.onChangeQuery}),Object(d.jsx)(f,{pictures:t,onPicClick:this.onPicClick}),a&&Object(d.jsx)(k.a,{className:"Loader",color:"#3f51b5",type:"ThreeDots"}),i&&Object(d.jsx)("button",{type:"button",className:"Button",onClick:this.fetchPics,children:"Load more"}),r&&Object(d.jsx)("p",{style:{textAlign:"center"},children:"Something went wrong. Please try again."}),n&&Object(d.jsx)(O,{url:o,alt:s,onClose:this.toggleModal})]})}}]),n}(a.Component);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.165531f2.chunk.js.map