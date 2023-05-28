import{q as $,$ as m,a as c,b as x,U as f,c as p,d as u,n as b}from"./index-26946763.js";import{j as o}from"./jsx-runtime-6db5783a.js";var h=Object.defineProperty,y=Object.defineProperties,v=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,l=(a,r,t)=>r in a?h(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t,s=(a,r)=>{for(var t in r||(r={}))z.call(r,t)&&l(a,t,r[t]);if(i)for(var t of i(r))S.call(r,t)&&l(a,t,r[t]);return a},w=(a,r)=>y(a,v(r)),C={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D"},_={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},j={default:"Roboto, sans-serif",code:"monospace"},k={shorter:"125%",short:"140%",base:"160%",tall:"180%"},A={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},F={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},{styled:e,css:G,globalCss:J,keyframes:n,getCssText:K,theme:Q,createTheme:X,config:Z}=$({themeMap:w(s({},b),{height:"space",width:"space"}),theme:{colors:C,fontSizes:_,fonts:j,lineHeights:k,radii:A,space:F}}),O=e("div",{border:"1px solid $gray600"});O.displayName="Box";var d=e("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});d.displayName="Text";var P=e("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});P.displayName="Heading";var R=e(m,{borderRadius:"$full",display:"inline-block",width:"$12",height:"$12",overflow:"hidden"}),T=e(c,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),E=e(x,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}});function H(a){return o.jsxs(R,{children:[o.jsx(T,s({},a)),o.jsx(E,{delayMs:600,children:o.jsx(f,{})})]})}H.displayName="Avatar";var I=e("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",padding:"0 $4",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});I.displayName="Button";e("div",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"baseline","&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"}});e("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"regular"});e("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});var N=e("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});N.displayName="TextArea";e(p,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},"&:focus":{border:"2px solid $ignite300"}});var B=n({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),M=n({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}});e(u,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${B} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${M} 200ms ease-out`}});var V=e("div",{}),W=e(d,{color:"$gray200",defaultVariants:{size:"xs"}}),Y=e("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),D=e("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function U({size:a,currentStep:r=1}){return o.jsxs(V,{children:[o.jsxs(W,{children:["Passo ",r," de ",a]}),o.jsx(Y,{css:{"--steps-size":a},children:Array.from({length:a},(t,g)=>g+1).map(t=>o.jsx(D,{active:r>=t},t))})]})}U.displayName="MultiStep";export{H as A,O as B,P as H,U as M,d as T,N as a};
//# sourceMappingURL=index-85206d5b.js.map
