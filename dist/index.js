"use strict";var E=function(f,v){return function(){return v||f((v={exports:{}}).exports,v),v.exports}};var p=E(function(M,V){
var L=require('@stdlib/ndarray-base-assert-is-row-major/dist'),x=require('@stdlib/blas-ext-base-sfill/dist').ndarray;function z(f,v,g,u,w,c,a,i,n,o){var m,b,e,h,r,q,l,s;if(L([i,n])){if(e=g,h=v,m=n,b=i-e*n,f>0){for(r=o,q=c,s=0;s<h;s++){for(a[r]=1,r+=m,l=1;l<e;l++)a[r]=a[r-m]*u[q],r+=m;q+=w,r+=b}return a}for(r=o+(h-1)*i+(e-1)*n,q=c+(h-1)*w,s=h-1;s>=0;s--){for(a[r]=1,r-=m,l=1;l<e;l++)a[r]=a[r+m]*u[q],r-=m;q-=w,r-=b}return a}if(e=v,h=g,m=i,b=n-e*i,f>0){for(x(e,1,a,i,o),r=o+n,s=1;s<h;s++){for(q=c,l=0;l<e;l++)a[r]=a[r-n]*u[q],q+=w,r+=m;r+=b}return a}for(x(e,1,a,i,o+(h-1)*n),r=o+(h-2)*n+(e-1)*i,s=h-2;s>=0;s--){for(q=c+(e-1)*w,l=e-1;l>=0;l--)a[r]=a[r+n]*u[q],q-=w,r-=m;r-=b}return a}V.exports=z
});var t=E(function(N,j){
var A=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),B=require('@stdlib/blas-base-assert-is-layout/dist'),D=require('@stdlib/strided-base-stride2offset/dist'),G=require('@stdlib/math-base-special-fast-max/dist'),R=require('@stdlib/error-tools-fmtprodmsg/dist'),H=p();function I(f,v,g,u,w,c,a,i){var n,o,m,b,e;if(!B(f))throw new TypeError(R('nullFx',f));if(g<0)throw new RangeError(R('nullFz',g));if(u<0)throw new RangeError(R('nullGH',u));if(n=A(f),n?e=g:e=u,i<G(1,e))throw new RangeError(R('nullGM',e,i));return g===0||u===0?a:(b=D(g,c),n?(o=1,m=i):(o=i,m=1),H(v,g,u,w,c,b,a,o,m,0))}j.exports=I
});var d=E(function(X,T){
var S=require('@stdlib/error-tools-fmtprodmsg/dist'),J=p();function K(f,v,g,u,w,c,a,i,n,o){if(v<0)throw new RangeError(S('nullGE',v));if(g<0)throw new RangeError(S('nullFz',g));return v===0||g===0?a:J(f,v,g,u,w,c,a,i,n,o)}T.exports=K
});var k=E(function(O,_){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=t(),Q=d();P(F,"ndarray",Q);_.exports=F
});var U=require("path").join,W=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=k(),y,C=W(U(__dirname,"./native.js"));Y(C)?y=Z:y=C;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
