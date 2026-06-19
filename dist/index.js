"use strict";var E=function(f,v){return function(){try{return v||f((v={exports:{}}).exports,v),v.exports}catch(n){throw (v=0, n)}};};var p=E(function(M,V){
var L=require('@stdlib/ndarray-base-assert-is-row-major/dist'),x=require('@stdlib/blas-ext-base-sfill/dist').ndarray;function z(f,v,n,u,w,c,a,g,i,o){var m,b,e,h,r,q,l,s;if(L([g,i])){if(e=n,h=v,m=i,b=g-e*i,f>0){for(r=o,q=c,s=0;s<h;s++){for(a[r]=1,r+=m,l=1;l<e;l++)a[r]=a[r-m]*u[q],r+=m;q+=w,r+=b}return a}for(r=o+(h-1)*g+(e-1)*i,q=c+(h-1)*w,s=h-1;s>=0;s--){for(a[r]=1,r-=m,l=1;l<e;l++)a[r]=a[r+m]*u[q],r-=m;q-=w,r-=b}return a}if(e=v,h=n,m=g,b=i-e*g,f>0){for(x(e,1,a,g,o),r=o+i,s=1;s<h;s++){for(q=c,l=0;l<e;l++)a[r]=a[r-i]*u[q],q+=w,r+=m;r+=b}return a}for(x(e,1,a,g,o+(h-1)*i),r=o+(h-2)*i+(e-1)*g,s=h-2;s>=0;s--){for(q=c+(e-1)*w,l=e-1;l>=0;l--)a[r]=a[r+i]*u[q],q-=w,r-=m;r-=b}return a}V.exports=z
});var t=E(function(N,j){
var A=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),B=require('@stdlib/blas-base-assert-is-layout/dist'),D=require('@stdlib/strided-base-stride2offset/dist'),G=require('@stdlib/math-base-special-fast-max/dist'),R=require('@stdlib/error-tools-fmtprodmsg/dist'),H=p();function I(f,v,n,u,w,c,a,g){var i,o,m,b,e;if(!B(f))throw new TypeError(R('2ifFx',f));if(n<0)throw new RangeError(R('2ifFz',n));if(u<0)throw new RangeError(R('2ifGH',u));if(i=A(f),i?e=n:e=u,g<G(1,e))throw new RangeError(R('2ifGM',e,g));return n===0||u===0?a:(b=D(n,c),i?(o=1,m=g):(o=g,m=1),H(v,n,u,w,c,b,a,o,m,0))}j.exports=I
});var d=E(function(X,T){
var S=require('@stdlib/error-tools-fmtprodmsg/dist'),J=p();function K(f,v,n,u,w,c,a,g,i,o){if(v<0)throw new RangeError(S('2ifGE',v));if(n<0)throw new RangeError(S('2ifFz',n));return v===0||n===0?a:J(f,v,n,u,w,c,a,g,i,o)}T.exports=K
});var k=E(function(O,_){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=t(),Q=d();P(F,"ndarray",Q);_.exports=F
});var U=require("path").join,W=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=k(),y,C=W(U(__dirname,"./native.js"));Y(C)?y=Z:y=C;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
