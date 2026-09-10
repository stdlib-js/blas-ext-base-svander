"use strict";var E=function(h,v){return function(){try{return v||h((v={exports:{}}).exports,v),v.exports}catch(n){throw (v=0, n)}};};var p=E(function(M,V){
var L=require('@stdlib/ndarray-base-assert-is-row-major/dist'),x=require('@stdlib/blas-ext-base-sfill/dist').ndarray;function z(h,v,n,o,w,c,a,g,i,l){var m,b,e,u,r,q,s,f;if(L([g,i])){if(e=n,u=v,m=i,b=g-e*i,h>0){for(r=l,q=c,f=0;f<u;f++){for(a[r]=1,r+=m,s=1;s<e;s++)a[r]=a[r-m]*o[q],r+=m;q+=w,r+=b}return a}for(r=l+(u-1)*g+(e-1)*i,q=c+(u-1)*w,f=u-1;f>=0;f--){for(a[r]=1,r-=m,s=1;s<e;s++)a[r]=a[r+m]*o[q],r-=m;q-=w,r-=b}return a}if(e=v,u=n,m=g,b=i-e*g,h>0){for(x(e,1,a,g,l),r=l+i,f=1;f<u;f++){for(q=c,s=0;s<e;s++)a[r]=a[r-i]*o[q],q+=w,r+=m;r+=b}return a}for(x(e,1,a,g,l+(u-1)*i),r=l+(u-2)*i+(e-1)*g,f=u-2;f>=0;f--){for(q=c+(e-1)*w,s=e-1;s>=0;s--)a[r]=a[r+i]*o[q],q-=w,r-=m;r-=b}return a}V.exports=z
});var t=E(function(N,j){
var A=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),B=require('@stdlib/blas-base-layout-resolve-str/dist'),D=require('@stdlib/strided-base-stride2offset/dist'),G=require('@stdlib/math-base-special-fast-max/dist'),R=require('@stdlib/error-tools-fmtprodmsg/dist'),H=p();function I(h,v,n,o,w,c,a,g){var i,l,m,b,e,u;if(u=B(h),u===null)throw new TypeError(R('2ifFx',h));if(n<0)throw new RangeError(R('2ifFz',n));if(o<0)throw new RangeError(R('2ifGH',o));if(i=A(u),i?e=n:e=o,g<G(1,e))throw new RangeError(R('2ifGM',e,g));return n===0||o===0?a:(b=D(n,c),i?(l=1,m=g):(l=g,m=1),H(v,n,o,w,c,b,a,l,m,0))}j.exports=I
});var T=E(function(X,S){
var d=require('@stdlib/error-tools-fmtprodmsg/dist'),J=p();function K(h,v,n,o,w,c,a,g,i,l){if(v<0)throw new RangeError(d('2ifGE',v));if(n<0)throw new RangeError(d('2ifFz',n));return v===0||n===0?a:J(h,v,n,o,w,c,a,g,i,l)}S.exports=K
});var k=E(function(O,_){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=t(),Q=T();P(F,"ndarray",Q);_.exports=F
});var U=require("path").join,W=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=k(),y,C=W(U(__dirname,"./native.js"));Y(C)?y=Z:y=C;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
