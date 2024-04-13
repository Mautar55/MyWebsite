import{G as Ow,D as Vw,R as Pw,W as Xw,A as _w,S as jw,a as zw,C as $w,E as Ad,V as Id,b as gd,P as Bd,M as Cd,c as Qd,d as Ed,e as id,f as td}from"./ArcatResources-Bj25eXyr.js";var ed=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},wa={exports:{}},M={};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var ca;function od(){if(ca)return M;ca=1;const Ig="150",Xg={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},zB={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nB=0,mB=1,yg=2,di=3,TA=0,ug=1,mg=2,YB=3,kB=0,cg=1,gg=2,qC=2,hI=0,RI=1,rg=2,Cg=3,HB=4,BB=5,UB=100,eg=101,sB=102,WI=103,Kg=104,GQ=200,Mg=201,aB=202,Gg=203,yB=204,fg=205,rB=206,LB=207,CB=208,b=209,Z=210,gA=0,EA=1,dA=2,bA=3,iI=4,DI=5,bI=6,PI=7,ng=0,vg=1,Fg=2,yA=0,MA=1,YA=2,dI=3,AI=4,TI=5,ZI=300,YI=301,hg=302,nA=303,Rg=304,Wg=306,$B=1e3,FI=1001,BQ=1002,Sg=1003,PB=1004,xQ=1004,wC=1005,CQ=1005,Lg=1006,fE=1007,Ut=1007,dC=1008,Ze=1008,yC=1009,yi=1010,ui=1011,Gi=1012,Lt=1013,xC=1014,uC=1015,uB=1016,Ri=1017,Jt=1018,nC=1020,FE=1021,bB=1023,Mi=1024,RQ=1025,AC=1026,vC=1027,vQ=1028,sC=1029,SE=1030,fi=1031,Fi=1033,QQ=33776,pE=33777,WQ=33778,NE=33779,mE=35840,TQ=35841,ZQ=35842,kE=35843,Si=36196,WC=37492,OQ=37496,UE=37808,VQ=37809,aC=37810,MQ=37811,fQ=37812,PQ=37813,pi=37814,XQ=37815,Ni=37816,Yg=37817,mi=37818,GC=37819,RC=37820,ki=37821,_Q=36492,Ui=36283,Li=36284,Ji=36285,l=36286,N=2200,H=2201,O=2202,X=2300,IA=2301,$=2302,W=2400,Y=2401,j=2402,z=2500,xA=2501,XA=0,pA=1,ZA=2,tI=3e3,gI=3001,jI=3200,kg=3201,_g=0,GB=1,TC="",wg="srgb",XB="srgb-linear",Hg="display-p3",$g=0,RB=7680,EQ=7681,oI=7682,zI=7683,Kt=34055,Ki=34056,Yt=5386,FQ=512,LE=513,JE=514,KE=515,Ht=516,bt=517,qt=518,Yi=519,SQ=35044,xt=35048,iQ=35040,jQ=35045,Hi=35049,YE=35041,tQ=35046,qB=35050,bi=35042,OI="100",Tg="300 es",zQ=1035;class IC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const B=this._listeners[A];if(B!==void 0){const C=B.indexOf(I);C!==-1&&B.splice(C,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const B=g.slice(0);for(let C=0,E=B.length;C<E;C++)B[C].call(this,A);A.target=null}}}const QB=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qi=1234567;const eQ=Math.PI/180,oQ=180/Math.PI;function MB(){const Q=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(QB[Q&255]+QB[Q>>8&255]+QB[Q>>16&255]+QB[Q>>24&255]+"-"+QB[A&255]+QB[A>>8&255]+"-"+QB[A>>16&15|64]+QB[A>>24&255]+"-"+QB[I&63|128]+QB[I>>8&255]+"-"+QB[I>>16&255]+QB[I>>24&255]+QB[g&255]+QB[g>>8&255]+QB[g>>16&255]+QB[g>>24&255]).toLowerCase()}function bg(Q,A,I){return Math.max(A,Math.min(I,Q))}function $I(Q,A){return(Q%A+A)%A}function MC(Q,A,I,g,B){return g+(Q-A)*(B-g)/(I-A)}function HE(Q,A,I){return Q!==A?(I-Q)/(A-Q):0}function gC(Q,A,I){return(1-I)*Q+I*A}function vt(Q,A,I,g){return gC(Q,A,1-Math.exp(-I*g))}function JI(Q,A=1){return A-Math.abs($I(Q,A*2)-A)}function G(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*(3-2*Q))}function Zg(Q,A,I){return Q<=A?0:Q>=I?1:(Q=(Q-A)/(I-A),Q*Q*Q*(Q*(Q*6-15)+10))}function bE(Q,A){return Q+Math.floor(Math.random()*(A-Q+1))}function Wt(Q,A){return Q+Math.random()*(A-Q)}function $Q(Q){return Q*(.5-Math.random())}function pQ(Q){Q!==void 0&&(qi=Q);let A=qi+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function nQ(Q){return Q*eQ}function qE(Q){return Q*oQ}function AE(Q){return(Q&Q-1)===0&&Q!==0}function xE(Q){return Math.pow(2,Math.ceil(Math.log(Q)/Math.LN2))}function vE(Q){return Math.pow(2,Math.floor(Math.log(Q)/Math.LN2))}function Tt(Q,A,I,g,B){const C=Math.cos,E=Math.sin,i=C(I/2),t=E(I/2),o=C((A+g)/2),s=E((A+g)/2),r=C((A-g)/2),a=E((A-g)/2),c=C((g-A)/2),d=E((g-A)/2);switch(B){case"XYX":Q.set(i*s,t*r,t*a,i*o);break;case"YZY":Q.set(t*a,i*s,t*r,i*o);break;case"ZXZ":Q.set(t*r,t*a,i*s,i*o);break;case"XZX":Q.set(i*s,t*d,t*c,i*o);break;case"YXY":Q.set(t*c,i*s,t*d,i*o);break;case"ZYZ":Q.set(t*d,t*c,i*s,i*o);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+B)}}function _B(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint16Array:return Q/65535;case Uint8Array:return Q/255;case Int16Array:return Math.max(Q/32767,-1);case Int8Array:return Math.max(Q/127,-1);default:throw new Error("Invalid component type.")}}function Ag(Q,A){switch(A.constructor){case Float32Array:return Q;case Uint16Array:return Math.round(Q*65535);case Uint8Array:return Math.round(Q*255);case Int16Array:return Math.round(Q*32767);case Int8Array:return Math.round(Q*127);default:throw new Error("Invalid component type.")}}const xi={DEG2RAD:eQ,RAD2DEG:oQ,generateUUID:MB,clamp:bg,euclideanModulo:$I,mapLinear:MC,inverseLerp:HE,lerp:gC,damp:vt,pingpong:JI,smoothstep:G,smootherstep:Zg,randInt:bE,randFloat:Wt,randFloatSpread:$Q,seededRandom:pQ,degToRad:nQ,radToDeg:qE,isPowerOfTwo:AE,ceilPowerOfTwo:xE,floorPowerOfTwo:vE,setQuaternionFromProperEuler:Tt,normalize:Ag,denormalize:_B};class fA{constructor(A=0,I=0){fA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6],this.y=B[1]*I+B[4]*g+B[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),B=Math.sin(I),C=this.x-A.x,E=this.y-A.y;return this.x=C*g-E*B+A.x,this.y=C*B+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qg{constructor(){Qg.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,I,g,B,C,E,i,t,o){const s=this.elements;return s[0]=A,s[1]=B,s[2]=i,s[3]=I,s[4]=C,s[5]=t,s[6]=g,s[7]=E,s[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,B=I.elements,C=this.elements,E=g[0],i=g[3],t=g[6],o=g[1],s=g[4],r=g[7],a=g[2],c=g[5],d=g[8],D=B[0],w=B[3],R=B[6],f=B[1],u=B[4],S=B[7],U=B[2],q=B[5],V=B[8];return C[0]=E*D+i*f+t*U,C[3]=E*w+i*u+t*q,C[6]=E*R+i*S+t*V,C[1]=o*D+s*f+r*U,C[4]=o*w+s*u+r*q,C[7]=o*R+s*S+r*V,C[2]=a*D+c*f+d*U,C[5]=a*w+c*u+d*q,C[8]=a*R+c*S+d*V,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],B=A[2],C=A[3],E=A[4],i=A[5],t=A[6],o=A[7],s=A[8];return I*E*s-I*i*o-g*C*s+g*i*t+B*C*o-B*E*t}invert(){const A=this.elements,I=A[0],g=A[1],B=A[2],C=A[3],E=A[4],i=A[5],t=A[6],o=A[7],s=A[8],r=s*E-i*o,a=i*t-s*C,c=o*C-E*t,d=I*r+g*a+B*c;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/d;return A[0]=r*D,A[1]=(B*o-s*g)*D,A[2]=(i*g-B*E)*D,A[3]=a*D,A[4]=(s*I-B*t)*D,A[5]=(B*C-i*I)*D,A[6]=c*D,A[7]=(g*t-o*I)*D,A[8]=(E*I-g*C)*D,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,B,C,E,i){const t=Math.cos(C),o=Math.sin(C);return this.set(g*t,g*o,-g*(t*E+o*i)+E+A,-B*o,B*t,-B*(-o*E+t*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(ZC.makeScale(A,I)),this}rotate(A){return this.premultiply(ZC.makeRotation(-A)),this}translate(A,I){return this.premultiply(ZC.makeTranslation(A,I)),this}makeTranslation(A,I){return this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let B=0;B<9;B++)if(I[B]!==g[B])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const ZC=new Qg;function Bg(Q){for(let A=Q.length-1;A>=0;--A)if(Q[A]>=65535)return!0;return!1}const fC={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function OC(Q,A){return new fC[Q](A)}function sQ(Q){return document.createElementNS("http://www.w3.org/1999/xhtml",Q)}class fB{constructor(A=0,I=0,g=0,B=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=B}static slerpFlat(A,I,g,B,C,E,i){let t=g[B+0],o=g[B+1],s=g[B+2],r=g[B+3];const a=C[E+0],c=C[E+1],d=C[E+2],D=C[E+3];if(i===0){A[I+0]=t,A[I+1]=o,A[I+2]=s,A[I+3]=r;return}if(i===1){A[I+0]=a,A[I+1]=c,A[I+2]=d,A[I+3]=D;return}if(r!==D||t!==a||o!==c||s!==d){let w=1-i;const R=t*a+o*c+s*d+r*D,f=R>=0?1:-1,u=1-R*R;if(u>Number.EPSILON){const U=Math.sqrt(u),q=Math.atan2(U,R*f);w=Math.sin(w*q)/U,i=Math.sin(i*q)/U}const S=i*f;if(t=t*w+a*S,o=o*w+c*S,s=s*w+d*S,r=r*w+D*S,w===1-i){const U=1/Math.sqrt(t*t+o*o+s*s+r*r);t*=U,o*=U,s*=U,r*=U}}A[I]=t,A[I+1]=o,A[I+2]=s,A[I+3]=r}static multiplyQuaternionsFlat(A,I,g,B,C,E){const i=g[B],t=g[B+1],o=g[B+2],s=g[B+3],r=C[E],a=C[E+1],c=C[E+2],d=C[E+3];return A[I]=i*d+s*r+t*c-o*a,A[I+1]=t*d+s*a+o*r-i*c,A[I+2]=o*d+s*c+i*a-t*r,A[I+3]=s*d-i*r-t*a-o*c,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,B){return this._x=A,this._y=I,this._z=g,this._w=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I){const g=A._x,B=A._y,C=A._z,E=A._order,i=Math.cos,t=Math.sin,o=i(g/2),s=i(B/2),r=i(C/2),a=t(g/2),c=t(B/2),d=t(C/2);switch(E){case"XYZ":this._x=a*s*r+o*c*d,this._y=o*c*r-a*s*d,this._z=o*s*d+a*c*r,this._w=o*s*r-a*c*d;break;case"YXZ":this._x=a*s*r+o*c*d,this._y=o*c*r-a*s*d,this._z=o*s*d-a*c*r,this._w=o*s*r+a*c*d;break;case"ZXY":this._x=a*s*r-o*c*d,this._y=o*c*r+a*s*d,this._z=o*s*d+a*c*r,this._w=o*s*r-a*c*d;break;case"ZYX":this._x=a*s*r-o*c*d,this._y=o*c*r+a*s*d,this._z=o*s*d-a*c*r,this._w=o*s*r+a*c*d;break;case"YZX":this._x=a*s*r+o*c*d,this._y=o*c*r+a*s*d,this._z=o*s*d-a*c*r,this._w=o*s*r-a*c*d;break;case"XZY":this._x=a*s*r-o*c*d,this._y=o*c*r-a*s*d,this._z=o*s*d+a*c*r,this._w=o*s*r+a*c*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,B=Math.sin(g);return this._x=A.x*B,this._y=A.y*B,this._z=A.z*B,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],B=I[4],C=I[8],E=I[1],i=I[5],t=I[9],o=I[2],s=I[6],r=I[10],a=g+i+r;if(a>0){const c=.5/Math.sqrt(a+1);this._w=.25/c,this._x=(s-t)*c,this._y=(C-o)*c,this._z=(E-B)*c}else if(g>i&&g>r){const c=2*Math.sqrt(1+g-i-r);this._w=(s-t)/c,this._x=.25*c,this._y=(B+E)/c,this._z=(C+o)/c}else if(i>r){const c=2*Math.sqrt(1+i-g-r);this._w=(C-o)/c,this._x=(B+E)/c,this._y=.25*c,this._z=(t+s)/c}else{const c=2*Math.sqrt(1+r-g-i);this._w=(E-B)/c,this._x=(C+o)/c,this._y=(t+s)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(bg(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const B=Math.min(1,I/g);return this.slerp(A,B),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,B=A._y,C=A._z,E=A._w,i=I._x,t=I._y,o=I._z,s=I._w;return this._x=g*s+E*i+B*o-C*t,this._y=B*s+E*t+C*i-g*o,this._z=C*s+E*o+g*t-B*i,this._w=E*s-g*i-B*t-C*o,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,B=this._y,C=this._z,E=this._w;let i=E*A._w+g*A._x+B*A._y+C*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=B,this._z=C,this;const t=1-i*i;if(t<=Number.EPSILON){const c=1-I;return this._w=c*E+I*this._w,this._x=c*g+I*this._x,this._y=c*B+I*this._y,this._z=c*C+I*this._z,this.normalize(),this._onChangeCallback(),this}const o=Math.sqrt(t),s=Math.atan2(o,i),r=Math.sin((1-I)*s)/o,a=Math.sin(I*s)/o;return this._w=E*r+this._w*a,this._x=g*r+this._x*a,this._y=B*r+this._y*a,this._z=C*r+this._z*a,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),B=2*Math.PI*Math.random(),C=2*Math.PI*Math.random();return this.set(I*Math.cos(B),g*Math.sin(C),g*Math.cos(C),I*Math.sin(B))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(A=0,I=0,g=0){K.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(vi.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(vi.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,B=this.z,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6]*B,this.y=C[1]*I+C[4]*g+C[7]*B,this.z=C[2]*I+C[5]*g+C[8]*B,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,B=this.z,C=A.elements,E=1/(C[3]*I+C[7]*g+C[11]*B+C[15]);return this.x=(C[0]*I+C[4]*g+C[8]*B+C[12])*E,this.y=(C[1]*I+C[5]*g+C[9]*B+C[13])*E,this.z=(C[2]*I+C[6]*g+C[10]*B+C[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,B=this.z,C=A.x,E=A.y,i=A.z,t=A.w,o=t*I+E*B-i*g,s=t*g+i*I-C*B,r=t*B+C*g-E*I,a=-C*I-E*g-i*B;return this.x=o*t+a*-C+s*-i-r*-E,this.y=s*t+a*-E+r*-C-o*-i,this.z=r*t+a*-i+o*-E-s*-C,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,B=this.z,C=A.elements;return this.x=C[0]*I+C[4]*g+C[8]*B,this.y=C[1]*I+C[5]*g+C[9]*B,this.z=C[2]*I+C[6]*g+C[10]*B,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,B=A.y,C=A.z,E=I.x,i=I.y,t=I.z;return this.x=B*t-C*i,this.y=C*E-g*t,this.z=g*i-B*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return WE.copy(this).projectOnVector(A),this.sub(WE)}reflect(A){return this.sub(WE.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(bg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,B=this.z-A.z;return I*I+g*g+B*B}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const B=Math.sin(I)*A;return this.x=B*Math.sin(g),this.y=Math.cos(I)*A,this.z=B*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),B=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=B,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const WE=new K,vi=new fB;function rC(Q){return Q<.04045?Q*.0773993808:Math.pow(Q*.9478672986+.0521327014,2.4)}function IE(Q){return Q<.0031308?Q*12.92:1.055*Math.pow(Q,.41666)-.055}const gE=new Qg().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),BE=new Qg().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),BC=new K;function CE(Q){return Q.convertSRGBToLinear(),BC.set(Q.r,Q.g,Q.b).applyMatrix3(BE),Q.setRGB(BC.x,BC.y,BC.z)}function VC(Q){return BC.set(Q.r,Q.g,Q.b).applyMatrix3(gE),Q.setRGB(BC.x,BC.y,BC.z).convertLinearToSRGB()}const Zt={[XB]:Q=>Q,[wg]:Q=>Q.convertSRGBToLinear(),[Hg]:CE},Ot={[XB]:Q=>Q,[wg]:Q=>Q.convertLinearToSRGB(),[Hg]:VC},hB={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(Q){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!Q},get workingColorSpace(){return XB},set workingColorSpace(Q){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(Q,A,I){if(this.enabled===!1||A===I||!A||!I)return Q;const g=Zt[A],B=Ot[I];if(g===void 0||B===void 0)throw new Error(`Unsupported color space conversion, "${A}" to "${I}".`);return B(g(Q))},fromWorkingColorSpace:function(Q,A){return this.convert(Q,this.workingColorSpace,A)},toWorkingColorSpace:function(Q,A){return this.convert(Q,A,this.workingColorSpace)}};let PC;class Wi{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{PC===void 0&&(PC=sQ("canvas")),PC.width=A.width,PC.height=A.height;const g=PC.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=PC}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=sQ("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const B=g.getImageData(0,0,A.width,A.height),C=B.data;for(let E=0;E<C.length;E++)C[E]=rC(C[E]/255)*255;return g.putImageData(B,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(rC(I[g]/255)*255):I[g]=rC(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class aQ{constructor(A=null){this.isSource=!0,this.uuid=MB(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},B=this.data;if(B!==null){let C;if(Array.isArray(B)){C=[];for(let E=0,i=B.length;E<i;E++)B[E].isDataTexture?C.push(Ti(B[E].image)):C.push(Ti(B[E]))}else C=Ti(B);g.url=C}return I||(A.images[this.uuid]=g),g}}function Ti(Q){return typeof HTMLImageElement<"u"&&Q instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Q instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Q instanceof ImageBitmap?Wi.getDataURL(Q):Q.data?{data:Array.from(Q.data),width:Q.width,height:Q.height,type:Q.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let FC=0;class Jg extends IC{constructor(A=Jg.DEFAULT_IMAGE,I=Jg.DEFAULT_MAPPING,g=FI,B=FI,C=Lg,E=dC,i=bB,t=yC,o=Jg.DEFAULT_ANISOTROPY,s=tI){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FC++}),this.uuid=MB(),this.name="",this.source=new aQ(A),this.mipmaps=[],this.mapping=I,this.wrapS=g,this.wrapT=B,this.magFilter=C,this.minFilter=E,this.anisotropy=o,this.format=i,this.internalFormat=null,this.type=t,this.offset=new fA(0,0),this.repeat=new fA(1,1),this.center=new fA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qg,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=s,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==ZI)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case $B:A.x=A.x-Math.floor(A.x);break;case FI:A.x=A.x<0?0:1;break;case BQ:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case $B:A.y=A.y-Math.floor(A.y);break;case FI:A.y=A.y<0?0:1;break;case BQ:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}Jg.DEFAULT_IMAGE=null,Jg.DEFAULT_MAPPING=ZI,Jg.DEFAULT_ANISOTROPY=1;class xI{constructor(A=0,I=0,g=0,B=1){xI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=B}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,B){return this.x=A,this.y=I,this.z=g,this.w=B,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,B=this.z,C=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*B+E[12]*C,this.y=E[1]*I+E[5]*g+E[9]*B+E[13]*C,this.z=E[2]*I+E[6]*g+E[10]*B+E[14]*C,this.w=E[3]*I+E[7]*g+E[11]*B+E[15]*C,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,B,C;const t=A.elements,o=t[0],s=t[4],r=t[8],a=t[1],c=t[5],d=t[9],D=t[2],w=t[6],R=t[10];if(Math.abs(s-a)<.01&&Math.abs(r-D)<.01&&Math.abs(d-w)<.01){if(Math.abs(s+a)<.1&&Math.abs(r+D)<.1&&Math.abs(d+w)<.1&&Math.abs(o+c+R-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const u=(o+1)/2,S=(c+1)/2,U=(R+1)/2,q=(s+a)/4,V=(r+D)/4,p=(d+w)/4;return u>S&&u>U?u<.01?(g=0,B=.707106781,C=.707106781):(g=Math.sqrt(u),B=q/g,C=V/g):S>U?S<.01?(g=.707106781,B=0,C=.707106781):(B=Math.sqrt(S),g=q/B,C=p/B):U<.01?(g=.707106781,B=.707106781,C=0):(C=Math.sqrt(U),g=V/C,B=p/C),this.set(g,B,C,I),this}let f=Math.sqrt((w-d)*(w-d)+(r-D)*(r-D)+(a-s)*(a-s));return Math.abs(f)<.001&&(f=1),this.x=(w-d)/f,this.y=(r-D)/f,this.z=(a-s)/f,this.w=Math.acos((o+c+R-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CC extends IC{constructor(A=1,I=1,g={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new xI(0,0,A,I),this.scissorTest=!1,this.viewport=new xI(0,0,A,I);const B={width:A,height:I,depth:1};this.texture=new Jg(B,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.internalFormat=g.internalFormat!==void 0?g.internalFormat:null,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:Lg,this.depthBuffer=g.depthBuffer!==void 0?g.depthBuffer:!0,this.stencilBuffer=g.stencilBuffer!==void 0?g.stencilBuffer:!1,this.depthTexture=g.depthTexture!==void 0?g.depthTexture:null,this.samples=g.samples!==void 0?g.samples:0}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new aQ(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class JB extends Jg{constructor(A=null,I=1,g=1,B=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:B},this.magFilter=Sg,this.minFilter=Sg,this.wrapR=FI,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vt extends CC{constructor(A=1,I=1,g=1){super(A,I),this.isWebGLArrayRenderTarget=!0,this.depth=g,this.texture=new JB(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class TE extends Jg{constructor(A=null,I=1,g=1,B=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:B},this.magFilter=Sg,this.minFilter=Sg,this.wrapR=FI,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ZE extends CC{constructor(A=1,I=1,g=1){super(A,I),this.isWebGL3DRenderTarget=!0,this.depth=g,this.texture=new TE(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class Zi extends CC{constructor(A=1,I=1,g=1,B={}){super(A,I,B),this.isWebGLMultipleRenderTargets=!0;const C=this.texture;this.texture=[];for(let E=0;E<g;E++)this.texture[E]=C.clone(),this.texture[E].isRenderTargetTexture=!0}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let B=0,C=this.texture.length;B<C;B++)this.texture[B].image.width=A,this.texture[B].image.height=I,this.texture[B].image.depth=g;this.dispose()}return this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I),this}copy(A){this.dispose(),this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.texture.length=0;for(let I=0,g=A.texture.length;I<g;I++)this.texture[I]=A.texture[I].clone(),this.texture[I].isRenderTargetTexture=!0;return this}}class SC{constructor(A=new K(1/0,1/0,1/0),I=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){let I=1/0,g=1/0,B=1/0,C=-1/0,E=-1/0,i=-1/0;for(let t=0,o=A.length;t<o;t+=3){const s=A[t],r=A[t+1],a=A[t+2];s<I&&(I=s),r<g&&(g=r),a<B&&(B=a),s>C&&(C=s),r>E&&(E=r),a>i&&(i=a)}return this.min.set(I,g,B),this.max.set(C,E,i),this}setFromBufferAttribute(A){let I=1/0,g=1/0,B=1/0,C=-1/0,E=-1/0,i=-1/0;for(let t=0,o=A.count;t<o;t++){const s=A.getX(t),r=A.getY(t),a=A.getZ(t);s<I&&(I=s),r<g&&(g=r),a<B&&(B=a),s>C&&(C=s),r>E&&(E=r),a>i&&(i=a)}return this.min.set(I,g,B),this.max.set(C,E,i),this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=EB.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0)if(I&&g.attributes!=null&&g.attributes.position!==void 0){const C=g.attributes.position;for(let E=0,i=C.count;E<i;E++)EB.fromBufferAttribute(C,E).applyMatrix4(A.matrixWorld),this.expandByPoint(EB)}else g.boundingBox===null&&g.computeBoundingBox(),OE.copy(g.boundingBox),OE.applyMatrix4(A.matrixWorld),this.union(OE);const B=A.children;for(let C=0,E=B.length;C<E;C++)this.expandByObject(B[C],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,EB),EB.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(QE),VE.subVectors(this.max,QE),pC.subVectors(A.a,QE),XC.subVectors(A.b,QE),NQ.subVectors(A.c,QE),_C.subVectors(XC,pC),NC.subVectors(NQ,XC),rQ.subVectors(pC,NQ);let I=[0,-_C.z,_C.y,0,-NC.z,NC.y,0,-rQ.z,rQ.y,_C.z,0,-_C.x,NC.z,0,-NC.x,rQ.z,0,-rQ.x,-_C.y,_C.x,0,-NC.y,NC.x,0,-rQ.y,rQ.x,0];return!Oi(I,pC,XC,NQ,VE)||(I=[1,0,0,0,1,0,0,0,1],!Oi(I,pC,XC,NQ,VE))?!1:(PE.crossVectors(_C,NC),I=[PE.x,PE.y,PE.z],Oi(I,pC,XC,NQ,VE))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,EB).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(EB).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(QC[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),QC[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),QC[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),QC[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),QC[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),QC[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),QC[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),QC[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(QC),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const QC=[new K,new K,new K,new K,new K,new K,new K,new K],EB=new K,OE=new SC,pC=new K,XC=new K,NQ=new K,_C=new K,NC=new K,rQ=new K,QE=new K,VE=new K,PE=new K,hQ=new K;function Oi(Q,A,I,g,B){for(let C=0,E=Q.length-3;C<=E;C+=3){hQ.fromArray(Q,C);const i=B.x*Math.abs(hQ.x)+B.y*Math.abs(hQ.y)+B.z*Math.abs(hQ.z),t=A.dot(hQ),o=I.dot(hQ),s=g.dot(hQ);if(Math.max(-Math.max(t,o,s),Math.min(t,o,s))>i)return!1}return!0}const Pt=new SC,cQ=new K,Vi=new K;class mC{constructor(A=new K,I=-1){this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):Pt.setFromPoints(A).getCenter(g);let B=0;for(let C=0,E=A.length;C<E;C++)B=Math.max(B,g.distanceToSquared(A[C]));return this.radius=Math.sqrt(B),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;cQ.subVectors(A,this.center);const I=cQ.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),B=(g-this.radius)*.5;this.center.addScaledVector(cQ,B/g),this.radius+=B}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(Vi.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(cQ.copy(A.center).add(Vi)),this.expandByPoint(cQ.copy(A.center).sub(Vi))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xB=new K,mQ=new K,EE=new K,kC=new K,XE=new K,iE=new K,Pi=new K;class hC{constructor(A=new K,I=new K(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,xB)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=xB.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(xB.copy(this.origin).addScaledVector(this.direction,I),xB.distanceToSquared(A))}distanceSqToSegment(A,I,g,B){mQ.copy(A).add(I).multiplyScalar(.5),EE.copy(I).sub(A).normalize(),kC.copy(this.origin).sub(mQ);const C=A.distanceTo(I)*.5,E=-this.direction.dot(EE),i=kC.dot(this.direction),t=-kC.dot(EE),o=kC.lengthSq(),s=Math.abs(1-E*E);let r,a,c,d;if(s>0)if(r=E*t-i,a=E*i-t,d=C*s,r>=0)if(a>=-d)if(a<=d){const D=1/s;r*=D,a*=D,c=r*(r+E*a+2*i)+a*(E*r+a+2*t)+o}else a=C,r=Math.max(0,-(E*a+i)),c=-r*r+a*(a+2*t)+o;else a=-C,r=Math.max(0,-(E*a+i)),c=-r*r+a*(a+2*t)+o;else a<=-d?(r=Math.max(0,-(-E*C+i)),a=r>0?-C:Math.min(Math.max(-C,-t),C),c=-r*r+a*(a+2*t)+o):a<=d?(r=0,a=Math.min(Math.max(-C,-t),C),c=a*(a+2*t)+o):(r=Math.max(0,-(E*C+i)),a=r>0?C:Math.min(Math.max(-C,-t),C),c=-r*r+a*(a+2*t)+o);else a=E>0?-C:C,r=Math.max(0,-(E*a+i)),c=-r*r+a*(a+2*t)+o;return g&&g.copy(this.origin).addScaledVector(this.direction,r),B&&B.copy(mQ).addScaledVector(EE,a),c}intersectSphere(A,I){xB.subVectors(A.center,this.origin);const g=xB.dot(this.direction),B=xB.dot(xB)-g*g,C=A.radius*A.radius;if(B>C)return null;const E=Math.sqrt(C-B),i=g-E,t=g+E;return t<0?null:i<0?this.at(t,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,B,C,E,i,t;const o=1/this.direction.x,s=1/this.direction.y,r=1/this.direction.z,a=this.origin;return o>=0?(g=(A.min.x-a.x)*o,B=(A.max.x-a.x)*o):(g=(A.max.x-a.x)*o,B=(A.min.x-a.x)*o),s>=0?(C=(A.min.y-a.y)*s,E=(A.max.y-a.y)*s):(C=(A.max.y-a.y)*s,E=(A.min.y-a.y)*s),g>E||C>B||((C>g||isNaN(g))&&(g=C),(E<B||isNaN(B))&&(B=E),r>=0?(i=(A.min.z-a.z)*r,t=(A.max.z-a.z)*r):(i=(A.max.z-a.z)*r,t=(A.min.z-a.z)*r),g>t||i>B)||((i>g||g!==g)&&(g=i),(t<B||B!==B)&&(B=t),B<0)?null:this.at(g>=0?g:B,I)}intersectsBox(A){return this.intersectBox(A,xB)!==null}intersectTriangle(A,I,g,B,C){XE.subVectors(I,A),iE.subVectors(g,A),Pi.crossVectors(XE,iE);let E=this.direction.dot(Pi),i;if(E>0){if(B)return null;i=1}else if(E<0)i=-1,E=-E;else return null;kC.subVectors(this.origin,A);const t=i*this.direction.dot(iE.crossVectors(kC,iE));if(t<0)return null;const o=i*this.direction.dot(XE.cross(kC));if(o<0||t+o>E)return null;const s=-i*kC.dot(Pi);return s<0?null:this.at(s/E,C)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pI{constructor(){pI.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,I,g,B,C,E,i,t,o,s,r,a,c,d,D,w){const R=this.elements;return R[0]=A,R[4]=I,R[8]=g,R[12]=B,R[1]=C,R[5]=E,R[9]=i,R[13]=t,R[2]=o,R[6]=s,R[10]=r,R[14]=a,R[3]=c,R[7]=d,R[11]=D,R[15]=w,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pI().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,B=1/kQ.setFromMatrixColumn(A,0).length(),C=1/kQ.setFromMatrixColumn(A,1).length(),E=1/kQ.setFromMatrixColumn(A,2).length();return I[0]=g[0]*B,I[1]=g[1]*B,I[2]=g[2]*B,I[3]=0,I[4]=g[4]*C,I[5]=g[5]*C,I[6]=g[6]*C,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,B=A.y,C=A.z,E=Math.cos(g),i=Math.sin(g),t=Math.cos(B),o=Math.sin(B),s=Math.cos(C),r=Math.sin(C);if(A.order==="XYZ"){const a=E*s,c=E*r,d=i*s,D=i*r;I[0]=t*s,I[4]=-t*r,I[8]=o,I[1]=c+d*o,I[5]=a-D*o,I[9]=-i*t,I[2]=D-a*o,I[6]=d+c*o,I[10]=E*t}else if(A.order==="YXZ"){const a=t*s,c=t*r,d=o*s,D=o*r;I[0]=a+D*i,I[4]=d*i-c,I[8]=E*o,I[1]=E*r,I[5]=E*s,I[9]=-i,I[2]=c*i-d,I[6]=D+a*i,I[10]=E*t}else if(A.order==="ZXY"){const a=t*s,c=t*r,d=o*s,D=o*r;I[0]=a-D*i,I[4]=-E*r,I[8]=d+c*i,I[1]=c+d*i,I[5]=E*s,I[9]=D-a*i,I[2]=-E*o,I[6]=i,I[10]=E*t}else if(A.order==="ZYX"){const a=E*s,c=E*r,d=i*s,D=i*r;I[0]=t*s,I[4]=d*o-c,I[8]=a*o+D,I[1]=t*r,I[5]=D*o+a,I[9]=c*o-d,I[2]=-o,I[6]=i*t,I[10]=E*t}else if(A.order==="YZX"){const a=E*t,c=E*o,d=i*t,D=i*o;I[0]=t*s,I[4]=D-a*r,I[8]=d*r+c,I[1]=r,I[5]=E*s,I[9]=-i*s,I[2]=-o*s,I[6]=c*r+d,I[10]=a-D*r}else if(A.order==="XZY"){const a=E*t,c=E*o,d=i*t,D=i*o;I[0]=t*s,I[4]=-r,I[8]=o*s,I[1]=a*r+D,I[5]=E*s,I[9]=c*r-d,I[2]=d*r-c,I[6]=i*s,I[10]=D*r+a}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(UC,A,Xt)}lookAt(A,I,g){const B=this.elements;return Og.subVectors(A,I),Og.lengthSq()===0&&(Og.z=1),Og.normalize(),LC.crossVectors(g,Og),LC.lengthSq()===0&&(Math.abs(g.z)===1?Og.x+=1e-4:Og.z+=1e-4,Og.normalize(),LC.crossVectors(g,Og)),LC.normalize(),EC.crossVectors(Og,LC),B[0]=LC.x,B[4]=EC.x,B[8]=Og.x,B[1]=LC.y,B[5]=EC.y,B[9]=Og.y,B[2]=LC.z,B[6]=EC.z,B[10]=Og.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,B=I.elements,C=this.elements,E=g[0],i=g[4],t=g[8],o=g[12],s=g[1],r=g[5],a=g[9],c=g[13],d=g[2],D=g[6],w=g[10],R=g[14],f=g[3],u=g[7],S=g[11],U=g[15],q=B[0],V=B[4],p=B[8],L=B[12],P=B[1],oA=B[5],GA=B[9],tA=B[13],CA=B[2],rA=B[6],NA=B[10],vA=B[14],uA=B[3],mA=B[7],qA=B[11],CI=B[15];return C[0]=E*q+i*P+t*CA+o*uA,C[4]=E*V+i*oA+t*rA+o*mA,C[8]=E*p+i*GA+t*NA+o*qA,C[12]=E*L+i*tA+t*vA+o*CI,C[1]=s*q+r*P+a*CA+c*uA,C[5]=s*V+r*oA+a*rA+c*mA,C[9]=s*p+r*GA+a*NA+c*qA,C[13]=s*L+r*tA+a*vA+c*CI,C[2]=d*q+D*P+w*CA+R*uA,C[6]=d*V+D*oA+w*rA+R*mA,C[10]=d*p+D*GA+w*NA+R*qA,C[14]=d*L+D*tA+w*vA+R*CI,C[3]=f*q+u*P+S*CA+U*uA,C[7]=f*V+u*oA+S*rA+U*mA,C[11]=f*p+u*GA+S*NA+U*qA,C[15]=f*L+u*tA+S*vA+U*CI,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],B=A[8],C=A[12],E=A[1],i=A[5],t=A[9],o=A[13],s=A[2],r=A[6],a=A[10],c=A[14],d=A[3],D=A[7],w=A[11],R=A[15];return d*(+C*t*r-B*o*r-C*i*a+g*o*a+B*i*c-g*t*c)+D*(+I*t*c-I*o*a+C*E*a-B*E*c+B*o*s-C*t*s)+w*(+I*o*r-I*i*c-C*E*r+g*E*c+C*i*s-g*o*s)+R*(-B*i*s-I*t*r+I*i*a+B*E*r-g*E*a+g*t*s)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const B=this.elements;return A.isVector3?(B[12]=A.x,B[13]=A.y,B[14]=A.z):(B[12]=A,B[13]=I,B[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],B=A[2],C=A[3],E=A[4],i=A[5],t=A[6],o=A[7],s=A[8],r=A[9],a=A[10],c=A[11],d=A[12],D=A[13],w=A[14],R=A[15],f=r*w*o-D*a*o+D*t*c-i*w*c-r*t*R+i*a*R,u=d*a*o-s*w*o-d*t*c+E*w*c+s*t*R-E*a*R,S=s*D*o-d*r*o+d*i*c-E*D*c-s*i*R+E*r*R,U=d*r*t-s*D*t-d*i*a+E*D*a+s*i*w-E*r*w,q=I*f+g*u+B*S+C*U;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/q;return A[0]=f*V,A[1]=(D*a*C-r*w*C-D*B*c+g*w*c+r*B*R-g*a*R)*V,A[2]=(i*w*C-D*t*C+D*B*o-g*w*o-i*B*R+g*t*R)*V,A[3]=(r*t*C-i*a*C-r*B*o+g*a*o+i*B*c-g*t*c)*V,A[4]=u*V,A[5]=(s*w*C-d*a*C+d*B*c-I*w*c-s*B*R+I*a*R)*V,A[6]=(d*t*C-E*w*C-d*B*o+I*w*o+E*B*R-I*t*R)*V,A[7]=(E*a*C-s*t*C+s*B*o-I*a*o-E*B*c+I*t*c)*V,A[8]=S*V,A[9]=(d*r*C-s*D*C-d*g*c+I*D*c+s*g*R-I*r*R)*V,A[10]=(E*D*C-d*i*C+d*g*o-I*D*o-E*g*R+I*i*R)*V,A[11]=(s*i*C-E*r*C-s*g*o+I*r*o+E*g*c-I*i*c)*V,A[12]=U*V,A[13]=(s*D*B-d*r*B+d*g*a-I*D*a-s*g*w+I*r*w)*V,A[14]=(d*i*B-E*D*B-d*g*t+I*D*t+E*g*w-I*i*w)*V,A[15]=(E*r*B-s*i*B+s*g*t-I*r*t-E*g*a+I*i*a)*V,this}scale(A){const I=this.elements,g=A.x,B=A.y,C=A.z;return I[0]*=g,I[4]*=B,I[8]*=C,I[1]*=g,I[5]*=B,I[9]*=C,I[2]*=g,I[6]*=B,I[10]*=C,I[3]*=g,I[7]*=B,I[11]*=C,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],B=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,B))}makeTranslation(A,I,g){return this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),B=Math.sin(I),C=1-g,E=A.x,i=A.y,t=A.z,o=C*E,s=C*i;return this.set(o*E+g,o*i-B*t,o*t+B*i,0,o*i+B*t,s*i+g,s*t-B*E,0,o*t-B*i,s*t+B*E,C*t*t+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,B,C,E){return this.set(1,g,C,0,A,1,E,0,I,B,1,0,0,0,0,1),this}compose(A,I,g){const B=this.elements,C=I._x,E=I._y,i=I._z,t=I._w,o=C+C,s=E+E,r=i+i,a=C*o,c=C*s,d=C*r,D=E*s,w=E*r,R=i*r,f=t*o,u=t*s,S=t*r,U=g.x,q=g.y,V=g.z;return B[0]=(1-(D+R))*U,B[1]=(c+S)*U,B[2]=(d-u)*U,B[3]=0,B[4]=(c-S)*q,B[5]=(1-(a+R))*q,B[6]=(w+f)*q,B[7]=0,B[8]=(d+u)*V,B[9]=(w-f)*V,B[10]=(1-(a+D))*V,B[11]=0,B[12]=A.x,B[13]=A.y,B[14]=A.z,B[15]=1,this}decompose(A,I,g){const B=this.elements;let C=kQ.set(B[0],B[1],B[2]).length();const E=kQ.set(B[4],B[5],B[6]).length(),i=kQ.set(B[8],B[9],B[10]).length();this.determinant()<0&&(C=-C),A.x=B[12],A.y=B[13],A.z=B[14],FB.copy(this);const o=1/C,s=1/E,r=1/i;return FB.elements[0]*=o,FB.elements[1]*=o,FB.elements[2]*=o,FB.elements[4]*=s,FB.elements[5]*=s,FB.elements[6]*=s,FB.elements[8]*=r,FB.elements[9]*=r,FB.elements[10]*=r,I.setFromRotationMatrix(FB),g.x=C,g.y=E,g.z=i,this}makePerspective(A,I,g,B,C,E){const i=this.elements,t=2*C/(I-A),o=2*C/(g-B),s=(I+A)/(I-A),r=(g+B)/(g-B),a=-(E+C)/(E-C),c=-2*E*C/(E-C);return i[0]=t,i[4]=0,i[8]=s,i[12]=0,i[1]=0,i[5]=o,i[9]=r,i[13]=0,i[2]=0,i[6]=0,i[10]=a,i[14]=c,i[3]=0,i[7]=0,i[11]=-1,i[15]=0,this}makeOrthographic(A,I,g,B,C,E){const i=this.elements,t=1/(I-A),o=1/(g-B),s=1/(E-C),r=(I+A)*t,a=(g+B)*o,c=(E+C)*s;return i[0]=2*t,i[4]=0,i[8]=0,i[12]=-r,i[1]=0,i[5]=2*o,i[9]=0,i[13]=-a,i[2]=0,i[6]=0,i[10]=-2*s,i[14]=-c,i[3]=0,i[7]=0,i[11]=0,i[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let B=0;B<16;B++)if(I[B]!==g[B])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const kQ=new K,FB=new pI,UC=new K(0,0,0),Xt=new K(1,1,1),LC=new K,EC=new K,Og=new K,JC=new pI,Xi=new fB;class UQ{constructor(A=0,I=0,g=0,B=UQ.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=B}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,B=this._order){return this._x=A,this._y=I,this._z=g,this._order=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const B=A.elements,C=B[0],E=B[4],i=B[8],t=B[1],o=B[5],s=B[9],r=B[2],a=B[6],c=B[10];switch(I){case"XYZ":this._y=Math.asin(bg(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-s,c),this._z=Math.atan2(-E,C)):(this._x=Math.atan2(a,o),this._z=0);break;case"YXZ":this._x=Math.asin(-bg(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(i,c),this._z=Math.atan2(t,o)):(this._y=Math.atan2(-r,C),this._z=0);break;case"ZXY":this._x=Math.asin(bg(a,-1,1)),Math.abs(a)<.9999999?(this._y=Math.atan2(-r,c),this._z=Math.atan2(-E,o)):(this._y=0,this._z=Math.atan2(t,C));break;case"ZYX":this._y=Math.asin(-bg(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(a,c),this._z=Math.atan2(t,C)):(this._x=0,this._z=Math.atan2(-E,o));break;case"YZX":this._z=Math.asin(bg(t,-1,1)),Math.abs(t)<.9999999?(this._x=Math.atan2(-s,o),this._y=Math.atan2(-r,C)):(this._x=0,this._y=Math.atan2(i,c));break;case"XZY":this._z=Math.asin(-bg(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(a,o),this._y=Math.atan2(i,C)):(this._x=Math.atan2(-s,c),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return JC.makeRotationFromQuaternion(A),this.setFromRotationMatrix(JC,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return Xi.setFromEuler(this),this.setFromQuaternion(Xi,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}UQ.DEFAULT_ORDER="XYZ";class e{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let n=0;const h=new K,y=new fB,F=new pI,m=new K,v=new K,T=new K,BA=new fB,eA=new K(1,0,0),kA=new K(0,1,0),LA=new K(0,0,1),sA={type:"added"},JA={type:"removed"};class SA extends IC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n++}),this.uuid=MB(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=SA.DEFAULT_UP.clone();const A=new K,I=new UQ,g=new fB,B=new K(1,1,1);function C(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(C),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:B},modelViewMatrix:{value:new pI},normalMatrix:{value:new Qg}}),this.matrix=new pI,this.matrixWorld=new pI,this.matrixAutoUpdate=SA.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=SA.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new e,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return y.setFromAxisAngle(A,I),this.quaternion.multiply(y),this}rotateOnWorldAxis(A,I){return y.setFromAxisAngle(A,I),this.quaternion.premultiply(y),this}rotateX(A){return this.rotateOnAxis(eA,A)}rotateY(A){return this.rotateOnAxis(kA,A)}rotateZ(A){return this.rotateOnAxis(LA,A)}translateOnAxis(A,I){return h.copy(A).applyQuaternion(this.quaternion),this.position.add(h.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(eA,A)}translateY(A){return this.translateOnAxis(kA,A)}translateZ(A){return this.translateOnAxis(LA,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(F.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?m.copy(A):m.set(A,I,g);const B=this.parent;this.updateWorldMatrix(!0,!1),v.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?F.lookAt(v,m,this.up):F.lookAt(m,v,this.up),this.quaternion.setFromRotationMatrix(F),B&&(F.extractRotation(B.matrixWorld),y.setFromRotationMatrix(F),this.quaternion.premultiply(y.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(sA)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(JA)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const I=this.children[A];I.parent=null,I.dispatchEvent(JA)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),F.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),F.multiply(A.parent.matrixWorld)),A.applyMatrix4(F),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,B=this.children.length;g<B;g++){const E=this.children[g].getObjectByProperty(A,I);if(E!==void 0)return E}}getObjectsByProperty(A,I){let g=[];this[A]===I&&g.push(this);for(let B=0,C=this.children.length;B<C;B++){const E=this.children[B].getObjectsByProperty(A,I);E.length>0&&(g=g.concat(E))}return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(v,A,T),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(v,BA,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,B=I.length;g<B;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,B=I.length;g<B;g++){const C=I[g];(C.matrixWorldAutoUpdate===!0||A===!0)&&C.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const B=this.children;for(let C=0,E=B.length;C<E;C++){const i=B[C];i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const B={};B.uuid=this.uuid,B.type=this.type,this.name!==""&&(B.name=this.name),this.castShadow===!0&&(B.castShadow=!0),this.receiveShadow===!0&&(B.receiveShadow=!0),this.visible===!1&&(B.visible=!1),this.frustumCulled===!1&&(B.frustumCulled=!1),this.renderOrder!==0&&(B.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(B.userData=this.userData),B.layers=this.layers.mask,B.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(B.matrixAutoUpdate=!1),this.isInstancedMesh&&(B.type="InstancedMesh",B.count=this.count,B.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(B.instanceColor=this.instanceColor.toJSON()));function C(i,t){return i[t.uuid]===void 0&&(i[t.uuid]=t.toJSON(A)),t.uuid}if(this.isScene)this.background&&(this.background.isColor?B.background=this.background.toJSON():this.background.isTexture&&(B.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(B.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){B.geometry=C(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const t=i.shapes;if(Array.isArray(t))for(let o=0,s=t.length;o<s;o++){const r=t[o];C(A.shapes,r)}else C(A.shapes,t)}}if(this.isSkinnedMesh&&(B.bindMode=this.bindMode,B.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(C(A.skeletons,this.skeleton),B.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let t=0,o=this.material.length;t<o;t++)i.push(C(A.materials,this.material[t]));B.material=i}else B.material=C(A.materials,this.material);if(this.children.length>0){B.children=[];for(let i=0;i<this.children.length;i++)B.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){B.animations=[];for(let i=0;i<this.animations.length;i++){const t=this.animations[i];B.animations.push(C(A.animations,t))}}if(I){const i=E(A.geometries),t=E(A.materials),o=E(A.textures),s=E(A.images),r=E(A.shapes),a=E(A.skeletons),c=E(A.animations),d=E(A.nodes);i.length>0&&(g.geometries=i),t.length>0&&(g.materials=t),o.length>0&&(g.textures=o),s.length>0&&(g.images=s),r.length>0&&(g.shapes=r),a.length>0&&(g.skeletons=a),c.length>0&&(g.animations=c),d.length>0&&(g.nodes=d)}return g.object=B,g;function E(i){const t=[];for(const o in i){const s=i[o];delete s.metadata,t.push(s)}return t}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const B=A.children[g];this.add(B.clone())}return this}}SA.DEFAULT_UP=new K(0,1,0),SA.DEFAULT_MATRIX_AUTO_UPDATE=!0,SA.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const KI=new K,NI=new K,XI=new K,cA=new K,BI=new K,Dg=new K,lg=new K,iB=new K,Vg=new K,_i=new K;class SB{constructor(A=new K,I=new K,g=new K){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,B){B.subVectors(g,I),KI.subVectors(A,I),B.cross(KI);const C=B.lengthSq();return C>0?B.multiplyScalar(1/Math.sqrt(C)):B.set(0,0,0)}static getBarycoord(A,I,g,B,C){KI.subVectors(B,I),NI.subVectors(g,I),XI.subVectors(A,I);const E=KI.dot(KI),i=KI.dot(NI),t=KI.dot(XI),o=NI.dot(NI),s=NI.dot(XI),r=E*o-i*i;if(r===0)return C.set(-2,-1,-1);const a=1/r,c=(o*t-i*s)*a,d=(E*s-i*t)*a;return C.set(1-c-d,d,c)}static containsPoint(A,I,g,B){return this.getBarycoord(A,I,g,B,cA),cA.x>=0&&cA.y>=0&&cA.x+cA.y<=1}static getUV(A,I,g,B,C,E,i,t){return this.getBarycoord(A,I,g,B,cA),t.set(0,0),t.addScaledVector(C,cA.x),t.addScaledVector(E,cA.y),t.addScaledVector(i,cA.z),t}static isFrontFacing(A,I,g,B){return KI.subVectors(g,I),NI.subVectors(A,I),KI.cross(NI).dot(B)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,B){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[B]),this}setFromAttributeAndIndices(A,I,g,B){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,B),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return KI.subVectors(this.c,this.b),NI.subVectors(this.a,this.b),KI.cross(NI).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return SB.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return SB.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,g,B,C){return SB.getUV(A,this.a,this.b,this.c,I,g,B,C)}containsPoint(A){return SB.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return SB.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,B=this.b,C=this.c;let E,i;BI.subVectors(B,g),Dg.subVectors(C,g),iB.subVectors(A,g);const t=BI.dot(iB),o=Dg.dot(iB);if(t<=0&&o<=0)return I.copy(g);Vg.subVectors(A,B);const s=BI.dot(Vg),r=Dg.dot(Vg);if(s>=0&&r<=s)return I.copy(B);const a=t*r-s*o;if(a<=0&&t>=0&&s<=0)return E=t/(t-s),I.copy(g).addScaledVector(BI,E);_i.subVectors(A,C);const c=BI.dot(_i),d=Dg.dot(_i);if(d>=0&&c<=d)return I.copy(C);const D=c*o-t*d;if(D<=0&&o>=0&&d<=0)return i=o/(o-d),I.copy(g).addScaledVector(Dg,i);const w=s*d-c*r;if(w<=0&&r-s>=0&&c-d>=0)return lg.subVectors(C,B),i=(r-s)/(r-s+(c-d)),I.copy(B).addScaledVector(lg,i);const R=1/(w+D+a);return E=D*R,i=a*R,I.copy(g).addScaledVector(BI,E).addScaledVector(Dg,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let vB=0;class cB extends IC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vB++}),this.uuid=MB(),this.name="",this.type="Material",this.blending=RI,this.side=kB,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=yB,this.blendDst=fg,this.blendEquation=UB,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=bA,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yi,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=RB,this.stencilZFail=RB,this.stencilZPass=RB,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn("THREE.Material: '"+I+"' parameter is undefined.");continue}const B=this[I];if(B===void 0){console.warn("THREE."+this.type+": '"+I+"' is not a property of this material.");continue}B&&B.isColor?B.set(g):B&&B.isVector3&&g&&g.isVector3?B.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==RI&&(g.blending=this.blending),this.side!==kB&&(g.side=this.side),this.vertexColors&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=this.transparent),g.depthFunc=this.depthFunc,g.depthTest=this.depthTest,g.depthWrite=this.depthWrite,g.colorWrite=this.colorWrite,g.stencilWrite=this.stencilWrite,g.stencilWriteMask=this.stencilWriteMask,g.stencilFunc=this.stencilFunc,g.stencilRef=this.stencilRef,g.stencilFuncMask=this.stencilFuncMask,g.stencilFail=this.stencilFail,g.stencilZFail=this.stencilZFail,g.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(g.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(g.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(g.wireframe=this.wireframe),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=this.flatShading),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function B(C){const E=[];for(const i in C){const t=C[i];delete t.metadata,E.push(t)}return E}if(I){const C=B(A.textures),E=B(A.images);C.length>0&&(g.textures=C),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const B=I.length;g=new Array(B);for(let C=0;C!==B;++C)g[C]=I[C].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}const _E={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jB={h:0,s:0,l:0},_t={h:0,s:0,l:0};function Oe(Q,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?Q+(A-Q)*6*I:I<1/2?A:I<2/3?Q+(A-Q)*6*(2/3-I):Q}class II{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,I===void 0&&g===void 0?this.set(A):this.setRGB(A,I,g)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=wg){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,hB.toWorkingColorSpace(this,I),this}setRGB(A,I,g,B=hB.workingColorSpace){return this.r=A,this.g=I,this.b=g,hB.toWorkingColorSpace(this,B),this}setHSL(A,I,g,B=hB.workingColorSpace){if(A=$I(A,1),I=bg(I,0,1),g=bg(g,0,1),I===0)this.r=this.g=this.b=g;else{const C=g<=.5?g*(1+I):g+I-g*I,E=2*g-C;this.r=Oe(E,C,A+1/3),this.g=Oe(E,C,A),this.b=Oe(E,C,A-1/3)}return hB.toWorkingColorSpace(this,B),this}setStyle(A,I=wg){function g(C){C!==void 0&&parseFloat(C)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let B;if(B=/^(\w+)\(([^\)]*)\)/.exec(A)){let C;const E=B[1],i=B[2];switch(E){case"rgb":case"rgba":if(C=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(255,parseInt(C[1],10))/255,this.g=Math.min(255,parseInt(C[2],10))/255,this.b=Math.min(255,parseInt(C[3],10))/255,hB.toWorkingColorSpace(this,I),g(C[4]),this;if(C=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(100,parseInt(C[1],10))/100,this.g=Math.min(100,parseInt(C[2],10))/100,this.b=Math.min(100,parseInt(C[3],10))/100,hB.toWorkingColorSpace(this,I),g(C[4]),this;break;case"hsl":case"hsla":if(C=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)){const t=parseFloat(C[1])/360,o=parseFloat(C[2])/100,s=parseFloat(C[3])/100;return g(C[4]),this.setHSL(t,o,s,I)}break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(B=/^\#([A-Fa-f\d]+)$/.exec(A)){const C=B[1],E=C.length;if(E===3)return this.r=parseInt(C.charAt(0)+C.charAt(0),16)/255,this.g=parseInt(C.charAt(1)+C.charAt(1),16)/255,this.b=parseInt(C.charAt(2)+C.charAt(2),16)/255,hB.toWorkingColorSpace(this,I),this;if(E===6)return this.r=parseInt(C.charAt(0)+C.charAt(1),16)/255,this.g=parseInt(C.charAt(2)+C.charAt(3),16)/255,this.b=parseInt(C.charAt(4)+C.charAt(5),16)/255,hB.toWorkingColorSpace(this,I),this;console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=wg){const g=_E[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=rC(A.r),this.g=rC(A.g),this.b=rC(A.b),this}copyLinearToSRGB(A){return this.r=IE(A.r),this.g=IE(A.g),this.b=IE(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=wg){return hB.fromWorkingColorSpace(KB.copy(this),A),bg(KB.r*255,0,255)<<16^bg(KB.g*255,0,255)<<8^bg(KB.b*255,0,255)<<0}getHexString(A=wg){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=hB.workingColorSpace){hB.fromWorkingColorSpace(KB.copy(this),I);const g=KB.r,B=KB.g,C=KB.b,E=Math.max(g,B,C),i=Math.min(g,B,C);let t,o;const s=(i+E)/2;if(i===E)t=0,o=0;else{const r=E-i;switch(o=s<=.5?r/(E+i):r/(2-E-i),E){case g:t=(B-C)/r+(B<C?6:0);break;case B:t=(C-g)/r+2;break;case C:t=(g-B)/r+4;break}t/=6}return A.h=t,A.s=o,A.l=s,A}getRGB(A,I=hB.workingColorSpace){return hB.fromWorkingColorSpace(KB.copy(this),I),A.r=KB.r,A.g=KB.g,A.b=KB.b,A}getStyle(A=wg){hB.fromWorkingColorSpace(KB.copy(this),A);const I=KB.r,g=KB.g,B=KB.b;return A!==wg?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${B.toFixed(3)})`:`rgb(${I*255|0},${g*255|0},${B*255|0})`}offsetHSL(A,I,g){return this.getHSL(jB),jB.h+=A,jB.s+=I,jB.l+=g,this.setHSL(jB.h,jB.s,jB.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(jB),A.getHSL(_t);const g=gC(jB.h,_t.h,I),B=gC(jB.s,_t.s,I),C=gC(jB.l,_t.l,I);return this.setHSL(g,B,C),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const KB=new II;II.NAMES=_E;class LQ extends cB{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new II(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ng,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const AB=new K,jt=new fA;class pg{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=SQ,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let B=0,C=this.itemSize;B<C;B++)this.array[A+B]=I.array[g+B];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)jt.fromBufferAttribute(this,I),jt.applyMatrix3(A),this.setXY(I,jt.x,jt.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)AB.fromBufferAttribute(this,I),AB.applyMatrix3(A),this.setXYZ(I,AB.x,AB.y,AB.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)AB.fromBufferAttribute(this,I),AB.applyMatrix4(A),this.setXYZ(I,AB.x,AB.y,AB.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)AB.fromBufferAttribute(this,I),AB.applyNormalMatrix(A),this.setXYZ(I,AB.x,AB.y,AB.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)AB.fromBufferAttribute(this,I),AB.transformDirection(A),this.setXYZ(I,AB.x,AB.y,AB.z);return this}set(A,I=0){return this.array.set(A,I),this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=_B(I,this.array)),I}setX(A,I){return this.normalized&&(I=Ag(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=_B(I,this.array)),I}setY(A,I){return this.normalized&&(I=Ag(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=_B(I,this.array)),I}setZ(A,I){return this.normalized&&(I=Ag(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=_B(I,this.array)),I}setW(A,I){return this.normalized&&(I=Ag(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=Ag(I,this.array),g=Ag(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,B){return A*=this.itemSize,this.normalized&&(I=Ag(I,this.array),g=Ag(g,this.array),B=Ag(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=B,this}setXYZW(A,I,g,B,C){return A*=this.itemSize,this.normalized&&(I=Ag(I,this.array),g=Ag(g,this.array),B=Ag(B,this.array),C=Ag(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=B,this.array[A+3]=C,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==SQ&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ga extends pg{constructor(A,I,g){super(new Int8Array(A),I,g)}}class Ra extends pg{constructor(A,I,g){super(new Uint8Array(A),I,g)}}class Ma extends pg{constructor(A,I,g){super(new Uint8ClampedArray(A),I,g)}}class fa extends pg{constructor(A,I,g){super(new Int16Array(A),I,g)}}class Ve extends pg{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class Fa extends pg{constructor(A,I,g){super(new Int32Array(A),I,g)}}class Pe extends pg{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class Sa extends pg{constructor(A,I,g){super(new Uint16Array(A),I,g),this.isFloat16BufferAttribute=!0}}class sI extends pg{constructor(A,I,g){super(new Float32Array(A),I,g)}}class pa extends pg{constructor(A,I,g){super(new Float64Array(A),I,g)}}let Na=0;const cC=new pI,Xe=new SA,jE=new K,iC=new SC,ji=new SC,DB=new K;class vI extends IC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Na++}),this.uuid=MB(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Bg(A)?Pe:Ve)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const C=new Qg().getNormalMatrix(A);g.applyNormalMatrix(C),g.needsUpdate=!0}const B=this.attributes.tangent;return B!==void 0&&(B.transformDirection(A),B.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return cC.makeRotationFromQuaternion(A),this.applyMatrix4(cC),this}rotateX(A){return cC.makeRotationX(A),this.applyMatrix4(cC),this}rotateY(A){return cC.makeRotationY(A),this.applyMatrix4(cC),this}rotateZ(A){return cC.makeRotationZ(A),this.applyMatrix4(cC),this}translate(A,I,g){return cC.makeTranslation(A,I,g),this.applyMatrix4(cC),this}scale(A,I,g){return cC.makeScale(A,I,g),this.applyMatrix4(cC),this}lookAt(A){return Xe.lookAt(A),Xe.updateMatrix(),this.applyMatrix4(Xe.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jE).negate(),this.translate(jE.x,jE.y,jE.z),this}setFromPoints(A){const I=[];for(let g=0,B=A.length;g<B;g++){const C=A[g];I.push(C.x,C.y,C.z||0)}return this.setAttribute("position",new sI(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new SC);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,B=I.length;g<B;g++){const C=I[g];iC.setFromBufferAttribute(C),this.morphTargetsRelative?(DB.addVectors(this.boundingBox.min,iC.min),this.boundingBox.expandByPoint(DB),DB.addVectors(this.boundingBox.max,iC.max),this.boundingBox.expandByPoint(DB)):(this.boundingBox.expandByPoint(iC.min),this.boundingBox.expandByPoint(iC.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mC);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(A){const g=this.boundingSphere.center;if(iC.setFromBufferAttribute(A),I)for(let C=0,E=I.length;C<E;C++){const i=I[C];ji.setFromBufferAttribute(i),this.morphTargetsRelative?(DB.addVectors(iC.min,ji.min),iC.expandByPoint(DB),DB.addVectors(iC.max,ji.max),iC.expandByPoint(DB)):(iC.expandByPoint(ji.min),iC.expandByPoint(ji.max))}iC.getCenter(g);let B=0;for(let C=0,E=A.count;C<E;C++)DB.fromBufferAttribute(A,C),B=Math.max(B,g.distanceToSquared(DB));if(I)for(let C=0,E=I.length;C<E;C++){const i=I[C],t=this.morphTargetsRelative;for(let o=0,s=i.count;o<s;o++)DB.fromBufferAttribute(i,o),t&&(jE.fromBufferAttribute(A,o),DB.add(jE)),B=Math.max(B,g.distanceToSquared(DB))}this.boundingSphere.radius=Math.sqrt(B),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,B=I.position.array,C=I.normal.array,E=I.uv.array,i=B.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pg(new Float32Array(4*i),4));const t=this.getAttribute("tangent").array,o=[],s=[];for(let P=0;P<i;P++)o[P]=new K,s[P]=new K;const r=new K,a=new K,c=new K,d=new fA,D=new fA,w=new fA,R=new K,f=new K;function u(P,oA,GA){r.fromArray(B,P*3),a.fromArray(B,oA*3),c.fromArray(B,GA*3),d.fromArray(E,P*2),D.fromArray(E,oA*2),w.fromArray(E,GA*2),a.sub(r),c.sub(r),D.sub(d),w.sub(d);const tA=1/(D.x*w.y-w.x*D.y);isFinite(tA)&&(R.copy(a).multiplyScalar(w.y).addScaledVector(c,-D.y).multiplyScalar(tA),f.copy(c).multiplyScalar(D.x).addScaledVector(a,-w.x).multiplyScalar(tA),o[P].add(R),o[oA].add(R),o[GA].add(R),s[P].add(f),s[oA].add(f),s[GA].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:g.length}]);for(let P=0,oA=S.length;P<oA;++P){const GA=S[P],tA=GA.start,CA=GA.count;for(let rA=tA,NA=tA+CA;rA<NA;rA+=3)u(g[rA+0],g[rA+1],g[rA+2])}const U=new K,q=new K,V=new K,p=new K;function L(P){V.fromArray(C,P*3),p.copy(V);const oA=o[P];U.copy(oA),U.sub(V.multiplyScalar(V.dot(oA))).normalize(),q.crossVectors(p,oA);const tA=q.dot(s[P])<0?-1:1;t[P*4]=U.x,t[P*4+1]=U.y,t[P*4+2]=U.z,t[P*4+3]=tA}for(let P=0,oA=S.length;P<oA;++P){const GA=S[P],tA=GA.start,CA=GA.count;for(let rA=tA,NA=tA+CA;rA<NA;rA+=3)L(g[rA+0]),L(g[rA+1]),L(g[rA+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new pg(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let a=0,c=g.count;a<c;a++)g.setXYZ(a,0,0,0);const B=new K,C=new K,E=new K,i=new K,t=new K,o=new K,s=new K,r=new K;if(A)for(let a=0,c=A.count;a<c;a+=3){const d=A.getX(a+0),D=A.getX(a+1),w=A.getX(a+2);B.fromBufferAttribute(I,d),C.fromBufferAttribute(I,D),E.fromBufferAttribute(I,w),s.subVectors(E,C),r.subVectors(B,C),s.cross(r),i.fromBufferAttribute(g,d),t.fromBufferAttribute(g,D),o.fromBufferAttribute(g,w),i.add(s),t.add(s),o.add(s),g.setXYZ(d,i.x,i.y,i.z),g.setXYZ(D,t.x,t.y,t.z),g.setXYZ(w,o.x,o.y,o.z)}else for(let a=0,c=I.count;a<c;a+=3)B.fromBufferAttribute(I,a+0),C.fromBufferAttribute(I,a+1),E.fromBufferAttribute(I,a+2),s.subVectors(E,C),r.subVectors(B,C),s.cross(r),g.setXYZ(a+0,s.x,s.y,s.z),g.setXYZ(a+1,s.x,s.y,s.z),g.setXYZ(a+2,s.x,s.y,s.z);this.normalizeNormals(),g.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)DB.fromBufferAttribute(A,I),DB.normalize(),A.setXYZ(I,DB.x,DB.y,DB.z)}toNonIndexed(){function A(i,t){const o=i.array,s=i.itemSize,r=i.normalized,a=new o.constructor(t.length*s);let c=0,d=0;for(let D=0,w=t.length;D<w;D++){i.isInterleavedBufferAttribute?c=t[D]*i.data.stride+i.offset:c=t[D]*s;for(let R=0;R<s;R++)a[d++]=o[c++]}return new pg(a,s,r)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new vI,g=this.index.array,B=this.attributes;for(const i in B){const t=B[i],o=A(t,g);I.setAttribute(i,o)}const C=this.morphAttributes;for(const i in C){const t=[],o=C[i];for(let s=0,r=o.length;s<r;s++){const a=o[s],c=A(a,g);t.push(c)}I.morphAttributes[i]=t}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,t=E.length;i<t;i++){const o=E[i];I.addGroup(o.start,o.count,o.materialIndex)}return I}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const t=this.parameters;for(const o in t)t[o]!==void 0&&(A[o]=t[o]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const t in g){const o=g[t];A.data.attributes[t]=o.toJSON(A.data)}const B={};let C=!1;for(const t in this.morphAttributes){const o=this.morphAttributes[t],s=[];for(let r=0,a=o.length;r<a;r++){const c=o[r];s.push(c.toJSON(A.data))}s.length>0&&(B[t]=s,C=!0)}C&&(A.data.morphAttributes=B,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const B=A.attributes;for(const o in B){const s=B[o];this.setAttribute(o,s.clone(I))}const C=A.morphAttributes;for(const o in C){const s=[],r=C[o];for(let a=0,c=r.length;a<c;a++)s.push(r[a].clone(I));this.morphAttributes[o]=s}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let o=0,s=E.length;o<s;o++){const r=E[o];this.addGroup(r.start,r.count,r.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const t=A.boundingSphere;return t!==null&&(this.boundingSphere=t.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zo=new pI,jC=new hC,zt=new mC,$o=new K,zi=new K,$i=new K,At=new K,_e=new K,$t=new K,Ae=new fA,Ie=new fA,ge=new fA,je=new K,Be=new K;class pB extends SA{constructor(A=new vI,I=new LQ){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const B=I[g[0]];if(B!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,E=B.length;C<E;C++){const i=B[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=C}}}}getVertexPosition(A,I){const g=this.geometry,B=g.attributes.position,C=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(B,A);const i=this.morphTargetInfluences;if(C&&i){$t.set(0,0,0);for(let t=0,o=C.length;t<o;t++){const s=i[t],r=C[t];s!==0&&(_e.fromBufferAttribute(r,A),E?$t.addScaledVector(_e,s):$t.addScaledVector(_e.sub(I),s))}I.add($t)}return this.isSkinnedMesh&&this.boneTransform(A,I),I}raycast(A,I){const g=this.geometry,B=this.material,C=this.matrixWorld;if(B===void 0||(g.boundingSphere===null&&g.computeBoundingSphere(),zt.copy(g.boundingSphere),zt.applyMatrix4(C),jC.copy(A.ray).recast(A.near),zt.containsPoint(jC.origin)===!1&&(jC.intersectSphere(zt,$o)===null||jC.origin.distanceToSquared($o)>(A.far-A.near)**2))||(zo.copy(C).invert(),jC.copy(A.ray).applyMatrix4(zo),g.boundingBox!==null&&jC.intersectsBox(g.boundingBox)===!1))return;let E;const i=g.index,t=g.attributes.position,o=g.attributes.uv,s=g.attributes.uv2,r=g.groups,a=g.drawRange;if(i!==null)if(Array.isArray(B))for(let c=0,d=r.length;c<d;c++){const D=r[c],w=B[D.materialIndex],R=Math.max(D.start,a.start),f=Math.min(i.count,Math.min(D.start+D.count,a.start+a.count));for(let u=R,S=f;u<S;u+=3){const U=i.getX(u),q=i.getX(u+1),V=i.getX(u+2);E=Ce(this,w,A,jC,o,s,U,q,V),E&&(E.faceIndex=Math.floor(u/3),E.face.materialIndex=D.materialIndex,I.push(E))}}else{const c=Math.max(0,a.start),d=Math.min(i.count,a.start+a.count);for(let D=c,w=d;D<w;D+=3){const R=i.getX(D),f=i.getX(D+1),u=i.getX(D+2);E=Ce(this,B,A,jC,o,s,R,f,u),E&&(E.faceIndex=Math.floor(D/3),I.push(E))}}else if(t!==void 0)if(Array.isArray(B))for(let c=0,d=r.length;c<d;c++){const D=r[c],w=B[D.materialIndex],R=Math.max(D.start,a.start),f=Math.min(t.count,Math.min(D.start+D.count,a.start+a.count));for(let u=R,S=f;u<S;u+=3){const U=u,q=u+1,V=u+2;E=Ce(this,w,A,jC,o,s,U,q,V),E&&(E.faceIndex=Math.floor(u/3),E.face.materialIndex=D.materialIndex,I.push(E))}}else{const c=Math.max(0,a.start),d=Math.min(t.count,a.start+a.count);for(let D=c,w=d;D<w;D+=3){const R=D,f=D+1,u=D+2;E=Ce(this,B,A,jC,o,s,R,f,u),E&&(E.faceIndex=Math.floor(D/3),I.push(E))}}}}function ma(Q,A,I,g,B,C,E,i){let t;if(A.side===cg?t=g.intersectTriangle(E,C,B,!0,i):t=g.intersectTriangle(B,C,E,A.side===kB,i),t===null)return null;Be.copy(i),Be.applyMatrix4(Q.matrixWorld);const o=I.ray.origin.distanceTo(Be);return o<I.near||o>I.far?null:{distance:o,point:Be.clone(),object:Q}}function Ce(Q,A,I,g,B,C,E,i,t){Q.getVertexPosition(E,zi),Q.getVertexPosition(i,$i),Q.getVertexPosition(t,At);const o=ma(Q,A,I,g,zi,$i,At,je);if(o){B&&(Ae.fromBufferAttribute(B,E),Ie.fromBufferAttribute(B,i),ge.fromBufferAttribute(B,t),o.uv=SB.getUV(je,zi,$i,At,Ae,Ie,ge,new fA)),C&&(Ae.fromBufferAttribute(C,E),Ie.fromBufferAttribute(C,i),ge.fromBufferAttribute(C,t),o.uv2=SB.getUV(je,zi,$i,At,Ae,Ie,ge,new fA));const s={a:E,b:i,c:t,normal:new K,materialIndex:0};SB.getNormal(zi,$i,At,s.normal),o.face=s}return o}class JQ extends vI{constructor(A=1,I=1,g=1,B=1,C=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:B,heightSegments:C,depthSegments:E};const i=this;B=Math.floor(B),C=Math.floor(C),E=Math.floor(E);const t=[],o=[],s=[],r=[];let a=0,c=0;d("z","y","x",-1,-1,g,I,A,E,C,0),d("z","y","x",1,-1,g,I,-A,E,C,1),d("x","z","y",1,1,A,g,I,B,E,2),d("x","z","y",1,-1,A,g,-I,B,E,3),d("x","y","z",1,-1,A,I,g,B,C,4),d("x","y","z",-1,-1,A,I,-g,B,C,5),this.setIndex(t),this.setAttribute("position",new sI(o,3)),this.setAttribute("normal",new sI(s,3)),this.setAttribute("uv",new sI(r,2));function d(D,w,R,f,u,S,U,q,V,p,L){const P=S/V,oA=U/p,GA=S/2,tA=U/2,CA=q/2,rA=V+1,NA=p+1;let vA=0,uA=0;const mA=new K;for(let qA=0;qA<NA;qA++){const CI=qA*oA-tA;for(let aA=0;aA<rA;aA++){const KA=aA*P-GA;mA[D]=KA*f,mA[w]=CI*u,mA[R]=CA,o.push(mA.x,mA.y,mA.z),mA[D]=0,mA[w]=0,mA[R]=q>0?1:-1,s.push(mA.x,mA.y,mA.z),r.push(aA/V),r.push(1-qA/p),vA+=1}}for(let qA=0;qA<p;qA++)for(let CI=0;CI<V;CI++){const aA=a+CI+rA*qA,KA=a+CI+rA*(qA+1),_A=a+(CI+1)+rA*(qA+1),_=a+(CI+1)+rA*qA;t.push(aA,KA,_),t.push(KA,_A,_),uA+=6}i.addGroup(c,uA,L),c+=uA,a+=vA}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new JQ(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function zE(Q){const A={};for(const I in Q){A[I]={};for(const g in Q[I]){const B=Q[I][g];B&&(B.isColor||B.isMatrix3||B.isMatrix4||B.isVector2||B.isVector3||B.isVector4||B.isTexture||B.isQuaternion)?A[I][g]=B.clone():Array.isArray(B)?A[I][g]=B.slice():A[I][g]=B}}return A}function WB(Q){const A={};for(let I=0;I<Q.length;I++){const g=zE(Q[I]);for(const B in g)A[B]=g[B]}return A}function ka(Q){const A=[];for(let I=0;I<Q.length;I++)A.push(Q[I].clone());return A}function An(Q){return Q.getRenderTarget()===null&&Q.outputEncoding===gI?wg:XB}const In={clone:zE,merge:WB};var Ua=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,La=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zC extends cB{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ua,this.fragmentShader=La,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=zE(A.uniforms),this.uniformsGroups=ka(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const B in this.uniforms){const E=this.uniforms[B].value;E&&E.isTexture?I.uniforms[B]={type:"t",value:E.toJSON(A).uuid}:E&&E.isColor?I.uniforms[B]={type:"c",value:E.getHex()}:E&&E.isVector2?I.uniforms[B]={type:"v2",value:E.toArray()}:E&&E.isVector3?I.uniforms[B]={type:"v3",value:E.toArray()}:E&&E.isVector4?I.uniforms[B]={type:"v4",value:E.toArray()}:E&&E.isMatrix3?I.uniforms[B]={type:"m3",value:E.toArray()}:E&&E.isMatrix4?I.uniforms[B]={type:"m4",value:E.toArray()}:I.uniforms[B]={value:E}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader;const g={};for(const B in this.extensions)this.extensions[B]===!0&&(g[B]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class Qe extends SA{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pI,this.projectionMatrix=new pI,this.projectionMatrixInverse=new pI}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(-I[8],-I[9],-I[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class NB extends Qe{constructor(A=50,I=1,g=.1,B=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=B,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=oQ*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(eQ*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return oQ*2*Math.atan(Math.tan(eQ*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,g,B,C,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=B,this.view.width=C,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(eQ*.5*this.fov)/this.zoom,g=2*I,B=this.aspect*g,C=-.5*B;const E=this.view;if(this.view!==null&&this.view.enabled){const t=E.fullWidth,o=E.fullHeight;C+=E.offsetX*B/t,I-=E.offsetY*g/o,B*=E.width/t,g*=E.height/o}const i=this.filmOffset;i!==0&&(C+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(C,C+B,I,I-g,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const $E=-90,Ai=1;class gn extends SA{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g;const B=new NB($E,Ai,A,I);B.layers=this.layers,B.up.set(0,1,0),B.lookAt(1,0,0),this.add(B);const C=new NB($E,Ai,A,I);C.layers=this.layers,C.up.set(0,1,0),C.lookAt(-1,0,0),this.add(C);const E=new NB($E,Ai,A,I);E.layers=this.layers,E.up.set(0,0,-1),E.lookAt(0,1,0),this.add(E);const i=new NB($E,Ai,A,I);i.layers=this.layers,i.up.set(0,0,1),i.lookAt(0,-1,0),this.add(i);const t=new NB($E,Ai,A,I);t.layers=this.layers,t.up.set(0,1,0),t.lookAt(0,0,1),this.add(t);const o=new NB($E,Ai,A,I);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(0,0,-1),this.add(o)}update(A,I){this.parent===null&&this.updateMatrixWorld();const g=this.renderTarget,[B,C,E,i,t,o]=this.children,s=A.getRenderTarget(),r=A.toneMapping,a=A.xr.enabled;A.toneMapping=yA,A.xr.enabled=!1;const c=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0),A.render(I,B),A.setRenderTarget(g,1),A.render(I,C),A.setRenderTarget(g,2),A.render(I,E),A.setRenderTarget(g,3),A.render(I,i),A.setRenderTarget(g,4),A.render(I,t),g.texture.generateMipmaps=c,A.setRenderTarget(g,5),A.render(I,o),A.setRenderTarget(s),A.toneMapping=r,A.xr.enabled=a,g.texture.needsPMREMUpdate=!0}}class It extends Jg{constructor(A,I,g,B,C,E,i,t,o,s){A=A!==void 0?A:[],I=I!==void 0?I:YI,super(A,I,g,B,C,E,i,t,o,s),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Bn extends CC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},B=[g,g,g,g,g,g];this.texture=new It(B,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:Lg}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.encoding=I.encoding,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},B=new JQ(5,5,5),C=new zC({name:"CubemapFromEquirect",uniforms:zE(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:cg,blending:hI});C.uniforms.tEquirect.value=I;const E=new pB(B,C),i=I.minFilter;return I.minFilter===dC&&(I.minFilter=Lg),new gn(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,B){const C=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,B);A.setRenderTarget(C)}}const ze=new K,Ja=new K,Ka=new Qg;class KQ{constructor(A=new K(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,B){return this.normal.set(A,I,g),this.constant=B,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const B=ze.subVectors(g,I).cross(Ja.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(B,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(ze),B=this.normal.dot(g);if(B===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const C=-(A.start.dot(this.normal)+this.constant)/B;return C<0||C>1?null:I.copy(A.start).addScaledVector(g,C)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||Ka.getNormalMatrix(A),B=this.coplanarPoint(ze).applyMatrix4(A),C=this.normal.applyMatrix3(g).normalize();return this.constant=-B.dot(C),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new mC,Ee=new K;class ie{constructor(A=new KQ,I=new KQ,g=new KQ,B=new KQ,C=new KQ,E=new KQ){this.planes=[A,I,g,B,C,E]}set(A,I,g,B,C,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(B),i[4].copy(C),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A){const I=this.planes,g=A.elements,B=g[0],C=g[1],E=g[2],i=g[3],t=g[4],o=g[5],s=g[6],r=g[7],a=g[8],c=g[9],d=g[10],D=g[11],w=g[12],R=g[13],f=g[14],u=g[15];return I[0].setComponents(i-B,r-t,D-a,u-w).normalize(),I[1].setComponents(i+B,r+t,D+a,u+w).normalize(),I[2].setComponents(i+C,r+o,D+c,u+R).normalize(),I[3].setComponents(i-C,r-o,D-c,u-R).normalize(),I[4].setComponents(i-E,r-s,D-d,u-f).normalize(),I[5].setComponents(i+E,r+s,D+d,u+f).normalize(),this}intersectsObject(A){const I=A.geometry;return I.boundingSphere===null&&I.computeBoundingSphere(),Ii.copy(I.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(Ii)}intersectsSprite(A){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(A.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(A){const I=this.planes,g=A.center,B=-A.radius;for(let C=0;C<6;C++)if(I[C].distanceToPoint(g)<B)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const B=I[g];if(Ee.x=B.normal.x>0?A.max.x:A.min.x,Ee.y=B.normal.y>0?A.max.y:A.min.y,Ee.z=B.normal.z>0?A.max.z:A.min.z,B.distanceToPoint(Ee)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cn(){let Q=null,A=!1,I=null,g=null;function B(C,E){I(C,E),g=Q.requestAnimationFrame(B)}return{start:function(){A!==!0&&I!==null&&(g=Q.requestAnimationFrame(B),A=!0)},stop:function(){Q.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(C){I=C},setContext:function(C){Q=C}}}function Ya(Q,A){const I=A.isWebGL2,g=new WeakMap;function B(o,s){const r=o.array,a=o.usage,c=Q.createBuffer();Q.bindBuffer(s,c),Q.bufferData(s,r,a),o.onUploadCallback();let d;if(r instanceof Float32Array)d=Q.FLOAT;else if(r instanceof Uint16Array)if(o.isFloat16BufferAttribute)if(I)d=Q.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else d=Q.UNSIGNED_SHORT;else if(r instanceof Int16Array)d=Q.SHORT;else if(r instanceof Uint32Array)d=Q.UNSIGNED_INT;else if(r instanceof Int32Array)d=Q.INT;else if(r instanceof Int8Array)d=Q.BYTE;else if(r instanceof Uint8Array)d=Q.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)d=Q.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+r);return{buffer:c,type:d,bytesPerElement:r.BYTES_PER_ELEMENT,version:o.version}}function C(o,s,r){const a=s.array,c=s.updateRange;Q.bindBuffer(r,o),c.count===-1?Q.bufferSubData(r,0,a):(I?Q.bufferSubData(r,c.offset*a.BYTES_PER_ELEMENT,a,c.offset,c.count):Q.bufferSubData(r,c.offset*a.BYTES_PER_ELEMENT,a.subarray(c.offset,c.offset+c.count)),c.count=-1),s.onUploadCallback()}function E(o){return o.isInterleavedBufferAttribute&&(o=o.data),g.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const s=g.get(o);s&&(Q.deleteBuffer(s.buffer),g.delete(o))}function t(o,s){if(o.isGLBufferAttribute){const a=g.get(o);(!a||a.version<o.version)&&g.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const r=g.get(o);r===void 0?g.set(o,B(o,s)):r.version<o.version&&(C(r.buffer,o,s),r.version=o.version)}return{get:E,remove:i,update:t}}class gi extends vI{constructor(A=1,I=1,g=1,B=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:B};const C=A/2,E=I/2,i=Math.floor(g),t=Math.floor(B),o=i+1,s=t+1,r=A/i,a=I/t,c=[],d=[],D=[],w=[];for(let R=0;R<s;R++){const f=R*a-E;for(let u=0;u<o;u++){const S=u*r-C;d.push(S,-f,0),D.push(0,0,1),w.push(u/i),w.push(1-R/t)}}for(let R=0;R<t;R++)for(let f=0;f<i;f++){const u=f+o*R,S=f+o*(R+1),U=f+1+o*(R+1),q=f+1+o*R;c.push(u,S,q),c.push(S,U,q)}this.setIndex(c),this.setAttribute("position",new sI(d,3)),this.setAttribute("normal",new sI(D,3)),this.setAttribute("uv",new sI(w,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new gi(A.width,A.height,A.widthSegments,A.heightSegments)}}var Ha=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ba=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qa=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xa=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,va=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wa=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ta="vec3 transformed = vec3( position );",Za=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Oa=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Va=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pa=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xa=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_a=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ja=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,za=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$a=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ar=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ir=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gr=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Br=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Cr=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qr=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Er=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ir=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,tr=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,er=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,or="gl_FragColor = linearToOutputTexel( gl_FragColor );",nr=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sr=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ar=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rr=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hr=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cr=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dr=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lr=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wr=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dr=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yr=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ur=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gr=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rr=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mr=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fr=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fr=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Sr=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pr=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nr=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mr=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kr=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ur=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lr=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jr=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kr=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Yr=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hr=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,br=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qr=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xr=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vr=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wr=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tr=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zr=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Or=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vr=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pr=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Xr=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_r=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jr=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,zr=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$r=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ih=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Bh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ch=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Qh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Eh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ih=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,th=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,eh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ah=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ch=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,yh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Sh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ph=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Nh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,mh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,kh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Uh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Lh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Jh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qI={alphamap_fragment:Ha,alphamap_pars_fragment:ba,alphatest_fragment:qa,alphatest_pars_fragment:xa,aomap_fragment:va,aomap_pars_fragment:Wa,begin_vertex:Ta,beginnormal_vertex:Za,bsdfs:Oa,iridescence_fragment:Va,bumpmap_pars_fragment:Pa,clipping_planes_fragment:Xa,clipping_planes_pars_fragment:_a,clipping_planes_pars_vertex:ja,clipping_planes_vertex:za,color_fragment:$a,color_pars_fragment:Ar,color_pars_vertex:Ir,color_vertex:gr,common:Br,cube_uv_reflection_fragment:Cr,defaultnormal_vertex:Qr,displacementmap_pars_vertex:Er,displacementmap_vertex:ir,emissivemap_fragment:tr,emissivemap_pars_fragment:er,encodings_fragment:or,encodings_pars_fragment:nr,envmap_fragment:sr,envmap_common_pars_fragment:ar,envmap_pars_fragment:rr,envmap_pars_vertex:hr,envmap_physical_pars_fragment:Fr,envmap_vertex:cr,fog_vertex:Dr,fog_pars_vertex:lr,fog_fragment:wr,fog_pars_fragment:dr,gradientmap_pars_fragment:yr,lightmap_fragment:ur,lightmap_pars_fragment:Gr,lights_lambert_fragment:Rr,lights_lambert_pars_fragment:Mr,lights_pars_begin:fr,lights_toon_fragment:Sr,lights_toon_pars_fragment:pr,lights_phong_fragment:Nr,lights_phong_pars_fragment:mr,lights_physical_fragment:kr,lights_physical_pars_fragment:Ur,lights_fragment_begin:Lr,lights_fragment_maps:Jr,lights_fragment_end:Kr,logdepthbuf_fragment:Yr,logdepthbuf_pars_fragment:Hr,logdepthbuf_pars_vertex:br,logdepthbuf_vertex:qr,map_fragment:xr,map_pars_fragment:vr,map_particle_fragment:Wr,map_particle_pars_fragment:Tr,metalnessmap_fragment:Zr,metalnessmap_pars_fragment:Or,morphcolor_vertex:Vr,morphnormal_vertex:Pr,morphtarget_pars_vertex:Xr,morphtarget_vertex:_r,normal_fragment_begin:jr,normal_fragment_maps:zr,normal_pars_fragment:$r,normal_pars_vertex:Ah,normal_vertex:Ih,normalmap_pars_fragment:gh,clearcoat_normal_fragment_begin:Bh,clearcoat_normal_fragment_maps:Ch,clearcoat_pars_fragment:Qh,iridescence_pars_fragment:Eh,output_fragment:ih,packing:th,premultiplied_alpha_fragment:eh,project_vertex:oh,dithering_fragment:nh,dithering_pars_fragment:sh,roughnessmap_fragment:ah,roughnessmap_pars_fragment:rh,shadowmap_pars_fragment:hh,shadowmap_pars_vertex:ch,shadowmap_vertex:Dh,shadowmask_pars_fragment:lh,skinbase_vertex:wh,skinning_pars_vertex:dh,skinning_vertex:yh,skinnormal_vertex:uh,specularmap_fragment:Gh,specularmap_pars_fragment:Rh,tonemapping_fragment:Mh,tonemapping_pars_fragment:fh,transmission_fragment:Fh,transmission_pars_fragment:Sh,uv_pars_fragment:ph,uv_pars_vertex:Nh,uv_vertex:mh,uv2_pars_fragment:kh,uv2_pars_vertex:Uh,uv2_vertex:Lh,worldpos_vertex:Jh,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},PA={common:{diffuse:{value:new II(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Qg},uv2Transform:{value:new Qg},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new fA(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new II(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new II(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qg}},sprite:{diffuse:{value:new II(16777215)},opacity:{value:1},center:{value:new fA(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Qg}}},KC={basic:{uniforms:WB([PA.common,PA.specularmap,PA.envmap,PA.aomap,PA.lightmap,PA.fog]),vertexShader:qI.meshbasic_vert,fragmentShader:qI.meshbasic_frag},lambert:{uniforms:WB([PA.common,PA.specularmap,PA.envmap,PA.aomap,PA.lightmap,PA.emissivemap,PA.bumpmap,PA.normalmap,PA.displacementmap,PA.fog,PA.lights,{emissive:{value:new II(0)}}]),vertexShader:qI.meshlambert_vert,fragmentShader:qI.meshlambert_frag},phong:{uniforms:WB([PA.common,PA.specularmap,PA.envmap,PA.aomap,PA.lightmap,PA.emissivemap,PA.bumpmap,PA.normalmap,PA.displacementmap,PA.fog,PA.lights,{emissive:{value:new II(0)},specular:{value:new II(1118481)},shininess:{value:30}}]),vertexShader:qI.meshphong_vert,fragmentShader:qI.meshphong_frag},standard:{uniforms:WB([PA.common,PA.envmap,PA.aomap,PA.lightmap,PA.emissivemap,PA.bumpmap,PA.normalmap,PA.displacementmap,PA.roughnessmap,PA.metalnessmap,PA.fog,PA.lights,{emissive:{value:new II(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qI.meshphysical_vert,fragmentShader:qI.meshphysical_frag},toon:{uniforms:WB([PA.common,PA.aomap,PA.lightmap,PA.emissivemap,PA.bumpmap,PA.normalmap,PA.displacementmap,PA.gradientmap,PA.fog,PA.lights,{emissive:{value:new II(0)}}]),vertexShader:qI.meshtoon_vert,fragmentShader:qI.meshtoon_frag},matcap:{uniforms:WB([PA.common,PA.bumpmap,PA.normalmap,PA.displacementmap,PA.fog,{matcap:{value:null}}]),vertexShader:qI.meshmatcap_vert,fragmentShader:qI.meshmatcap_frag},points:{uniforms:WB([PA.points,PA.fog]),vertexShader:qI.points_vert,fragmentShader:qI.points_frag},dashed:{uniforms:WB([PA.common,PA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qI.linedashed_vert,fragmentShader:qI.linedashed_frag},depth:{uniforms:WB([PA.common,PA.displacementmap]),vertexShader:qI.depth_vert,fragmentShader:qI.depth_frag},normal:{uniforms:WB([PA.common,PA.bumpmap,PA.normalmap,PA.displacementmap,{opacity:{value:1}}]),vertexShader:qI.meshnormal_vert,fragmentShader:qI.meshnormal_frag},sprite:{uniforms:WB([PA.sprite,PA.fog]),vertexShader:qI.sprite_vert,fragmentShader:qI.sprite_frag},background:{uniforms:{uvTransform:{value:new Qg},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qI.background_vert,fragmentShader:qI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qI.backgroundCube_vert,fragmentShader:qI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qI.cube_vert,fragmentShader:qI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qI.equirect_vert,fragmentShader:qI.equirect_frag},distanceRGBA:{uniforms:WB([PA.common,PA.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qI.distanceRGBA_vert,fragmentShader:qI.distanceRGBA_frag},shadow:{uniforms:WB([PA.lights,PA.fog,{color:{value:new II(0)},opacity:{value:1}}]),vertexShader:qI.shadow_vert,fragmentShader:qI.shadow_frag}};KC.physical={uniforms:WB([KC.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new fA(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new II(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new fA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new II(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new II(1,1,1)},specularColorMap:{value:null}}]),vertexShader:qI.meshphysical_vert,fragmentShader:qI.meshphysical_frag};const te={r:0,b:0,g:0};function Kh(Q,A,I,g,B,C,E){const i=new II(0);let t=C===!0?0:1,o,s,r=null,a=0,c=null;function d(w,R){let f=!1,u=R.isScene===!0?R.background:null;u&&u.isTexture&&(u=(R.backgroundBlurriness>0?I:A).get(u));const S=Q.xr,U=S.getSession&&S.getSession();U&&U.environmentBlendMode==="additive"&&(u=null),u===null?D(i,t):u&&u.isColor&&(D(u,1),f=!0),(Q.autoClear||f)&&Q.clear(Q.autoClearColor,Q.autoClearDepth,Q.autoClearStencil),u&&(u.isCubeTexture||u.mapping===Wg)?(s===void 0&&(s=new pB(new JQ(1,1,1),new zC({name:"BackgroundCubeMaterial",uniforms:zE(KC.backgroundCube.uniforms),vertexShader:KC.backgroundCube.vertexShader,fragmentShader:KC.backgroundCube.fragmentShader,side:cg,depthTest:!1,depthWrite:!1,fog:!1})),s.geometry.deleteAttribute("normal"),s.geometry.deleteAttribute("uv"),s.onBeforeRender=function(q,V,p){this.matrixWorld.copyPosition(p.matrixWorld)},Object.defineProperty(s.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),B.update(s)),s.material.uniforms.envMap.value=u,s.material.uniforms.flipEnvMap.value=u.isCubeTexture&&u.isRenderTargetTexture===!1?-1:1,s.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,s.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,s.material.toneMapped=u.encoding!==gI,(r!==u||a!==u.version||c!==Q.toneMapping)&&(s.material.needsUpdate=!0,r=u,a=u.version,c=Q.toneMapping),s.layers.enableAll(),w.unshift(s,s.geometry,s.material,0,0,null)):u&&u.isTexture&&(o===void 0&&(o=new pB(new gi(2,2),new zC({name:"BackgroundMaterial",uniforms:zE(KC.background.uniforms),vertexShader:KC.background.vertexShader,fragmentShader:KC.background.fragmentShader,side:kB,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),B.update(o)),o.material.uniforms.t2D.value=u,o.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,o.material.toneMapped=u.encoding!==gI,u.matrixAutoUpdate===!0&&u.updateMatrix(),o.material.uniforms.uvTransform.value.copy(u.matrix),(r!==u||a!==u.version||c!==Q.toneMapping)&&(o.material.needsUpdate=!0,r=u,a=u.version,c=Q.toneMapping),o.layers.enableAll(),w.unshift(o,o.geometry,o.material,0,0,null))}function D(w,R){w.getRGB(te,An(Q)),g.buffers.color.setClear(te.r,te.g,te.b,R,E)}return{getClearColor:function(){return i},setClearColor:function(w,R=1){i.set(w),t=R,D(i,t)},getClearAlpha:function(){return t},setClearAlpha:function(w){t=w,D(i,t)},render:d}}function Yh(Q,A,I,g){const B=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),C=g.isWebGL2?null:A.get("OES_vertex_array_object"),E=g.isWebGL2||C!==null,i={},t=w(null);let o=t,s=!1;function r(CA,rA,NA,vA,uA){let mA=!1;if(E){const qA=D(vA,NA,rA);o!==qA&&(o=qA,c(o.object)),mA=R(CA,vA,NA,uA),mA&&f(CA,vA,NA,uA)}else{const qA=rA.wireframe===!0;(o.geometry!==vA.id||o.program!==NA.id||o.wireframe!==qA)&&(o.geometry=vA.id,o.program=NA.id,o.wireframe=qA,mA=!0)}uA!==null&&I.update(uA,Q.ELEMENT_ARRAY_BUFFER),(mA||s)&&(s=!1,p(CA,rA,NA,vA),uA!==null&&Q.bindBuffer(Q.ELEMENT_ARRAY_BUFFER,I.get(uA).buffer))}function a(){return g.isWebGL2?Q.createVertexArray():C.createVertexArrayOES()}function c(CA){return g.isWebGL2?Q.bindVertexArray(CA):C.bindVertexArrayOES(CA)}function d(CA){return g.isWebGL2?Q.deleteVertexArray(CA):C.deleteVertexArrayOES(CA)}function D(CA,rA,NA){const vA=NA.wireframe===!0;let uA=i[CA.id];uA===void 0&&(uA={},i[CA.id]=uA);let mA=uA[rA.id];mA===void 0&&(mA={},uA[rA.id]=mA);let qA=mA[vA];return qA===void 0&&(qA=w(a()),mA[vA]=qA),qA}function w(CA){const rA=[],NA=[],vA=[];for(let uA=0;uA<B;uA++)rA[uA]=0,NA[uA]=0,vA[uA]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:rA,enabledAttributes:NA,attributeDivisors:vA,object:CA,attributes:{},index:null}}function R(CA,rA,NA,vA){const uA=o.attributes,mA=rA.attributes;let qA=0;const CI=NA.getAttributes();for(const aA in CI)if(CI[aA].location>=0){const _A=uA[aA];let _=mA[aA];if(_===void 0&&(aA==="instanceMatrix"&&CA.instanceMatrix&&(_=CA.instanceMatrix),aA==="instanceColor"&&CA.instanceColor&&(_=CA.instanceColor)),_A===void 0||_A.attribute!==_||_&&_A.data!==_.data)return!0;qA++}return o.attributesNum!==qA||o.index!==vA}function f(CA,rA,NA,vA){const uA={},mA=rA.attributes;let qA=0;const CI=NA.getAttributes();for(const aA in CI)if(CI[aA].location>=0){let _A=mA[aA];_A===void 0&&(aA==="instanceMatrix"&&CA.instanceMatrix&&(_A=CA.instanceMatrix),aA==="instanceColor"&&CA.instanceColor&&(_A=CA.instanceColor));const _={};_.attribute=_A,_A&&_A.data&&(_.data=_A.data),uA[aA]=_,qA++}o.attributes=uA,o.attributesNum=qA,o.index=vA}function u(){const CA=o.newAttributes;for(let rA=0,NA=CA.length;rA<NA;rA++)CA[rA]=0}function S(CA){U(CA,0)}function U(CA,rA){const NA=o.newAttributes,vA=o.enabledAttributes,uA=o.attributeDivisors;NA[CA]=1,vA[CA]===0&&(Q.enableVertexAttribArray(CA),vA[CA]=1),uA[CA]!==rA&&((g.isWebGL2?Q:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](CA,rA),uA[CA]=rA)}function q(){const CA=o.newAttributes,rA=o.enabledAttributes;for(let NA=0,vA=rA.length;NA<vA;NA++)rA[NA]!==CA[NA]&&(Q.disableVertexAttribArray(NA),rA[NA]=0)}function V(CA,rA,NA,vA,uA,mA){g.isWebGL2===!0&&(NA===Q.INT||NA===Q.UNSIGNED_INT)?Q.vertexAttribIPointer(CA,rA,NA,uA,mA):Q.vertexAttribPointer(CA,rA,NA,vA,uA,mA)}function p(CA,rA,NA,vA){if(g.isWebGL2===!1&&(CA.isInstancedMesh||vA.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;u();const uA=vA.attributes,mA=NA.getAttributes(),qA=rA.defaultAttributeValues;for(const CI in mA){const aA=mA[CI];if(aA.location>=0){let KA=uA[CI];if(KA===void 0&&(CI==="instanceMatrix"&&CA.instanceMatrix&&(KA=CA.instanceMatrix),CI==="instanceColor"&&CA.instanceColor&&(KA=CA.instanceColor)),KA!==void 0){const _A=KA.normalized,_=KA.itemSize,nI=I.get(KA);if(nI===void 0)continue;const zA=nI.buffer,eI=nI.type,aI=nI.bytesPerElement;if(KA.isInterleavedBufferAttribute){const lI=KA.data,mI=lI.stride,FA=KA.offset;if(lI.isInstancedInterleavedBuffer){for(let UA=0;UA<aA.locationSize;UA++)U(aA.location+UA,lI.meshPerAttribute);CA.isInstancedMesh!==!0&&vA._maxInstanceCount===void 0&&(vA._maxInstanceCount=lI.meshPerAttribute*lI.count)}else for(let UA=0;UA<aA.locationSize;UA++)S(aA.location+UA);Q.bindBuffer(Q.ARRAY_BUFFER,zA);for(let UA=0;UA<aA.locationSize;UA++)V(aA.location+UA,_/aA.locationSize,eI,_A,mI*aI,(FA+_/aA.locationSize*UA)*aI)}else{if(KA.isInstancedBufferAttribute){for(let lI=0;lI<aA.locationSize;lI++)U(aA.location+lI,KA.meshPerAttribute);CA.isInstancedMesh!==!0&&vA._maxInstanceCount===void 0&&(vA._maxInstanceCount=KA.meshPerAttribute*KA.count)}else for(let lI=0;lI<aA.locationSize;lI++)S(aA.location+lI);Q.bindBuffer(Q.ARRAY_BUFFER,zA);for(let lI=0;lI<aA.locationSize;lI++)V(aA.location+lI,_/aA.locationSize,eI,_A,_*aI,_/aA.locationSize*lI*aI)}}else if(qA!==void 0){const _A=qA[CI];if(_A!==void 0)switch(_A.length){case 2:Q.vertexAttrib2fv(aA.location,_A);break;case 3:Q.vertexAttrib3fv(aA.location,_A);break;case 4:Q.vertexAttrib4fv(aA.location,_A);break;default:Q.vertexAttrib1fv(aA.location,_A)}}}}q()}function L(){GA();for(const CA in i){const rA=i[CA];for(const NA in rA){const vA=rA[NA];for(const uA in vA)d(vA[uA].object),delete vA[uA];delete rA[NA]}delete i[CA]}}function P(CA){if(i[CA.id]===void 0)return;const rA=i[CA.id];for(const NA in rA){const vA=rA[NA];for(const uA in vA)d(vA[uA].object),delete vA[uA];delete rA[NA]}delete i[CA.id]}function oA(CA){for(const rA in i){const NA=i[rA];if(NA[CA.id]===void 0)continue;const vA=NA[CA.id];for(const uA in vA)d(vA[uA].object),delete vA[uA];delete NA[CA.id]}}function GA(){tA(),s=!0,o!==t&&(o=t,c(o.object))}function tA(){t.geometry=null,t.program=null,t.wireframe=!1}return{setup:r,reset:GA,resetDefaultState:tA,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:oA,initAttributes:u,enableAttribute:S,disableUnusedAttributes:q}}function Hh(Q,A,I,g){const B=g.isWebGL2;let C;function E(o){C=o}function i(o,s){Q.drawArrays(C,o,s),I.update(s,C,1)}function t(o,s,r){if(r===0)return;let a,c;if(B)a=Q,c="drawArraysInstanced";else if(a=A.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",a===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}a[c](C,o,s,r),I.update(s,C,r)}this.setMode=E,this.render=i,this.renderInstances=t}function bh(Q,A,I){let g;function B(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const V=A.get("EXT_texture_filter_anisotropic");g=Q.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function C(V){if(V==="highp"){if(Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.HIGH_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&Q.getShaderPrecisionFormat(Q.VERTEX_SHADER,Q.MEDIUM_FLOAT).precision>0&&Q.getShaderPrecisionFormat(Q.FRAGMENT_SHADER,Q.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const E=typeof WebGL2RenderingContext<"u"&&Q instanceof WebGL2RenderingContext;let i=I.precision!==void 0?I.precision:"highp";const t=C(i);t!==i&&(console.warn("THREE.WebGLRenderer:",i,"not supported, using",t,"instead."),i=t);const o=E||A.has("WEBGL_draw_buffers"),s=I.logarithmicDepthBuffer===!0,r=Q.getParameter(Q.MAX_TEXTURE_IMAGE_UNITS),a=Q.getParameter(Q.MAX_VERTEX_TEXTURE_IMAGE_UNITS),c=Q.getParameter(Q.MAX_TEXTURE_SIZE),d=Q.getParameter(Q.MAX_CUBE_MAP_TEXTURE_SIZE),D=Q.getParameter(Q.MAX_VERTEX_ATTRIBS),w=Q.getParameter(Q.MAX_VERTEX_UNIFORM_VECTORS),R=Q.getParameter(Q.MAX_VARYING_VECTORS),f=Q.getParameter(Q.MAX_FRAGMENT_UNIFORM_VECTORS),u=a>0,S=E||A.has("OES_texture_float"),U=u&&S,q=E?Q.getParameter(Q.MAX_SAMPLES):0;return{isWebGL2:E,drawBuffers:o,getMaxAnisotropy:B,getMaxPrecision:C,precision:i,logarithmicDepthBuffer:s,maxTextures:r,maxVertexTextures:a,maxTextureSize:c,maxCubemapSize:d,maxAttributes:D,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:f,vertexTextures:u,floatFragmentTextures:S,floatVertexTextures:U,maxSamples:q}}function qh(Q){const A=this;let I=null,g=0,B=!1,C=!1;const E=new KQ,i=new Qg,t={value:null,needsUpdate:!1};this.uniform=t,this.numPlanes=0,this.numIntersection=0,this.init=function(r,a){const c=r.length!==0||a||g!==0||B;return B=a,g=r.length,c},this.beginShadows=function(){C=!0,s(null)},this.endShadows=function(){C=!1},this.setGlobalState=function(r,a){I=s(r,a,0)},this.setState=function(r,a,c){const d=r.clippingPlanes,D=r.clipIntersection,w=r.clipShadows,R=Q.get(r);if(!B||d===null||d.length===0||C&&!w)C?s(null):o();else{const f=C?0:g,u=f*4;let S=R.clippingState||null;t.value=S,S=s(d,a,u,c);for(let U=0;U!==u;++U)S[U]=I[U];R.clippingState=S,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=f}};function o(){t.value!==I&&(t.value=I,t.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function s(r,a,c,d){const D=r!==null?r.length:0;let w=null;if(D!==0){if(w=t.value,d!==!0||w===null){const R=c+D*4,f=a.matrixWorldInverse;i.getNormalMatrix(f),(w===null||w.length<R)&&(w=new Float32Array(R));for(let u=0,S=c;u!==D;++u,S+=4)E.copy(r[u]).applyMatrix4(f,i),E.normal.toArray(w,S),w[S+3]=E.constant}t.value=w,t.needsUpdate=!0}return A.numPlanes=D,A.numIntersection=0,w}}function xh(Q){let A=new WeakMap;function I(E,i){return i===nA?E.mapping=YI:i===Rg&&(E.mapping=hg),E}function g(E){if(E&&E.isTexture&&E.isRenderTargetTexture===!1){const i=E.mapping;if(i===nA||i===Rg)if(A.has(E)){const t=A.get(E).texture;return I(t,E.mapping)}else{const t=E.image;if(t&&t.height>0){const o=new Bn(t.height/2);return o.fromEquirectangularTexture(Q,E),A.set(E,o),E.addEventListener("dispose",B),I(o.texture,E.mapping)}else return null}}return E}function B(E){const i=E.target;i.removeEventListener("dispose",B);const t=A.get(i);t!==void 0&&(A.delete(i),t.dispose())}function C(){A=new WeakMap}return{get:g,dispose:C}}class ee extends Qe{constructor(A=-1,I=1,g=1,B=-1,C=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=B,this.near=C,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,B,C,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=B,this.view.width=C,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,B=(this.top+this.bottom)/2;let C=g-A,E=g+A,i=B+I,t=B-I;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,s=(this.top-this.bottom)/this.view.fullHeight/this.zoom;C+=o*this.view.offsetX,E=C+o*this.view.width,i-=s*this.view.offsetY,t=i-s*this.view.height}this.projectionMatrix.makeOrthographic(C,E,i,t,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const Bi=4,Qn=[.125,.215,.35,.446,.526,.582],tE=20,$e=new ee,En=new II;let Ao=null;const eE=(1+Math.sqrt(5))/2,Ci=1/eE,tn=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,eE,Ci),new K(0,eE,-Ci),new K(Ci,0,eE),new K(-Ci,0,eE),new K(eE,Ci,0),new K(-eE,Ci,0)];class Io{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,B=100){Ao=this._renderer.getRenderTarget(),this._setSize(256);const C=this._allocateTargets();return C.depthBuffer=!0,this._sceneToCubeUV(A,g,B,C),I>0&&this._blur(C,0,0,I),this._applyPMREM(C),this._cleanup(C),C}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=on(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(Ao),A.scissorTest=!1,oe(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===YI||A.mapping===hg?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),Ao=this._renderer.getRenderTarget();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:Lg,minFilter:Lg,generateMipmaps:!1,type:uB,format:bB,encoding:tI,depthBuffer:!1},B=en(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=en(A,I,g);const{_lodMax:C}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vh(C)),this._blurMaterial=Wh(C,A,I)}return B}_compileMaterial(A){const I=new pB(this._lodPlanes[0],A);this._renderer.compile(I,$e)}_sceneToCubeUV(A,I,g,B){const i=new NB(90,1,I,g),t=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,r=s.autoClear,a=s.toneMapping;s.getClearColor(En),s.toneMapping=yA,s.autoClear=!1;const c=new LQ({name:"PMREM.Background",side:cg,depthWrite:!1,depthTest:!1}),d=new pB(new JQ,c);let D=!1;const w=A.background;w?w.isColor&&(c.color.copy(w),A.background=null,D=!0):(c.color.copy(En),D=!0);for(let R=0;R<6;R++){const f=R%3;f===0?(i.up.set(0,t[R],0),i.lookAt(o[R],0,0)):f===1?(i.up.set(0,0,t[R]),i.lookAt(0,o[R],0)):(i.up.set(0,t[R],0),i.lookAt(0,0,o[R]));const u=this._cubeSize;oe(B,f*u,R>2?u:0,u,u),s.setRenderTarget(B),D&&s.render(d,i),s.render(A,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=a,s.autoClear=r,A.background=w}_textureToCubeUV(A,I){const g=this._renderer,B=A.mapping===YI||A.mapping===hg;B?(this._cubemapMaterial===null&&(this._cubemapMaterial=nn()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=on());const C=B?this._cubemapMaterial:this._equirectMaterial,E=new pB(this._lodPlanes[0],C),i=C.uniforms;i.envMap.value=A;const t=this._cubeSize;oe(I,0,0,3*t,2*t),g.setRenderTarget(I),g.render(E,$e)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let B=1;B<this._lodPlanes.length;B++){const C=Math.sqrt(this._sigmas[B]*this._sigmas[B]-this._sigmas[B-1]*this._sigmas[B-1]),E=tn[(B-1)%tn.length];this._blur(A,B-1,B,C,E)}I.autoClear=g}_blur(A,I,g,B,C){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,B,"latitudinal",C),this._halfBlur(E,A,g,g,B,"longitudinal",C)}_halfBlur(A,I,g,B,C,E,i){const t=this._renderer,o=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const s=3,r=new pB(this._lodPlanes[B],o),a=o.uniforms,c=this._sizeLods[g]-1,d=isFinite(C)?Math.PI/(2*c):2*Math.PI/(2*tE-1),D=C/d,w=isFinite(C)?1+Math.floor(s*D):tE;w>tE&&console.warn(`sigmaRadians, ${C}, is too large and will clip, as it requested ${w} samples when the maximum is set to ${tE}`);const R=[];let f=0;for(let V=0;V<tE;++V){const p=V/D,L=Math.exp(-p*p/2);R.push(L),V===0?f+=L:V<w&&(f+=2*L)}for(let V=0;V<R.length;V++)R[V]=R[V]/f;a.envMap.value=A.texture,a.samples.value=w,a.weights.value=R,a.latitudinal.value=E==="latitudinal",i&&(a.poleAxis.value=i);const{_lodMax:u}=this;a.dTheta.value=d,a.mipInt.value=u-g;const S=this._sizeLods[B],U=3*S*(B>u-Bi?B-u+Bi:0),q=4*(this._cubeSize-S);oe(I,U,q,3*S,2*S),t.setRenderTarget(I),t.render(r,$e)}}function vh(Q){const A=[],I=[],g=[];let B=Q;const C=Q-Bi+1+Qn.length;for(let E=0;E<C;E++){const i=Math.pow(2,B);I.push(i);let t=1/i;E>Q-Bi?t=Qn[E-Q+Bi-1]:E===0&&(t=0),g.push(t);const o=1/(i-2),s=-o,r=1+o,a=[s,s,r,s,r,r,s,s,r,r,s,r],c=6,d=6,D=3,w=2,R=1,f=new Float32Array(D*d*c),u=new Float32Array(w*d*c),S=new Float32Array(R*d*c);for(let q=0;q<c;q++){const V=q%3*2/3-1,p=q>2?0:-1,L=[V,p,0,V+2/3,p,0,V+2/3,p+1,0,V,p,0,V+2/3,p+1,0,V,p+1,0];f.set(L,D*d*q),u.set(a,w*d*q);const P=[q,q,q,q,q,q];S.set(P,R*d*q)}const U=new vI;U.setAttribute("position",new pg(f,D)),U.setAttribute("uv",new pg(u,w)),U.setAttribute("faceIndex",new pg(S,R)),A.push(U),B>Bi&&B--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function en(Q,A,I){const g=new CC(Q,A,I);return g.texture.mapping=Wg,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function oe(Q,A,I,g,B){Q.viewport.set(A,I,g,B),Q.scissor.set(A,I,g,B)}function Wh(Q,A,I){const g=new Float32Array(tE),B=new K(0,1,0);return new zC({name:"SphericalGaussianBlur",defines:{n:tE,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${Q}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:B}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hI,depthTest:!1,depthWrite:!1})}function on(){return new zC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hI,depthTest:!1,depthWrite:!1})}function nn(){return new zC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hI,depthTest:!1,depthWrite:!1})}function go(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Th(Q){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const t=i.mapping,o=t===nA||t===Rg,s=t===YI||t===hg;if(o||s)if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let r=A.get(i);return I===null&&(I=new Io(Q)),r=o?I.fromEquirectangular(i,r):I.fromCubemap(i,r),A.set(i,r),r.texture}else{if(A.has(i))return A.get(i).texture;{const r=i.image;if(o&&r&&r.height>0||s&&r&&B(r)){I===null&&(I=new Io(Q));const a=o?I.fromEquirectangular(i):I.fromCubemap(i);return A.set(i,a),i.addEventListener("dispose",C),a.texture}else return null}}}return i}function B(i){let t=0;const o=6;for(let s=0;s<o;s++)i[s]!==void 0&&t++;return t===o}function C(i){const t=i.target;t.removeEventListener("dispose",C);const o=A.get(t);o!==void 0&&(A.delete(t),o.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function Zh(Q){const A={};function I(g){if(A[g]!==void 0)return A[g];let B;switch(g){case"WEBGL_depth_texture":B=Q.getExtension("WEBGL_depth_texture")||Q.getExtension("MOZ_WEBGL_depth_texture")||Q.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":B=Q.getExtension("EXT_texture_filter_anisotropic")||Q.getExtension("MOZ_EXT_texture_filter_anisotropic")||Q.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":B=Q.getExtension("WEBGL_compressed_texture_s3tc")||Q.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":B=Q.getExtension("WEBGL_compressed_texture_pvrtc")||Q.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:B=Q.getExtension(g)}return A[g]=B,B}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?I("EXT_color_buffer_float"):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const B=I(g);return B===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),B}}}function Oh(Q,A,I,g){const B={},C=new WeakMap;function E(r){const a=r.target;a.index!==null&&A.remove(a.index);for(const d in a.attributes)A.remove(a.attributes[d]);a.removeEventListener("dispose",E),delete B[a.id];const c=C.get(a);c&&(A.remove(c),C.delete(a)),g.releaseStatesOfGeometry(a),a.isInstancedBufferGeometry===!0&&delete a._maxInstanceCount,I.memory.geometries--}function i(r,a){return B[a.id]===!0||(a.addEventListener("dispose",E),B[a.id]=!0,I.memory.geometries++),a}function t(r){const a=r.attributes;for(const d in a)A.update(a[d],Q.ARRAY_BUFFER);const c=r.morphAttributes;for(const d in c){const D=c[d];for(let w=0,R=D.length;w<R;w++)A.update(D[w],Q.ARRAY_BUFFER)}}function o(r){const a=[],c=r.index,d=r.attributes.position;let D=0;if(c!==null){const f=c.array;D=c.version;for(let u=0,S=f.length;u<S;u+=3){const U=f[u+0],q=f[u+1],V=f[u+2];a.push(U,q,q,V,V,U)}}else{const f=d.array;D=d.version;for(let u=0,S=f.length/3-1;u<S;u+=3){const U=u+0,q=u+1,V=u+2;a.push(U,q,q,V,V,U)}}const w=new(Bg(a)?Pe:Ve)(a,1);w.version=D;const R=C.get(r);R&&A.remove(R),C.set(r,w)}function s(r){const a=C.get(r);if(a){const c=r.index;c!==null&&a.version<c.version&&o(r)}else o(r);return C.get(r)}return{get:i,update:t,getWireframeAttribute:s}}function Vh(Q,A,I,g){const B=g.isWebGL2;let C;function E(a){C=a}let i,t;function o(a){i=a.type,t=a.bytesPerElement}function s(a,c){Q.drawElements(C,c,i,a*t),I.update(c,C,1)}function r(a,c,d){if(d===0)return;let D,w;if(B)D=Q,w="drawElementsInstanced";else if(D=A.get("ANGLE_instanced_arrays"),w="drawElementsInstancedANGLE",D===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}D[w](C,c,i,a*t,d),I.update(c,C,d)}this.setMode=E,this.setIndex=o,this.render=s,this.renderInstances=r}function Ph(Q){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(C,E,i){switch(I.calls++,E){case Q.TRIANGLES:I.triangles+=i*(C/3);break;case Q.LINES:I.lines+=i*(C/2);break;case Q.LINE_STRIP:I.lines+=i*(C-1);break;case Q.LINE_LOOP:I.lines+=i*C;break;case Q.POINTS:I.points+=i*C;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function B(){I.frame++,I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:B,update:g}}function Xh(Q,A){return Q[0]-A[0]}function _h(Q,A){return Math.abs(A[1])-Math.abs(Q[1])}function jh(Q,A,I){const g={},B=new Float32Array(8),C=new WeakMap,E=new xI,i=[];for(let o=0;o<8;o++)i[o]=[o,0];function t(o,s,r){const a=o.morphTargetInfluences;if(A.isWebGL2===!0){const c=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=c!==void 0?c.length:0;let D=C.get(s);if(D===void 0||D.count!==d){let CA=function(){GA.dispose(),C.delete(s),s.removeEventListener("dispose",CA)};D!==void 0&&D.texture.dispose();const f=s.morphAttributes.position!==void 0,u=s.morphAttributes.normal!==void 0,S=s.morphAttributes.color!==void 0,U=s.morphAttributes.position||[],q=s.morphAttributes.normal||[],V=s.morphAttributes.color||[];let p=0;f===!0&&(p=1),u===!0&&(p=2),S===!0&&(p=3);let L=s.attributes.position.count*p,P=1;L>A.maxTextureSize&&(P=Math.ceil(L/A.maxTextureSize),L=A.maxTextureSize);const oA=new Float32Array(L*P*4*d),GA=new JB(oA,L,P,d);GA.type=uC,GA.needsUpdate=!0;const tA=p*4;for(let rA=0;rA<d;rA++){const NA=U[rA],vA=q[rA],uA=V[rA],mA=L*P*4*rA;for(let qA=0;qA<NA.count;qA++){const CI=qA*tA;f===!0&&(E.fromBufferAttribute(NA,qA),oA[mA+CI+0]=E.x,oA[mA+CI+1]=E.y,oA[mA+CI+2]=E.z,oA[mA+CI+3]=0),u===!0&&(E.fromBufferAttribute(vA,qA),oA[mA+CI+4]=E.x,oA[mA+CI+5]=E.y,oA[mA+CI+6]=E.z,oA[mA+CI+7]=0),S===!0&&(E.fromBufferAttribute(uA,qA),oA[mA+CI+8]=E.x,oA[mA+CI+9]=E.y,oA[mA+CI+10]=E.z,oA[mA+CI+11]=uA.itemSize===4?E.w:1)}}D={count:d,texture:GA,size:new fA(L,P)},C.set(s,D),s.addEventListener("dispose",CA)}let w=0;for(let f=0;f<a.length;f++)w+=a[f];const R=s.morphTargetsRelative?1:1-w;r.getUniforms().setValue(Q,"morphTargetBaseInfluence",R),r.getUniforms().setValue(Q,"morphTargetInfluences",a),r.getUniforms().setValue(Q,"morphTargetsTexture",D.texture,I),r.getUniforms().setValue(Q,"morphTargetsTextureSize",D.size)}else{const c=a===void 0?0:a.length;let d=g[s.id];if(d===void 0||d.length!==c){d=[];for(let u=0;u<c;u++)d[u]=[u,0];g[s.id]=d}for(let u=0;u<c;u++){const S=d[u];S[0]=u,S[1]=a[u]}d.sort(_h);for(let u=0;u<8;u++)u<c&&d[u][1]?(i[u][0]=d[u][0],i[u][1]=d[u][1]):(i[u][0]=Number.MAX_SAFE_INTEGER,i[u][1]=0);i.sort(Xh);const D=s.morphAttributes.position,w=s.morphAttributes.normal;let R=0;for(let u=0;u<8;u++){const S=i[u],U=S[0],q=S[1];U!==Number.MAX_SAFE_INTEGER&&q?(D&&s.getAttribute("morphTarget"+u)!==D[U]&&s.setAttribute("morphTarget"+u,D[U]),w&&s.getAttribute("morphNormal"+u)!==w[U]&&s.setAttribute("morphNormal"+u,w[U]),B[u]=q,R+=q):(D&&s.hasAttribute("morphTarget"+u)===!0&&s.deleteAttribute("morphTarget"+u),w&&s.hasAttribute("morphNormal"+u)===!0&&s.deleteAttribute("morphNormal"+u),B[u]=0)}const f=s.morphTargetsRelative?1:1-R;r.getUniforms().setValue(Q,"morphTargetBaseInfluence",f),r.getUniforms().setValue(Q,"morphTargetInfluences",B)}}return{update:t}}function zh(Q,A,I,g){let B=new WeakMap;function C(t){const o=g.render.frame,s=t.geometry,r=A.get(t,s);return B.get(r)!==o&&(A.update(r),B.set(r,o)),t.isInstancedMesh&&(t.hasEventListener("dispose",i)===!1&&t.addEventListener("dispose",i),I.update(t.instanceMatrix,Q.ARRAY_BUFFER),t.instanceColor!==null&&I.update(t.instanceColor,Q.ARRAY_BUFFER)),r}function E(){B=new WeakMap}function i(t){const o=t.target;o.removeEventListener("dispose",i),I.remove(o.instanceMatrix),o.instanceColor!==null&&I.remove(o.instanceColor)}return{update:C,dispose:E}}const sn=new Jg,an=new JB,rn=new TE,hn=new It,cn=[],Dn=[],ln=new Float32Array(16),wn=new Float32Array(9),dn=new Float32Array(4);function Qi(Q,A,I){const g=Q[0];if(g<=0||g>0)return Q;const B=A*I;let C=cn[B];if(C===void 0&&(C=new Float32Array(B),cn[B]=C),A!==0){g.toArray(C,0);for(let E=1,i=0;E!==A;++E)i+=I,Q[E].toArray(C,i)}return C}function tB(Q,A){if(Q.length!==A.length)return!1;for(let I=0,g=Q.length;I<g;I++)if(Q[I]!==A[I])return!1;return!0}function eB(Q,A){for(let I=0,g=A.length;I<g;I++)Q[I]=A[I]}function ne(Q,A){let I=Dn[A];I===void 0&&(I=new Int32Array(A),Dn[A]=I);for(let g=0;g!==A;++g)I[g]=Q.allocateTextureUnit();return I}function $h(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1f(this.addr,A),I[0]=A)}function Ac(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(tB(I,A))return;Q.uniform2fv(this.addr,A),eB(I,A)}}function Ic(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(Q.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(tB(I,A))return;Q.uniform3fv(this.addr,A),eB(I,A)}}function gc(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(tB(I,A))return;Q.uniform4fv(this.addr,A),eB(I,A)}}function Bc(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(tB(I,A))return;Q.uniformMatrix2fv(this.addr,!1,A),eB(I,A)}else{if(tB(I,g))return;dn.set(g),Q.uniformMatrix2fv(this.addr,!1,dn),eB(I,g)}}function Cc(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(tB(I,A))return;Q.uniformMatrix3fv(this.addr,!1,A),eB(I,A)}else{if(tB(I,g))return;wn.set(g),Q.uniformMatrix3fv(this.addr,!1,wn),eB(I,g)}}function Qc(Q,A){const I=this.cache,g=A.elements;if(g===void 0){if(tB(I,A))return;Q.uniformMatrix4fv(this.addr,!1,A),eB(I,A)}else{if(tB(I,g))return;ln.set(g),Q.uniformMatrix4fv(this.addr,!1,ln),eB(I,g)}}function Ec(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1i(this.addr,A),I[0]=A)}function ic(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(tB(I,A))return;Q.uniform2iv(this.addr,A),eB(I,A)}}function tc(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(tB(I,A))return;Q.uniform3iv(this.addr,A),eB(I,A)}}function ec(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(tB(I,A))return;Q.uniform4iv(this.addr,A),eB(I,A)}}function oc(Q,A){const I=this.cache;I[0]!==A&&(Q.uniform1ui(this.addr,A),I[0]=A)}function nc(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(Q.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(tB(I,A))return;Q.uniform2uiv(this.addr,A),eB(I,A)}}function sc(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(Q.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(tB(I,A))return;Q.uniform3uiv(this.addr,A),eB(I,A)}}function ac(Q,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(Q.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(tB(I,A))return;Q.uniform4uiv(this.addr,A),eB(I,A)}}function rc(Q,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(Q.uniform1i(this.addr,B),g[0]=B),I.setTexture2D(A||sn,B)}function hc(Q,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(Q.uniform1i(this.addr,B),g[0]=B),I.setTexture3D(A||rn,B)}function cc(Q,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(Q.uniform1i(this.addr,B),g[0]=B),I.setTextureCube(A||hn,B)}function Dc(Q,A,I){const g=this.cache,B=I.allocateTextureUnit();g[0]!==B&&(Q.uniform1i(this.addr,B),g[0]=B),I.setTexture2DArray(A||an,B)}function lc(Q){switch(Q){case 5126:return $h;case 35664:return Ac;case 35665:return Ic;case 35666:return gc;case 35674:return Bc;case 35675:return Cc;case 35676:return Qc;case 5124:case 35670:return Ec;case 35667:case 35671:return ic;case 35668:case 35672:return tc;case 35669:case 35673:return ec;case 5125:return oc;case 36294:return nc;case 36295:return sc;case 36296:return ac;case 35678:case 36198:case 36298:case 36306:case 35682:return rc;case 35679:case 36299:case 36307:return hc;case 35680:case 36300:case 36308:case 36293:return cc;case 36289:case 36303:case 36311:case 36292:return Dc}}function wc(Q,A){Q.uniform1fv(this.addr,A)}function dc(Q,A){const I=Qi(A,this.size,2);Q.uniform2fv(this.addr,I)}function yc(Q,A){const I=Qi(A,this.size,3);Q.uniform3fv(this.addr,I)}function uc(Q,A){const I=Qi(A,this.size,4);Q.uniform4fv(this.addr,I)}function Gc(Q,A){const I=Qi(A,this.size,4);Q.uniformMatrix2fv(this.addr,!1,I)}function Rc(Q,A){const I=Qi(A,this.size,9);Q.uniformMatrix3fv(this.addr,!1,I)}function Mc(Q,A){const I=Qi(A,this.size,16);Q.uniformMatrix4fv(this.addr,!1,I)}function fc(Q,A){Q.uniform1iv(this.addr,A)}function Fc(Q,A){Q.uniform2iv(this.addr,A)}function Sc(Q,A){Q.uniform3iv(this.addr,A)}function pc(Q,A){Q.uniform4iv(this.addr,A)}function Nc(Q,A){Q.uniform1uiv(this.addr,A)}function mc(Q,A){Q.uniform2uiv(this.addr,A)}function kc(Q,A){Q.uniform3uiv(this.addr,A)}function Uc(Q,A){Q.uniform4uiv(this.addr,A)}function Lc(Q,A,I){const g=this.cache,B=A.length,C=ne(I,B);tB(g,C)||(Q.uniform1iv(this.addr,C),eB(g,C));for(let E=0;E!==B;++E)I.setTexture2D(A[E]||sn,C[E])}function Jc(Q,A,I){const g=this.cache,B=A.length,C=ne(I,B);tB(g,C)||(Q.uniform1iv(this.addr,C),eB(g,C));for(let E=0;E!==B;++E)I.setTexture3D(A[E]||rn,C[E])}function Kc(Q,A,I){const g=this.cache,B=A.length,C=ne(I,B);tB(g,C)||(Q.uniform1iv(this.addr,C),eB(g,C));for(let E=0;E!==B;++E)I.setTextureCube(A[E]||hn,C[E])}function Yc(Q,A,I){const g=this.cache,B=A.length,C=ne(I,B);tB(g,C)||(Q.uniform1iv(this.addr,C),eB(g,C));for(let E=0;E!==B;++E)I.setTexture2DArray(A[E]||an,C[E])}function Hc(Q){switch(Q){case 5126:return wc;case 35664:return dc;case 35665:return yc;case 35666:return uc;case 35674:return Gc;case 35675:return Rc;case 35676:return Mc;case 5124:case 35670:return fc;case 35667:case 35671:return Fc;case 35668:case 35672:return Sc;case 35669:case 35673:return pc;case 5125:return Nc;case 36294:return mc;case 36295:return kc;case 36296:return Uc;case 35678:case 36198:case 36298:case 36306:case 35682:return Lc;case 35679:case 36299:case 36307:return Jc;case 35680:case 36300:case 36308:case 36293:return Kc;case 36289:case 36303:case 36311:case 36292:return Yc}}class bc{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.setValue=lc(I.type)}}class qc{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.size=I.size,this.setValue=Hc(I.type)}}class xc{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const B=this.seq;for(let C=0,E=B.length;C!==E;++C){const i=B[C];i.setValue(A,I[i.id],g)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function yn(Q,A){Q.seq.push(A),Q.map[A.id]=A}function vc(Q,A,I){const g=Q.name,B=g.length;for(Bo.lastIndex=0;;){const C=Bo.exec(g),E=Bo.lastIndex;let i=C[1];const t=C[2]==="]",o=C[3];if(t&&(i=i|0),o===void 0||o==="["&&E+2===B){yn(I,o===void 0?new bc(i,Q,A):new qc(i,Q,A));break}else{let r=I.map[i];r===void 0&&(r=new xc(i),yn(I,r)),I=r}}}class se{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let B=0;B<g;++B){const C=A.getActiveUniform(I,B),E=A.getUniformLocation(I,C.name);vc(C,E,this)}}setValue(A,I,g,B){const C=this.map[I];C!==void 0&&C.setValue(A,g,B)}setOptional(A,I,g){const B=I[g];B!==void 0&&this.setValue(A,g,B)}static upload(A,I,g,B){for(let C=0,E=I.length;C!==E;++C){const i=I[C],t=g[i.id];t.needsUpdate!==!1&&i.setValue(A,t.value,B)}}static seqWithValue(A,I){const g=[];for(let B=0,C=A.length;B!==C;++B){const E=A[B];E.id in I&&g.push(E)}return g}}function un(Q,A,I){const g=Q.createShader(A);return Q.shaderSource(g,I),Q.compileShader(g),g}let Wc=0;function Tc(Q,A){const I=Q.split(`
`),g=[],B=Math.max(A-6,0),C=Math.min(A+6,I.length);for(let E=B;E<C;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}function Zc(Q){switch(Q){case tI:return["Linear","( value )"];case gI:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",Q),["Linear","( value )"]}}function Gn(Q,A,I){const g=Q.getShaderParameter(A,Q.COMPILE_STATUS),B=Q.getShaderInfoLog(A).trim();if(g&&B==="")return"";const C=/ERROR: 0:(\d+)/.exec(B);if(C){const E=parseInt(C[1]);return I.toUpperCase()+`

`+B+`

`+Tc(Q.getShaderSource(A),E)}else return B}function Oc(Q,A){const I=Zc(A);return"vec4 "+Q+"( vec4 value ) { return LinearTo"+I[0]+I[1]+"; }"}function Vc(Q,A){let I;switch(A){case MA:I="Linear";break;case YA:I="Reinhard";break;case dI:I="OptimizedCineon";break;case AI:I="ACESFilmic";break;case TI:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+Q+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function Pc(Q){return[Q.extensionDerivatives||Q.envMapCubeUVHeight||Q.bumpMap||Q.tangentSpaceNormalMap||Q.clearcoatNormalMap||Q.flatShading||Q.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(Q.extensionFragDepth||Q.logarithmicDepthBuffer)&&Q.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",Q.extensionDrawBuffers&&Q.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(Q.extensionShaderTextureLOD||Q.envMap||Q.transmission)&&Q.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gt).join(`
`)}function Xc(Q){const A=[];for(const I in Q){const g=Q[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function _c(Q,A){const I={},g=Q.getProgramParameter(A,Q.ACTIVE_ATTRIBUTES);for(let B=0;B<g;B++){const C=Q.getActiveAttrib(A,B),E=C.name;let i=1;C.type===Q.FLOAT_MAT2&&(i=2),C.type===Q.FLOAT_MAT3&&(i=3),C.type===Q.FLOAT_MAT4&&(i=4),I[E]={type:C.type,location:Q.getAttribLocation(A,E),locationSize:i}}return I}function gt(Q){return Q!==""}function Rn(Q,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return Q.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Mn(Q,A){return Q.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const jc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(Q){return Q.replace(jc,zc)}function zc(Q,A){const I=qI[A];if(I===void 0)throw new Error("Can not resolve #include <"+A+">");return Co(I)}const $c=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fn(Q){return Q.replace($c,AD)}function AD(Q,A,I,g){let B="";for(let C=parseInt(A);C<parseInt(I);C++)B+=g.replace(/\[\s*i\s*\]/g,"[ "+C+" ]").replace(/UNROLLED_LOOP_INDEX/g,C);return B}function Fn(Q){let A="precision "+Q.precision+` float;
precision `+Q.precision+" int;";return Q.precision==="highp"?A+=`
#define HIGH_PRECISION`:Q.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:Q.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function ID(Q){let A="SHADOWMAP_TYPE_BASIC";return Q.shadowMapType===ug?A="SHADOWMAP_TYPE_PCF":Q.shadowMapType===mg?A="SHADOWMAP_TYPE_PCF_SOFT":Q.shadowMapType===YB&&(A="SHADOWMAP_TYPE_VSM"),A}function gD(Q){let A="ENVMAP_TYPE_CUBE";if(Q.envMap)switch(Q.envMapMode){case YI:case hg:A="ENVMAP_TYPE_CUBE";break;case Wg:A="ENVMAP_TYPE_CUBE_UV";break}return A}function BD(Q){let A="ENVMAP_MODE_REFLECTION";if(Q.envMap)switch(Q.envMapMode){case hg:A="ENVMAP_MODE_REFRACTION";break}return A}function CD(Q){let A="ENVMAP_BLENDING_NONE";if(Q.envMap)switch(Q.combine){case ng:A="ENVMAP_BLENDING_MULTIPLY";break;case vg:A="ENVMAP_BLENDING_MIX";break;case Fg:A="ENVMAP_BLENDING_ADD";break}return A}function QD(Q){const A=Q.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function ED(Q,A,I,g){const B=Q.getContext(),C=I.defines;let E=I.vertexShader,i=I.fragmentShader;const t=ID(I),o=gD(I),s=BD(I),r=CD(I),a=QD(I),c=I.isWebGL2?"":Pc(I),d=Xc(C),D=B.createProgram();let w,R,f=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(w=[d].filter(gt).join(`
`),w.length>0&&(w+=`
`),R=[c,d].filter(gt).join(`
`),R.length>0&&(R+=`
`)):(w=[Fn(I),"#define SHADER_NAME "+I.shaderName,d,I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.supportsVertexTextures?"#define VERTEX_TEXTURES":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+s:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMap&&I.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",I.normalMap&&I.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.displacementMap&&I.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",I.specularColorMap?"#define USE_SPECULARCOLORMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEENCOLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUvs?"#define USE_UV":"",I.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+t:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gt).join(`
`),R=[c,Fn(I),"#define SHADER_NAME "+I.shaderName,d,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+o:"",I.envMap?"#define "+s:"",I.envMap?"#define "+r:"",a?"#define CUBEUV_TEXEL_WIDTH "+a.texelWidth:"",a?"#define CUBEUV_TEXEL_HEIGHT "+a.texelHeight:"",a?"#define CUBEUV_MAX_MIP "+a.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMap&&I.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",I.normalMap&&I.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",I.specularColorMap?"#define USE_SPECULARCOLORMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEENCOLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUvs?"#define USE_UV":"",I.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+t:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==yA?"#define TONE_MAPPING":"",I.toneMapping!==yA?qI.tonemapping_pars_fragment:"",I.toneMapping!==yA?Vc("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",qI.encodings_pars_fragment,Oc("linearToOutputTexel",I.outputEncoding),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(gt).join(`
`)),E=Co(E),E=Rn(E,I),E=Mn(E,I),i=Co(i),i=Rn(i,I),i=Mn(i,I),E=fn(E),i=fn(i),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,w=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,R=["#define varying in",I.glslVersion===Tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===Tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R);const u=f+w+E,S=f+R+i,U=un(B,B.VERTEX_SHADER,u),q=un(B,B.FRAGMENT_SHADER,S);if(B.attachShader(D,U),B.attachShader(D,q),I.index0AttributeName!==void 0?B.bindAttribLocation(D,0,I.index0AttributeName):I.morphTargets===!0&&B.bindAttribLocation(D,0,"position"),B.linkProgram(D),Q.debug.checkShaderErrors){const L=B.getProgramInfoLog(D).trim(),P=B.getShaderInfoLog(U).trim(),oA=B.getShaderInfoLog(q).trim();let GA=!0,tA=!0;if(B.getProgramParameter(D,B.LINK_STATUS)===!1){GA=!1;const CA=Gn(B,U,"vertex"),rA=Gn(B,q,"fragment");console.error("THREE.WebGLProgram: Shader Error "+B.getError()+" - VALIDATE_STATUS "+B.getProgramParameter(D,B.VALIDATE_STATUS)+`

Program Info Log: `+L+`
`+CA+`
`+rA)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(P===""||oA==="")&&(tA=!1);tA&&(this.diagnostics={runnable:GA,programLog:L,vertexShader:{log:P,prefix:w},fragmentShader:{log:oA,prefix:R}})}B.deleteShader(U),B.deleteShader(q);let V;this.getUniforms=function(){return V===void 0&&(V=new se(B,D)),V};let p;return this.getAttributes=function(){return p===void 0&&(p=_c(B,D)),p},this.destroy=function(){g.releaseStatesOfProgram(this),B.deleteProgram(D),this.program=void 0},this.name=I.shaderName,this.id=Wc++,this.cacheKey=A,this.usedTimes=1,this.program=D,this.vertexShader=U,this.fragmentShader=q,this}let iD=0;class tD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,B=this._getShaderStage(I),C=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(B)===!1&&(E.add(B),B.usedTimes++),E.has(C)===!1&&(E.add(C),C.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new eD(A),I.set(A,g)),g}}class eD{constructor(A){this.id=iD++,this.code=A,this.usedTimes=0}}function oD(Q,A,I,g,B,C,E){const i=new e,t=new tD,o=[],s=B.isWebGL2,r=B.logarithmicDepthBuffer,a=B.vertexTextures;let c=B.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(p,L,P,oA,GA){const tA=oA.fog,CA=GA.geometry,rA=p.isMeshStandardMaterial?oA.environment:null,NA=(p.isMeshStandardMaterial?I:A).get(p.envMap||rA),vA=NA&&NA.mapping===Wg?NA.image.height:null,uA=d[p.type];p.precision!==null&&(c=B.getMaxPrecision(p.precision),c!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",c,"instead."));const mA=CA.morphAttributes.position||CA.morphAttributes.normal||CA.morphAttributes.color,qA=mA!==void 0?mA.length:0;let CI=0;CA.morphAttributes.position!==void 0&&(CI=1),CA.morphAttributes.normal!==void 0&&(CI=2),CA.morphAttributes.color!==void 0&&(CI=3);let aA,KA,_A,_;if(uA){const mI=KC[uA];aA=mI.vertexShader,KA=mI.fragmentShader}else aA=p.vertexShader,KA=p.fragmentShader,t.update(p),_A=t.getVertexShaderID(p),_=t.getFragmentShaderID(p);const nI=Q.getRenderTarget(),zA=p.alphaTest>0,eI=p.clearcoat>0,aI=p.iridescence>0;return{isWebGL2:s,shaderID:uA,shaderName:p.type,vertexShader:aA,fragmentShader:KA,defines:p.defines,customVertexShaderID:_A,customFragmentShaderID:_,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:c,instancing:GA.isInstancedMesh===!0,instancingColor:GA.isInstancedMesh===!0&&GA.instanceColor!==null,supportsVertexTextures:a,outputEncoding:nI===null?Q.outputEncoding:nI.isXRRenderTarget===!0?nI.texture.encoding:tI,map:!!p.map,matcap:!!p.matcap,envMap:!!NA,envMapMode:NA&&NA.mapping,envMapCubeUVHeight:vA,lightMap:!!p.lightMap,aoMap:!!p.aoMap,emissiveMap:!!p.emissiveMap,bumpMap:!!p.bumpMap,normalMap:!!p.normalMap,objectSpaceNormalMap:p.normalMapType===GB,tangentSpaceNormalMap:p.normalMapType===_g,decodeVideoTexture:!!p.map&&p.map.isVideoTexture===!0&&p.map.encoding===gI,clearcoat:eI,clearcoatMap:eI&&!!p.clearcoatMap,clearcoatRoughnessMap:eI&&!!p.clearcoatRoughnessMap,clearcoatNormalMap:eI&&!!p.clearcoatNormalMap,iridescence:aI,iridescenceMap:aI&&!!p.iridescenceMap,iridescenceThicknessMap:aI&&!!p.iridescenceThicknessMap,displacementMap:!!p.displacementMap,roughnessMap:!!p.roughnessMap,metalnessMap:!!p.metalnessMap,specularMap:!!p.specularMap,specularIntensityMap:!!p.specularIntensityMap,specularColorMap:!!p.specularColorMap,opaque:p.transparent===!1&&p.blending===RI,alphaMap:!!p.alphaMap,alphaTest:zA,gradientMap:!!p.gradientMap,sheen:p.sheen>0,sheenColorMap:!!p.sheenColorMap,sheenRoughnessMap:!!p.sheenRoughnessMap,transmission:p.transmission>0,transmissionMap:!!p.transmissionMap,thicknessMap:!!p.thicknessMap,combine:p.combine,vertexTangents:!!p.normalMap&&!!CA.attributes.tangent,vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!CA.attributes.color&&CA.attributes.color.itemSize===4,vertexUvs:!!p.map||!!p.bumpMap||!!p.normalMap||!!p.specularMap||!!p.alphaMap||!!p.emissiveMap||!!p.roughnessMap||!!p.metalnessMap||!!p.clearcoatMap||!!p.clearcoatRoughnessMap||!!p.clearcoatNormalMap||!!p.iridescenceMap||!!p.iridescenceThicknessMap||!!p.displacementMap||!!p.transmissionMap||!!p.thicknessMap||!!p.specularIntensityMap||!!p.specularColorMap||!!p.sheenColorMap||!!p.sheenRoughnessMap,uvsVertexOnly:!(p.map||p.bumpMap||p.normalMap||p.specularMap||p.alphaMap||p.emissiveMap||p.roughnessMap||p.metalnessMap||p.clearcoatNormalMap||p.iridescenceMap||p.iridescenceThicknessMap||p.transmission>0||p.transmissionMap||p.thicknessMap||p.specularIntensityMap||p.specularColorMap||p.sheen>0||p.sheenColorMap||p.sheenRoughnessMap)&&!!p.displacementMap,fog:!!tA,useFog:p.fog===!0,fogExp2:tA&&tA.isFogExp2,flatShading:!!p.flatShading,sizeAttenuation:p.sizeAttenuation,logarithmicDepthBuffer:r,skinning:GA.isSkinnedMesh===!0,morphTargets:CA.morphAttributes.position!==void 0,morphNormals:CA.morphAttributes.normal!==void 0,morphColors:CA.morphAttributes.color!==void 0,morphTargetsCount:qA,morphTextureStride:CI,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:p.dithering,shadowMapEnabled:Q.shadowMap.enabled&&P.length>0,shadowMapType:Q.shadowMap.type,toneMapping:p.toneMapped?Q.toneMapping:yA,useLegacyLights:Q.useLegacyLights,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===gg,flipSided:p.side===cg,useDepthPacking:!!p.depthPacking,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionDerivatives:p.extensions&&p.extensions.derivatives,extensionFragDepth:p.extensions&&p.extensions.fragDepth,extensionDrawBuffers:p.extensions&&p.extensions.drawBuffers,extensionShaderTextureLOD:p.extensions&&p.extensions.shaderTextureLOD,rendererExtensionFragDepth:s||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:s||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:s||g.has("EXT_shader_texture_lod"),customProgramCacheKey:p.customProgramCacheKey()}}function w(p){const L=[];if(p.shaderID?L.push(p.shaderID):(L.push(p.customVertexShaderID),L.push(p.customFragmentShaderID)),p.defines!==void 0)for(const P in p.defines)L.push(P),L.push(p.defines[P]);return p.isRawShaderMaterial===!1&&(R(L,p),f(L,p),L.push(Q.outputEncoding)),L.push(p.customProgramCacheKey),L.join()}function R(p,L){p.push(L.precision),p.push(L.outputEncoding),p.push(L.envMapMode),p.push(L.envMapCubeUVHeight),p.push(L.combine),p.push(L.vertexUvs),p.push(L.fogExp2),p.push(L.sizeAttenuation),p.push(L.morphTargetsCount),p.push(L.morphAttributeCount),p.push(L.numDirLights),p.push(L.numPointLights),p.push(L.numSpotLights),p.push(L.numSpotLightMaps),p.push(L.numHemiLights),p.push(L.numRectAreaLights),p.push(L.numDirLightShadows),p.push(L.numPointLightShadows),p.push(L.numSpotLightShadows),p.push(L.numSpotLightShadowsWithMaps),p.push(L.shadowMapType),p.push(L.toneMapping),p.push(L.numClippingPlanes),p.push(L.numClipIntersection),p.push(L.depthPacking)}function f(p,L){i.disableAll(),L.isWebGL2&&i.enable(0),L.supportsVertexTextures&&i.enable(1),L.instancing&&i.enable(2),L.instancingColor&&i.enable(3),L.map&&i.enable(4),L.matcap&&i.enable(5),L.envMap&&i.enable(6),L.lightMap&&i.enable(7),L.aoMap&&i.enable(8),L.emissiveMap&&i.enable(9),L.bumpMap&&i.enable(10),L.normalMap&&i.enable(11),L.objectSpaceNormalMap&&i.enable(12),L.tangentSpaceNormalMap&&i.enable(13),L.clearcoat&&i.enable(14),L.clearcoatMap&&i.enable(15),L.clearcoatRoughnessMap&&i.enable(16),L.clearcoatNormalMap&&i.enable(17),L.iridescence&&i.enable(18),L.iridescenceMap&&i.enable(19),L.iridescenceThicknessMap&&i.enable(20),L.displacementMap&&i.enable(21),L.specularMap&&i.enable(22),L.roughnessMap&&i.enable(23),L.metalnessMap&&i.enable(24),L.gradientMap&&i.enable(25),L.alphaMap&&i.enable(26),L.alphaTest&&i.enable(27),L.vertexColors&&i.enable(28),L.vertexAlphas&&i.enable(29),L.vertexUvs&&i.enable(30),L.vertexTangents&&i.enable(31),L.uvsVertexOnly&&i.enable(32),p.push(i.mask),i.disableAll(),L.fog&&i.enable(0),L.useFog&&i.enable(1),L.flatShading&&i.enable(2),L.logarithmicDepthBuffer&&i.enable(3),L.skinning&&i.enable(4),L.morphTargets&&i.enable(5),L.morphNormals&&i.enable(6),L.morphColors&&i.enable(7),L.premultipliedAlpha&&i.enable(8),L.shadowMapEnabled&&i.enable(9),L.useLegacyLights&&i.enable(10),L.doubleSided&&i.enable(11),L.flipSided&&i.enable(12),L.useDepthPacking&&i.enable(13),L.dithering&&i.enable(14),L.specularIntensityMap&&i.enable(15),L.specularColorMap&&i.enable(16),L.transmission&&i.enable(17),L.transmissionMap&&i.enable(18),L.thicknessMap&&i.enable(19),L.sheen&&i.enable(20),L.sheenColorMap&&i.enable(21),L.sheenRoughnessMap&&i.enable(22),L.decodeVideoTexture&&i.enable(23),L.opaque&&i.enable(24),p.push(i.mask)}function u(p){const L=d[p.type];let P;if(L){const oA=KC[L];P=In.clone(oA.uniforms)}else P=p.uniforms;return P}function S(p,L){let P;for(let oA=0,GA=o.length;oA<GA;oA++){const tA=o[oA];if(tA.cacheKey===L){P=tA,++P.usedTimes;break}}return P===void 0&&(P=new ED(Q,L,p,C),o.push(P)),P}function U(p){if(--p.usedTimes===0){const L=o.indexOf(p);o[L]=o[o.length-1],o.pop(),p.destroy()}}function q(p){t.remove(p)}function V(){t.dispose()}return{getParameters:D,getProgramCacheKey:w,getUniforms:u,acquireProgram:S,releaseProgram:U,releaseShaderCache:q,programs:o,dispose:V}}function nD(){let Q=new WeakMap;function A(C){let E=Q.get(C);return E===void 0&&(E={},Q.set(C,E)),E}function I(C){Q.delete(C)}function g(C,E,i){Q.get(C)[E]=i}function B(){Q=new WeakMap}return{get:A,remove:I,update:g,dispose:B}}function sD(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.material.id!==A.material.id?Q.material.id-A.material.id:Q.z!==A.z?Q.z-A.z:Q.id-A.id}function Sn(Q,A){return Q.groupOrder!==A.groupOrder?Q.groupOrder-A.groupOrder:Q.renderOrder!==A.renderOrder?Q.renderOrder-A.renderOrder:Q.z!==A.z?A.z-Q.z:Q.id-A.id}function pn(){const Q=[];let A=0;const I=[],g=[],B=[];function C(){A=0,I.length=0,g.length=0,B.length=0}function E(r,a,c,d,D,w){let R=Q[A];return R===void 0?(R={id:r.id,object:r,geometry:a,material:c,groupOrder:d,renderOrder:r.renderOrder,z:D,group:w},Q[A]=R):(R.id=r.id,R.object=r,R.geometry=a,R.material=c,R.groupOrder=d,R.renderOrder=r.renderOrder,R.z=D,R.group=w),A++,R}function i(r,a,c,d,D,w){const R=E(r,a,c,d,D,w);c.transmission>0?g.push(R):c.transparent===!0?B.push(R):I.push(R)}function t(r,a,c,d,D,w){const R=E(r,a,c,d,D,w);c.transmission>0?g.unshift(R):c.transparent===!0?B.unshift(R):I.unshift(R)}function o(r,a){I.length>1&&I.sort(r||sD),g.length>1&&g.sort(a||Sn),B.length>1&&B.sort(a||Sn)}function s(){for(let r=A,a=Q.length;r<a;r++){const c=Q[r];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}}return{opaque:I,transmissive:g,transparent:B,init:C,push:i,unshift:t,finish:s,sort:o}}function aD(){let Q=new WeakMap;function A(g,B){const C=Q.get(g);let E;return C===void 0?(E=new pn,Q.set(g,[E])):B>=C.length?(E=new pn,C.push(E)):E=C[B],E}function I(){Q=new WeakMap}return{get:A,dispose:I}}function rD(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new K,color:new II};break;case"SpotLight":I={position:new K,direction:new K,color:new II,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new K,color:new II,distance:0,decay:0};break;case"HemisphereLight":I={direction:new K,skyColor:new II,groundColor:new II};break;case"RectAreaLight":I={color:new II,position:new K,halfWidth:new K,halfHeight:new K};break}return Q[A.id]=I,I}}}function hD(){const Q={};return{get:function(A){if(Q[A.id]!==void 0)return Q[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fA,shadowCameraNear:1,shadowCameraFar:1e3};break}return Q[A.id]=I,I}}}let cD=0;function DD(Q,A){return(A.castShadow?2:0)-(Q.castShadow?2:0)+(A.map?1:0)-(Q.map?1:0)}function lD(Q,A){const I=new rD,g=hD(),B={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let s=0;s<9;s++)B.probe.push(new K);const C=new K,E=new pI,i=new pI;function t(s,r){let a=0,c=0,d=0;for(let oA=0;oA<9;oA++)B.probe[oA].set(0,0,0);let D=0,w=0,R=0,f=0,u=0,S=0,U=0,q=0,V=0,p=0;s.sort(DD);const L=r===!0?Math.PI:1;for(let oA=0,GA=s.length;oA<GA;oA++){const tA=s[oA],CA=tA.color,rA=tA.intensity,NA=tA.distance,vA=tA.shadow&&tA.shadow.map?tA.shadow.map.texture:null;if(tA.isAmbientLight)a+=CA.r*rA*L,c+=CA.g*rA*L,d+=CA.b*rA*L;else if(tA.isLightProbe)for(let uA=0;uA<9;uA++)B.probe[uA].addScaledVector(tA.sh.coefficients[uA],rA);else if(tA.isDirectionalLight){const uA=I.get(tA);if(uA.color.copy(tA.color).multiplyScalar(tA.intensity*L),tA.castShadow){const mA=tA.shadow,qA=g.get(tA);qA.shadowBias=mA.bias,qA.shadowNormalBias=mA.normalBias,qA.shadowRadius=mA.radius,qA.shadowMapSize=mA.mapSize,B.directionalShadow[D]=qA,B.directionalShadowMap[D]=vA,B.directionalShadowMatrix[D]=tA.shadow.matrix,S++}B.directional[D]=uA,D++}else if(tA.isSpotLight){const uA=I.get(tA);uA.position.setFromMatrixPosition(tA.matrixWorld),uA.color.copy(CA).multiplyScalar(rA*L),uA.distance=NA,uA.coneCos=Math.cos(tA.angle),uA.penumbraCos=Math.cos(tA.angle*(1-tA.penumbra)),uA.decay=tA.decay,B.spot[R]=uA;const mA=tA.shadow;if(tA.map&&(B.spotLightMap[V]=tA.map,V++,mA.updateMatrices(tA),tA.castShadow&&p++),B.spotLightMatrix[R]=mA.matrix,tA.castShadow){const qA=g.get(tA);qA.shadowBias=mA.bias,qA.shadowNormalBias=mA.normalBias,qA.shadowRadius=mA.radius,qA.shadowMapSize=mA.mapSize,B.spotShadow[R]=qA,B.spotShadowMap[R]=vA,q++}R++}else if(tA.isRectAreaLight){const uA=I.get(tA);uA.color.copy(CA).multiplyScalar(rA),uA.halfWidth.set(tA.width*.5,0,0),uA.halfHeight.set(0,tA.height*.5,0),B.rectArea[f]=uA,f++}else if(tA.isPointLight){const uA=I.get(tA);if(uA.color.copy(tA.color).multiplyScalar(tA.intensity*L),uA.distance=tA.distance,uA.decay=tA.decay,tA.castShadow){const mA=tA.shadow,qA=g.get(tA);qA.shadowBias=mA.bias,qA.shadowNormalBias=mA.normalBias,qA.shadowRadius=mA.radius,qA.shadowMapSize=mA.mapSize,qA.shadowCameraNear=mA.camera.near,qA.shadowCameraFar=mA.camera.far,B.pointShadow[w]=qA,B.pointShadowMap[w]=vA,B.pointShadowMatrix[w]=tA.shadow.matrix,U++}B.point[w]=uA,w++}else if(tA.isHemisphereLight){const uA=I.get(tA);uA.skyColor.copy(tA.color).multiplyScalar(rA*L),uA.groundColor.copy(tA.groundColor).multiplyScalar(rA*L),B.hemi[u]=uA,u++}}f>0&&(A.isWebGL2||Q.has("OES_texture_float_linear")===!0?(B.rectAreaLTC1=PA.LTC_FLOAT_1,B.rectAreaLTC2=PA.LTC_FLOAT_2):Q.has("OES_texture_half_float_linear")===!0?(B.rectAreaLTC1=PA.LTC_HALF_1,B.rectAreaLTC2=PA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),B.ambient[0]=a,B.ambient[1]=c,B.ambient[2]=d;const P=B.hash;(P.directionalLength!==D||P.pointLength!==w||P.spotLength!==R||P.rectAreaLength!==f||P.hemiLength!==u||P.numDirectionalShadows!==S||P.numPointShadows!==U||P.numSpotShadows!==q||P.numSpotMaps!==V)&&(B.directional.length=D,B.spot.length=R,B.rectArea.length=f,B.point.length=w,B.hemi.length=u,B.directionalShadow.length=S,B.directionalShadowMap.length=S,B.pointShadow.length=U,B.pointShadowMap.length=U,B.spotShadow.length=q,B.spotShadowMap.length=q,B.directionalShadowMatrix.length=S,B.pointShadowMatrix.length=U,B.spotLightMatrix.length=q+V-p,B.spotLightMap.length=V,B.numSpotLightShadowsWithMaps=p,P.directionalLength=D,P.pointLength=w,P.spotLength=R,P.rectAreaLength=f,P.hemiLength=u,P.numDirectionalShadows=S,P.numPointShadows=U,P.numSpotShadows=q,P.numSpotMaps=V,B.version=cD++)}function o(s,r){let a=0,c=0,d=0,D=0,w=0;const R=r.matrixWorldInverse;for(let f=0,u=s.length;f<u;f++){const S=s[f];if(S.isDirectionalLight){const U=B.directional[a];U.direction.setFromMatrixPosition(S.matrixWorld),C.setFromMatrixPosition(S.target.matrixWorld),U.direction.sub(C),U.direction.transformDirection(R),a++}else if(S.isSpotLight){const U=B.spot[d];U.position.setFromMatrixPosition(S.matrixWorld),U.position.applyMatrix4(R),U.direction.setFromMatrixPosition(S.matrixWorld),C.setFromMatrixPosition(S.target.matrixWorld),U.direction.sub(C),U.direction.transformDirection(R),d++}else if(S.isRectAreaLight){const U=B.rectArea[D];U.position.setFromMatrixPosition(S.matrixWorld),U.position.applyMatrix4(R),i.identity(),E.copy(S.matrixWorld),E.premultiply(R),i.extractRotation(E),U.halfWidth.set(S.width*.5,0,0),U.halfHeight.set(0,S.height*.5,0),U.halfWidth.applyMatrix4(i),U.halfHeight.applyMatrix4(i),D++}else if(S.isPointLight){const U=B.point[c];U.position.setFromMatrixPosition(S.matrixWorld),U.position.applyMatrix4(R),c++}else if(S.isHemisphereLight){const U=B.hemi[w];U.direction.setFromMatrixPosition(S.matrixWorld),U.direction.transformDirection(R),w++}}}return{setup:t,setupView:o,state:B}}function Nn(Q,A){const I=new lD(Q,A),g=[],B=[];function C(){g.length=0,B.length=0}function E(r){g.push(r)}function i(r){B.push(r)}function t(r){I.setup(g,r)}function o(r){I.setupView(g,r)}return{init:C,state:{lightsArray:g,shadowsArray:B,lights:I},setupLights:t,setupLightsView:o,pushLight:E,pushShadow:i}}function wD(Q,A){let I=new WeakMap;function g(C,E=0){const i=I.get(C);let t;return i===void 0?(t=new Nn(Q,A),I.set(C,[t])):E>=i.length?(t=new Nn(Q,A),i.push(t)):t=i[E],t}function B(){I=new WeakMap}return{get:g,dispose:B}}class Qo extends cB{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jI,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class Eo extends cB{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new K,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const dD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
`):typeof readline=="function"&&(n=readline())!==null&&(n+=`
`);if(!n)return null;e.input=HE(n,!0)}return e.input.shift()},put_char:function(e,n){n===null||n===10?(jI(FQ(e.output,0)),e.output=[]):n!=0&&e.output.push(n)},fsync:function(e){e.output&&e.output.length>0&&(jI(FQ(e.output,0)),e.output=[])}},default_tty1_ops:{put_char:function(e,n){n===null||n===10?(kg(FQ(e.output,0)),e.output=[]):n!=0&&e.output.push(n)},fsync:function(e){e.output&&e.output.length>0&&(kg(FQ(e.output,0)),e.output=[])}}};function vt(e){tQ()}var JI={ops_table:null,mount:function(e){return JI.createNode(null,"/",16895,0)},createNode:function(e,n,h,y){if(G.isBlkdev(h)||G.isFIFO(h))throw new G.ErrnoError(63);JI.ops_table||(JI.ops_table={dir:{node:{getattr:JI.node_ops.getattr,setattr:JI.node_ops.setattr,lookup:JI.node_ops.lookup,mknod:JI.node_ops.mknod,rename:JI.node_ops.rename,unlink:JI.node_ops.unlink,rmdir:JI.node_ops.rmdir,readdir:JI.node_ops.readdir,symlink:JI.node_ops.symlink},stream:{llseek:JI.stream_ops.llseek}},file:{node:{getattr:JI.node_ops.getattr,setattr:JI.node_ops.setattr},stream:{llseek:JI.stream_ops.llseek,read:JI.stream_ops.read,write:JI.stream_ops.write,allocate:JI.stream_ops.allocate,mmap:JI.stream_ops.mmap,msync:JI.stream_ops.msync}},link:{node:{getattr:JI.node_ops.getattr,setattr:JI.node_ops.setattr,readlink:JI.node_ops.readlink},stream:{}},chrdev:{node:{getattr:JI.node_ops.getattr,setattr:JI.node_ops.setattr},stream:G.chrdev_stream_ops}});var F=G.createNode(e,n,h,y);return G.isDir(F.mode)?(F.node_ops=JI.ops_table.dir.node,F.stream_ops=JI.ops_table.dir.stream,F.contents={}):G.isFile(F.mode)?(F.node_ops=JI.ops_table.file.node,F.stream_ops=JI.ops_table.file.stream,F.usedBytes=0,F.contents=null):G.isLink(F.mode)?(F.node_ops=JI.ops_table.link.node,F.stream_ops=JI.ops_table.link.stream):G.isChrdev(F.mode)&&(F.node_ops=JI.ops_table.chrdev.node,F.stream_ops=JI.ops_table.chrdev.stream),F.timestamp=Date.now(),e&&(e.contents[n]=F,e.timestamp=F.timestamp),F},getFileDataAsTypedArray:function(e){return e.contents?e.contents.subarray?e.contents.subarray(0,e.usedBytes):new Uint8Array(e.contents):new Uint8Array(0)},expandFileStorage:function(e,n){var h=e.contents?e.contents.length:0;if(!(h>=n)){n=Math.max(n,h*(h<1048576?2:1.125)>>>0),h!=0&&(n=Math.max(n,256));var y=e.contents;e.contents=new Uint8Array(n),e.usedBytes>0&&e.contents.set(y.subarray(0,e.usedBytes),0)}},resizeFileStorage:function(e,n){if(e.usedBytes!=n)if(n==0)e.contents=null,e.usedBytes=0;else{var h=e.contents;e.contents=new Uint8Array(n),h&&e.contents.set(h.subarray(0,Math.min(n,e.usedBytes))),e.usedBytes=n}},node_ops:{getattr:function(e){var n={};return n.dev=G.isChrdev(e.mode)?e.id:1,n.ino=e.id,n.mode=e.mode,n.nlink=1,n.uid=0,n.gid=0,n.rdev=e.rdev,G.isDir(e.mode)?n.size=4096:G.isFile(e.mode)?n.size=e.usedBytes:G.isLink(e.mode)?n.size=e.link.length:n.size=0,n.atime=new Date(e.timestamp),n.mtime=new Date(e.timestamp),n.ctime=new Date(e.timestamp),n.blksize=4096,n.blocks=Math.ceil(n.size/n.blksize),n},setattr:function(e,n){n.mode!==void 0&&(e.mode=n.mode),n.timestamp!==void 0&&(e.timestamp=n.timestamp),n.size!==void 0&&JI.resizeFileStorage(e,n.size)},lookup:function(e,n){throw G.genericErrors[44]},mknod:function(e,n,h,y){return JI.createNode(e,n,h,y)},rename:function(e,n,h){if(G.isDir(e.mode)){var y;try{y=G.lookupNode(n,h)}catch{}if(y)for(var F in y.contents)throw new G.ErrnoError(55)}delete e.parent.contents[e.name],e.parent.timestamp=Date.now(),e.name=h,n.contents[h]=e,n.timestamp=e.parent.timestamp,e.parent=n},unlink:function(e,n){delete e.contents[n],e.timestamp=Date.now()},rmdir:function(e,n){var h=G.lookupNode(e,n);for(var y in h.contents)throw new G.ErrnoError(55);delete e.contents[n],e.timestamp=Date.now()},readdir:function(e){var n=[".",".."];for(var h in e.contents)e.contents.hasOwnProperty(h)&&n.push(h);return n},symlink:function(e,n,h){var y=JI.createNode(e,n,41471,0);return y.link=h,y},readlink:function(e){if(!G.isLink(e.mode))throw new G.ErrnoError(28);return e.link}},stream_ops:{read:function(e,n,h,y,F){var m=e.node.contents;if(F>=e.node.usedBytes)return 0;var v=Math.min(e.node.usedBytes-F,y);if(v>8&&m.subarray)n.set(m.subarray(F,F+v),h);else for(var T=0;T<v;T++)n[h+T]=m[F+T];return v},write:function(e,n,h,y,F,m){if(n.buffer===Hg.buffer&&(m=!1),!y)return 0;var v=e.node;if(v.timestamp=Date.now(),n.subarray&&(!v.contents||v.contents.subarray)){if(m)return v.contents=n.subarray(h,h+y),v.usedBytes=y,y;if(v.usedBytes===0&&F===0)return v.contents=n.slice(h,h+y),v.usedBytes=y,y;if(F+y<=v.usedBytes)return v.contents.set(n.subarray(h,h+y),F),y}if(JI.expandFileStorage(v,F+y),v.contents.subarray&&n.subarray)v.contents.set(n.subarray(h,h+y),F);else for(var T=0;T<y;T++)v.contents[F+T]=n[h+T];return v.usedBytes=Math.max(v.usedBytes,F+y),y},llseek:function(e,n,h){var y=n;if(h===1?y+=e.position:h===2&&G.isFile(e.node.mode)&&(y+=e.node.usedBytes),y<0)throw new G.ErrnoError(28);return y},allocate:function(e,n,h){JI.expandFileStorage(e.node,n+h),e.node.usedBytes=Math.max(e.node.usedBytes,n+h)},mmap:function(e,n,h,y,F){if(!G.isFile(e.node.mode))throw new G.ErrnoError(43);var m,v,T=e.node.contents;if(2&F||T.buffer!==XB){if((h>0||h+n<T.length)&&(T=T.subarray?T.subarray(h,h+n):Array.prototype.slice.call(T,h,h+n)),v=!0,!(m=vt()))throw new G.ErrnoError(48);Hg.set(T,m)}else v=!1,m=T.byteOffset;return{ptr:m,allocated:v}},msync:function(e,n,h,y,F){if(!G.isFile(e.node.mode))throw new G.ErrnoError(43);return 2&F||JI.stream_ops.write(e,n,0,y,h,!1),0}}},G={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!(e=MC.resolve(G.cwd(),e)))return{path:"",node:null};if((n=Object.assign({follow_mount:!0,recurse_count:0},n)).recurse_count>8)throw new G.ErrnoError(32);for(var h=$I.normalizeArray(e.split("/").filter(function(eA){return!!eA}),!1),y=G.root,F="/",m=0;m<h.length;m++){var v=m===h.length-1;if(v&&n.parent)break;if(y=G.lookupNode(y,h[m]),F=$I.join2(F,h[m]),G.isMountpoint(y)&&(!v||v&&n.follow_mount)&&(y=y.mounted.root),!v||n.follow)for(var T=0;G.isLink(y.mode);){var BA=G.readlink(F);if(F=MC.resolve($I.dirname(F),BA),y=G.lookupPath(F,{recurse_count:n.recurse_count+1}).node,T++>40)throw new G.ErrnoError(32)}}return{path:F,node:y}},getPath:function(e){for(var n;;){if(G.isRoot(e)){var h=e.mount.mountpoint;return n?h[h.length-1]!=="/"?h+"/"+n:h+n:h}n=n?e.name+"/"+n:e.name,e=e.parent}},hashName:function(e,n){for(var h=0,y=0;y<n.length;y++)h=(h<<5)-h+n.charCodeAt(y)|0;return(e+h>>>0)%G.nameTable.length},hashAddNode:function(e){var n=G.hashName(e.parent.id,e.name);e.name_next=G.nameTable[n],G.nameTable[n]=e},hashRemoveNode:function(e){var n=G.hashName(e.parent.id,e.name);if(G.nameTable[n]===e)G.nameTable[n]=e.name_next;else for(var h=G.nameTable[n];h;){if(h.name_next===e){h.name_next=e.name_next;break}h=h.name_next}},lookupNode:function(e,n){var h=G.mayLookup(e);if(h)throw new G.ErrnoError(h,e);for(var y=G.hashName(e.id,n),F=G.nameTable[y];F;F=F.name_next){var m=F.name;if(F.parent.id===e.id&&m===n)return F}return G.lookup(e,n)},createNode:function(e,n,h,y){var F=new G.FSNode(e,n,h,y);return G.hashAddNode(F),F},destroyNode:function(e){G.hashRemoveNode(e)},isRoot:function(e){return e===e.parent},isMountpoint:function(e){return!!e.mounted},isFile:function(e){return(61440&e)==32768},isDir:function(e){return(61440&e)==16384},isLink:function(e){return(61440&e)==40960},isChrdev:function(e){return(61440&e)==8192},isBlkdev:function(e){return(61440&e)==24576},isFIFO:function(e){return(61440&e)==4096},isSocket:function(e){return(49152&e)==49152},flagModes:{r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},modeStringToFlags:function(e){var n=G.flagModes[e];if(n===void 0)throw new Error("Unknown file open mode: "+e);return n},flagsToPermissionString:function(e){var n=["r","w","rw"][3&e];return 512&e&&(n+="w"),n},nodePermissions:function(e,n){return G.ignorePermissions||(!n.includes("r")||292&e.mode)&&(!n.includes("w")||146&e.mode)&&(!n.includes("x")||73&e.mode)?0:2},mayLookup:function(e){return G.nodePermissions(e,"x")||(e.node_ops.lookup?0:2)},mayCreate:function(e,n){try{return G.lookupNode(e,n),20}catch{}return G.nodePermissions(e,"wx")},mayDelete:function(e,n,h){var y;try{y=G.lookupNode(e,n)}catch(m){return m.errno}var F=G.nodePermissions(e,"wx");if(F)return F;if(h){if(!G.isDir(y.mode))return 54;if(G.isRoot(y)||G.getPath(y)===G.cwd())return 10}else if(G.isDir(y.mode))return 31;return 0},mayOpen:function(e,n){return e?G.isLink(e.mode)?32:G.isDir(e.mode)&&(G.flagsToPermissionString(n)!=="r"||512&n)?31:G.nodePermissions(e,G.flagsToPermissionString(n)):44},MAX_OPEN_FDS:4096,nextfd:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G.MAX_OPEN_FDS,h=e;h<=n;h++)if(!G.streams[h])return h;throw new G.ErrnoError(33)},getStream:function(e){return G.streams[e]},createStream:function(e,n,h){G.FSStream||(G.FSStream=function(){this.shared={}},G.FSStream.prototype={},Object.defineProperties(G.FSStream.prototype,{object:{get:function(){return this.node},set:function(F){this.node=F}},isRead:{get:function(){return(2097155&this.flags)!=1}},isWrite:{get:function(){return(2097155&this.flags)!=0}},isAppend:{get:function(){return 1024&this.flags}},flags:{get:function(){return this.shared.flags},set:function(F){this.shared.flags=F}},position:{get:function(){return this.shared.position},set:function(F){this.shared.position=F}}})),e=Object.assign(new G.FSStream,e);var y=G.nextfd(n,h);return e.fd=y,G.streams[y]=e,e},closeStream:function(e){G.streams[e]=null},chrdev_stream_ops:{open:function(e){var n=G.getDevice(e.node.rdev);e.stream_ops=n.stream_ops,e.stream_ops.open&&e.stream_ops.open(e)},llseek:function(){throw new G.ErrnoError(70)}},major:function(e){return e>>8},minor:function(e){return 255&e},makedev:function(e,n){return e<<8|n},registerDevice:function(e,n){G.devices[e]={stream_ops:n}},getDevice:function(e){return G.devices[e]},getMounts:function(e){for(var n=[],h=[e];h.length;){var y=h.pop();n.push(y),h.push.apply(h,y.mounts)}return n},syncfs:function(e,n){typeof e=="function"&&(n=e,e=!1),G.syncFSRequests++,G.syncFSRequests>1&&kg("warning: "+G.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var h=G.getMounts(G.root.mount),y=0;function F(v){return G.syncFSRequests--,n(v)}function m(v){if(v)return m.errored?void 0:(m.errored=!0,F(v));++y>=h.length&&F(null)}h.forEach(function(v){if(!v.type.syncfs)return m(null);v.type.syncfs(v,e,m)})},mount:function(e,n,h){var y,F=h==="/",m=!h;if(F&&G.root)throw new G.ErrnoError(10);if(!F&&!m){var v=G.lookupPath(h,{follow_mount:!1});if(h=v.path,y=v.node,G.isMountpoint(y))throw new G.ErrnoError(10);if(!G.isDir(y.mode))throw new G.ErrnoError(54)}var T={type:e,opts:n,mountpoint:h,mounts:[]},BA=e.mount(T);return BA.mount=T,T.root=BA,F?G.root=BA:y&&(y.mounted=T,y.mount&&y.mount.mounts.push(T)),BA},unmount:function(e){var n=G.lookupPath(e,{follow_mount:!1});if(!G.isMountpoint(n.node))throw new G.ErrnoError(28);var h=n.node,y=h.mounted,F=G.getMounts(y);Object.keys(G.nameTable).forEach(function(v){for(var T=G.nameTable[v];T;){var BA=T.name_next;F.includes(T.mount)&&G.destroyNode(T),T=BA}}),h.mounted=null;var m=h.mount.mounts.indexOf(y);h.mount.mounts.splice(m,1)},lookup:function(e,n){return e.node_ops.lookup(e,n)},mknod:function(e,n,h){var y=G.lookupPath(e,{parent:!0}).node,F=$I.basename(e);if(!F||F==="."||F==="..")throw new G.ErrnoError(28);var m=G.mayCreate(y,F);if(m)throw new G.ErrnoError(m);if(!y.node_ops.mknod)throw new G.ErrnoError(63);return y.node_ops.mknod(y,F,n,h)},create:function(e,n){return n=n!==void 0?n:438,n&=4095,n|=32768,G.mknod(e,n,0)},mkdir:function(e,n){return n=n!==void 0?n:511,n&=1023,n|=16384,G.mknod(e,n,0)},mkdirTree:function(e,n){for(var h=e.split("/"),y="",F=0;F<h.length;++F)if(h[F]){y+="/"+h[F];try{G.mkdir(y,n)}catch(m){if(m.errno!=20)throw m}}},mkdev:function(e,n,h){return h===void 0&&(h=n,n=438),n|=8192,G.mknod(e,n,h)},symlink:function(e,n){if(!MC.resolve(e))throw new G.ErrnoError(44);var h=G.lookupPath(n,{parent:!0}).node;if(!h)throw new G.ErrnoError(44);var y=$I.basename(n),F=G.mayCreate(h,y);if(F)throw new G.ErrnoError(F);if(!h.node_ops.symlink)throw new G.ErrnoError(63);return h.node_ops.symlink(h,y,e)},rename:function(e,n){var h,y,F=$I.dirname(e),m=$I.dirname(n),v=$I.basename(e),T=$I.basename(n);if(h=G.lookupPath(e,{parent:!0}).node,y=G.lookupPath(n,{parent:!0}).node,!h||!y)throw new G.ErrnoError(44);if(h.mount!==y.mount)throw new G.ErrnoError(75);var BA,eA=G.lookupNode(h,v),kA=MC.relative(e,m);if(kA.charAt(0)!==".")throw new G.ErrnoError(28);if((kA=MC.relative(n,F)).charAt(0)!==".")throw new G.ErrnoError(55);try{BA=G.lookupNode(y,T)}catch{}if(eA!==BA){var LA=G.isDir(eA.mode),sA=G.mayDelete(h,v,LA);if(sA)throw new G.ErrnoError(sA);if(sA=BA?G.mayDelete(y,T,LA):G.mayCreate(y,T))throw new G.ErrnoError(sA);if(!h.node_ops.rename)throw new G.ErrnoError(63);if(G.isMountpoint(eA)||BA&&G.isMountpoint(BA))throw new G.ErrnoError(10);if(y!==h&&(sA=G.nodePermissions(h,"w")))throw new G.ErrnoError(sA);G.hashRemoveNode(eA);try{h.node_ops.rename(eA,y,T)}catch(JA){throw JA}finally{G.hashAddNode(eA)}}},rmdir:function(e){var n=G.lookupPath(e,{parent:!0}).node,h=$I.basename(e),y=G.lookupNode(n,h),F=G.mayDelete(n,h,!0);if(F)throw new G.ErrnoError(F);if(!n.node_ops.rmdir)throw new G.ErrnoError(63);if(G.isMountpoint(y))throw new G.ErrnoError(10);n.node_ops.rmdir(n,h),G.destroyNode(y)},readdir:function(e){var n=G.lookupPath(e,{follow:!0}).node;if(!n.node_ops.readdir)throw new G.ErrnoError(54);return n.node_ops.readdir(n)},unlink:function(e){var n=G.lookupPath(e,{parent:!0}).node;if(!n)throw new G.ErrnoError(44);var h=$I.basename(e),y=G.lookupNode(n,h),F=G.mayDelete(n,h,!1);if(F)throw new G.ErrnoError(F);if(!n.node_ops.unlink)throw new G.ErrnoError(63);if(G.isMountpoint(y))throw new G.ErrnoError(10);n.node_ops.unlink(n,h),G.destroyNode(y)},readlink:function(e){var n=G.lookupPath(e).node;if(!n)throw new G.ErrnoError(44);if(!n.node_ops.readlink)throw new G.ErrnoError(28);return MC.resolve(G.getPath(n.parent),n.node_ops.readlink(n))},stat:function(e,n){var h=G.lookupPath(e,{follow:!n}).node;if(!h)throw new G.ErrnoError(44);if(!h.node_ops.getattr)throw new G.ErrnoError(63);return h.node_ops.getattr(h)},lstat:function(e){return G.stat(e,!0)},chmod:function(e,n,h){var y;if(!(y=typeof e=="string"?G.lookupPath(e,{follow:!h}).node:e).node_ops.setattr)throw new G.ErrnoError(63);y.node_ops.setattr(y,{mode:4095&n|-4096&y.mode,timestamp:Date.now()})},lchmod:function(e,n){G.chmod(e,n,!0)},fchmod:function(e,n){var h=G.getStream(e);if(!h)throw new G.ErrnoError(8);G.chmod(h.node,n)},chown:function(e,n,h,y){var F;if(!(F=typeof e=="string"?G.lookupPath(e,{follow:!y}).node:e).node_ops.setattr)throw new G.ErrnoError(63);F.node_ops.setattr(F,{timestamp:Date.now()})},lchown:function(e,n,h){G.chown(e,n,h,!0)},fchown:function(e,n,h){var y=G.getStream(e);if(!y)throw new G.ErrnoError(8);G.chown(y.node,n,h)},truncate:function(e,n){if(n<0)throw new G.ErrnoError(28);var h;if(!(h=typeof e=="string"?G.lookupPath(e,{follow:!0}).node:e).node_ops.setattr)throw new G.ErrnoError(63);if(G.isDir(h.mode))throw new G.ErrnoError(31);if(!G.isFile(h.mode))throw new G.ErrnoError(28);var y=G.nodePermissions(h,"w");if(y)throw new G.ErrnoError(y);h.node_ops.setattr(h,{size:n,timestamp:Date.now()})},ftruncate:function(e,n){var h=G.getStream(e);if(!h)throw new G.ErrnoError(8);if(!(2097155&h.flags))throw new G.ErrnoError(28);G.truncate(h.node,n)},utime:function(e,n,h){var y=G.lookupPath(e,{follow:!0}).node;y.node_ops.setattr(y,{timestamp:Math.max(n,h)})},open:function(e,n,h){if(e==="")throw new G.ErrnoError(44);var y;if(h=h===void 0?438:h,h=64&(n=typeof n=="string"?G.modeStringToFlags(n):n)?4095&h|32768:0,Cg(e)=="object")y=e;else{e=$I.normalize(e);try{y=G.lookupPath(e,{follow:!(131072&n)}).node}catch{}}var F=!1;if(64&n)if(y){if(128&n)throw new G.ErrnoError(20)}else y=G.mknod(e,h,0),F=!0;if(!y)throw new G.ErrnoError(44);if(G.isChrdev(y.mode)&&(n&=-513),65536&n&&!G.isDir(y.mode))throw new G.ErrnoError(54);if(!F){var m=G.mayOpen(y,n);if(m)throw new G.ErrnoError(m)}512&n&&!F&&G.truncate(y,0),n&=-131713;var v=G.createStream({node:y,path:G.getPath(y),flags:n,seekable:!0,position:0,stream_ops:y.stream_ops,ungotten:[],error:!1});return v.stream_ops.open&&v.stream_ops.open(v),!l.logReadFiles||1&n||(G.readFiles||(G.readFiles={}),e in G.readFiles||(G.readFiles[e]=1)),v},close:function(e){if(G.isClosed(e))throw new G.ErrnoError(8);e.getdents&&(e.getdents=null);try{e.stream_ops.close&&e.stream_ops.close(e)}catch(n){throw n}finally{G.closeStream(e.fd)}e.fd=null},isClosed:function(e){return e.fd===null},llseek:function(e,n,h){if(G.isClosed(e))throw new G.ErrnoError(8);if(!e.seekable||!e.stream_ops.llseek)throw new G.ErrnoError(70);if(h!=0&&h!=1&&h!=2)throw new G.ErrnoError(28);return e.position=e.stream_ops.llseek(e,n,h),e.ungotten=[],e.position},read:function(e,n,h,y,F){if(y<0||F<0)throw new G.ErrnoError(28);if(G.isClosed(e))throw new G.ErrnoError(8);if((2097155&e.flags)==1)throw new G.ErrnoError(8);if(G.isDir(e.node.mode))throw new G.ErrnoError(31);if(!e.stream_ops.read)throw new G.ErrnoError(28);var m=F!==void 0;if(m){if(!e.seekable)throw new G.ErrnoError(70)}else F=e.position;var v=e.stream_ops.read(e,n,h,y,F);return m||(e.position+=v),v},write:function(e,n,h,y,F,m){if(y<0||F<0)throw new G.ErrnoError(28);if(G.isClosed(e))throw new G.ErrnoError(8);if(!(2097155&e.flags))throw new G.ErrnoError(8);if(G.isDir(e.node.mode))throw new G.ErrnoError(31);if(!e.stream_ops.write)throw new G.ErrnoError(28);e.seekable&&1024&e.flags&&G.llseek(e,0,2);var v=F!==void 0;if(v){if(!e.seekable)throw new G.ErrnoError(70)}else F=e.position;var T=e.stream_ops.write(e,n,h,y,F,m);return v||(e.position+=T),T},allocate:function(e,n,h){if(G.isClosed(e))throw new G.ErrnoError(8);if(n<0||h<=0)throw new G.ErrnoError(28);if(!(2097155&e.flags))throw new G.ErrnoError(8);if(!G.isFile(e.node.mode)&&!G.isDir(e.node.mode))throw new G.ErrnoError(43);if(!e.stream_ops.allocate)throw new G.ErrnoError(138);e.stream_ops.allocate(e,n,h)},mmap:function(e,n,h,y,F){if(2&y&&!(2&F)&&(2097155&e.flags)!=2)throw new G.ErrnoError(2);if((2097155&e.flags)==1)throw new G.ErrnoError(2);if(!e.stream_ops.mmap)throw new G.ErrnoError(43);return e.stream_ops.mmap(e,n,h,y,F)},msync:function(e,n,h,y,F){return e&&e.stream_ops.msync?e.stream_ops.msync(e,n,h,y,F):0},munmap:function(e){return 0},ioctl:function(e,n,h){if(!e.stream_ops.ioctl)throw new G.ErrnoError(59);return e.stream_ops.ioctl(e,n,h)},readFile:function(e){var n,h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(h.flags=h.flags||0,h.encoding=h.encoding||"binary",h.encoding!=="utf8"&&h.encoding!=="binary")throw new Error('Invalid encoding type "'+h.encoding+'"');var y=G.open(e,h.flags),F=G.stat(e).size,m=new Uint8Array(F);return G.read(y,m,0,F,0),h.encoding==="utf8"?n=FQ(m,0):h.encoding==="binary"&&(n=m),G.close(y),n},writeFile:function(e,n){var h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};h.flags=h.flags||577;var y=G.open(e,h.flags,h.mode);if(typeof n=="string"){var F=new Uint8Array(KE(n)+1),m=JE(n,F,0,F.length);G.write(y,F,0,m,void 0,h.canOwn)}else{if(!ArrayBuffer.isView(n))throw new Error("Unsupported data type");G.write(y,n,0,n.byteLength,void 0,h.canOwn)}G.close(y)},cwd:function(){return G.currentPath},chdir:function(e){var n=G.lookupPath(e,{follow:!0});if(n.node===null)throw new G.ErrnoError(44);if(!G.isDir(n.node.mode))throw new G.ErrnoError(54);var h=G.nodePermissions(n.node,"x");if(h)throw new G.ErrnoError(h);G.currentPath=n.path},createDefaultDirectories:function(){G.mkdir("/tmp"),G.mkdir("/home"),G.mkdir("/home/web_user")},createDefaultDevices:function(){G.mkdir("/dev"),G.registerDevice(G.makedev(1,3),{read:function(){return 0},write:function(n,h,y,F,m){return F}}),G.mkdev("/dev/null",G.makedev(1,3)),gC.register(G.makedev(5,0),gC.default_tty_ops),gC.register(G.makedev(6,0),gC.default_tty1_ops),G.mkdev("/dev/tty",G.makedev(5,0)),G.mkdev("/dev/tty1",G.makedev(6,0));var e=function(){if((typeof crypto>"u"?"undefined":Cg(crypto))=="object"&&typeof crypto.getRandomValues=="function"){var n=new Uint8Array(1);return function(){return crypto.getRandomValues(n),n[0]}}if(ZA)try{var h=gg(654);return function(){return h.randomBytes(1)[0]}}catch{}return function(){return tQ("randomDevice")}}();G.createDevice("/dev","random",e),G.createDevice("/dev","urandom",e),G.mkdir("/dev/shm"),G.mkdir("/dev/shm/tmp")},createSpecialDirectories:function(){G.mkdir("/proc");var e=G.mkdir("/proc/self");G.mkdir("/proc/self/fd"),G.mount({mount:function(){var n=G.createNode(e,"fd",16895,73);return n.node_ops={lookup:function(h,y){var F=+y,m=G.getStream(F);if(!m)throw new G.ErrnoError(8);var v={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:function(){return m.path}}};return v.parent=v,v}},n}},{},"/proc/self/fd")},createStandardStreams:function(){l.stdin?G.createDevice("/dev","stdin",l.stdin):G.symlink("/dev/tty","/dev/stdin"),l.stdout?G.createDevice("/dev","stdout",null,l.stdout):G.symlink("/dev/tty","/dev/stdout"),l.stderr?G.createDevice("/dev","stderr",null,l.stderr):G.symlink("/dev/tty1","/dev/stderr"),G.open("/dev/stdin",0),G.open("/dev/stdout",1),G.open("/dev/stderr",1)},ensureErrnoError:function(){G.ErrnoError||(G.ErrnoError=function(e,n){this.node=n,this.setErrno=function(h){this.errno=h},this.setErrno(e),this.message="FS error"},G.ErrnoError.prototype=new Error,G.ErrnoError.prototype.constructor=G.ErrnoError,[44].forEach(function(e){G.genericErrors[e]=new G.ErrnoError(e),G.genericErrors[e].stack="<generic error, no stack>"}))},staticInit:function(){G.ensureErrnoError(),G.nameTable=new Array(4096),G.mount(JI,{},"/"),G.createDefaultDirectories(),G.createDefaultDevices(),G.createSpecialDirectories(),G.filesystems={MEMFS:JI}},init:function(e,n,h){G.init.initialized=!0,G.ensureErrnoError(),l.stdin=e||l.stdin,l.stdout=n||l.stdout,l.stderr=h||l.stderr,G.createStandardStreams()},quit:function(){G.init.initialized=!1;for(var e=0;e<G.streams.length;e++){var n=G.streams[e];n&&G.close(n)}},getMode:function(e,n){var h=0;return e&&(h|=365),n&&(h|=146),h},findObject:function(e,n){var h=G.analyzePath(e,n);return h.exists?h.object:null},analyzePath:function(e,n){try{e=(y=G.lookupPath(e,{follow:!n})).path}catch{}var h={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var y=G.lookupPath(e,{parent:!0});h.parentExists=!0,h.parentPath=y.path,h.parentObject=y.node,h.name=$I.basename(e),y=G.lookupPath(e,{follow:!n}),h.exists=!0,h.path=y.path,h.object=y.node,h.name=y.node.name,h.isRoot=y.path==="/"}catch(F){h.error=F.errno}return h},createPath:function(e,n,h,y){e=typeof e=="string"?e:G.getPath(e);for(var F=n.split("/").reverse();F.length;){var m=F.pop();if(m){var v=$I.join2(e,m);try{G.mkdir(v)}catch{}e=v}}return v},createFile:function(e,n,h,y,F){var m=$I.join2(typeof e=="string"?e:G.getPath(e),n),v=G.getMode(y,F);return G.create(m,v)},createDataFile:function(e,n,h,y,F,m){var v=n;e&&(e=typeof e=="string"?e:G.getPath(e),v=n?$I.join2(e,n):e);var T=G.getMode(y,F),BA=G.create(v,T);if(h){if(typeof h=="string"){for(var eA=new Array(h.length),kA=0,LA=h.length;kA<LA;++kA)eA[kA]=h.charCodeAt(kA);h=eA}G.chmod(BA,146|T);var sA=G.open(BA,577);G.write(sA,h,0,h.length,0,m),G.close(sA),G.chmod(BA,T)}return BA},createDevice:function(e,n,h,y){var F=$I.join2(typeof e=="string"?e:G.getPath(e),n),m=G.getMode(!!h,!!y);G.createDevice.major||(G.createDevice.major=64);var v=G.makedev(G.createDevice.major++,0);return G.registerDevice(v,{open:function(T){T.seekable=!1},close:function(T){y&&y.buffer&&y.buffer.length&&y(10)},read:function(T,BA,eA,kA,LA){for(var sA=0,JA=0;JA<kA;JA++){var SA;try{SA=h()}catch{throw new G.ErrnoError(29)}if(SA===void 0&&sA===0)throw new G.ErrnoError(6);if(SA==null)break;sA++,BA[eA+JA]=SA}return sA&&(T.node.timestamp=Date.now()),sA},write:function(T,BA,eA,kA,LA){for(var sA=0;sA<kA;sA++)try{y(BA[eA+sA])}catch{throw new G.ErrnoError(29)}return kA&&(T.node.timestamp=Date.now()),sA}}),G.mkdev(F,m,v)},forceLoadFile:function(e){if(e.isDevice||e.isFolder||e.link||e.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(!O)throw new Error("Cannot load without read() or XMLHttpRequest.");try{e.contents=HE(O(e.url),!0),e.usedBytes=e.contents.length}catch{throw new G.ErrnoError(29)}},createLazyFile:function(e,n,h,y,F){function m(){this.lengthKnown=!1,this.chunks=[]}if(m.prototype.get=function(LA){if(!(LA>this.length-1||LA<0)){var sA=LA%this.chunkSize,JA=LA/this.chunkSize|0;return this.getter(JA)[sA]}},m.prototype.setDataGetter=function(LA){this.getter=LA},m.prototype.cacheLength=function(){var LA=new XMLHttpRequest;if(LA.open("HEAD",h,!1),LA.send(null),!(LA.status>=200&&LA.status<300||LA.status===304))throw new Error("Couldn't load "+h+". Status: "+LA.status);var sA,JA=Number(LA.getResponseHeader("Content-length")),SA=(sA=LA.getResponseHeader("Accept-Ranges"))&&sA==="bytes",KI=(sA=LA.getResponseHeader("Content-Encoding"))&&sA==="gzip",NI=1048576;SA||(NI=JA);var XI=this;XI.setDataGetter(function(cA){var BI=cA*NI,Dg=(cA+1)*NI-1;if(Dg=Math.min(Dg,JA-1),XI.chunks[cA]===void 0&&(XI.chunks[cA]=function(lg,iB){if(lg>iB)throw new Error("invalid range ("+lg+", "+iB+") or no bytes requested!");if(iB>JA-1)throw new Error("only "+JA+" bytes available! programmer error!");var Vg=new XMLHttpRequest;if(Vg.open("GET",h,!1),JA!==NI&&Vg.setRequestHeader("Range","bytes="+lg+"-"+iB),Vg.responseType="arraybuffer",Vg.overrideMimeType&&Vg.overrideMimeType("text/plain; charset=x-user-defined"),Vg.send(null),!(Vg.status>=200&&Vg.status<300||Vg.status===304))throw new Error("Couldn't load "+h+". Status: "+Vg.status);return Vg.response!==void 0?new Uint8Array(Vg.response||[]):HE(Vg.responseText||"",!0)}(BI,Dg)),XI.chunks[cA]===void 0)throw new Error("doXHR failed!");return XI.chunks[cA]}),!KI&&JA||(NI=JA=1,JA=this.getter(0).length,NI=JA,jI("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=JA,this._chunkSize=NI,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){if(!pA)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var v=new m;Object.defineProperties(v,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var T={isDevice:!1,contents:v}}else T={isDevice:!1,url:h};var BA=G.createFile(e,n,T,y,F);T.contents?BA.contents=T.contents:T.url&&(BA.contents=null,BA.url=T.url),Object.defineProperties(BA,{usedBytes:{get:function(){return this.contents.length}}});var eA={};function kA(LA,sA,JA,SA,KI){var NI=LA.node.contents;if(KI>=NI.length)return 0;var XI=Math.min(NI.length-KI,SA);if(NI.slice)for(var cA=0;cA<XI;cA++)sA[JA+cA]=NI[KI+cA];else for(cA=0;cA<XI;cA++)sA[JA+cA]=NI.get(KI+cA);return XI}return Object.keys(BA.stream_ops).forEach(function(LA){var sA=BA.stream_ops[LA];eA[LA]=function(){return G.forceLoadFile(BA),sA.apply(null,arguments)}}),eA.read=function(LA,sA,JA,SA,KI){return G.forceLoadFile(BA),kA(LA,sA,JA,SA,KI)},eA.mmap=function(LA,sA,JA,SA,KI){G.forceLoadFile(BA);var NI=vt();if(!NI)throw new G.ErrnoError(48);return kA(LA,Hg,NI,sA,JA),{ptr:NI,allocated:!0}},BA.stream_ops=eA,BA},createPreloadedFile:function(e,n,h,y,F,m,v,T,BA,eA){var kA=n?MC.resolve($I.join2(e,n)):e;function LA(sA){function JA(SA){eA&&eA(),T||G.createDataFile(e,n,SA,y,F,BA),m&&m(),YE()}Browser.handledByPreloadPlugin(sA,kA,JA,function(){v&&v(),YE()})||JA(sA)}Hi(),typeof h=="string"?function(sA,JA,SA,KI){var NI="al "+sA;X(sA,function(XI){wg(XI,'Loading data file "'+sA+'" failed (no arrayBuffer).'),LA(new Uint8Array(XI)),NI&&YE()},function(XI){if(!SA)throw'Loading data file "'+sA+'" failed.';SA()}),NI&&Hi()}(h,0,v):LA(h)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:function(){return"EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(e,n,h){n=n||function(){},h=h||function(){};var y=G.indexedDB();try{var F=y.open(G.DB_NAME(),G.DB_VERSION)}catch(m){return h(m)}F.onupgradeneeded=function(){jI("creating db"),F.result.createObjectStore(G.DB_STORE_NAME)},F.onsuccess=function(){var m=F.result.transaction([G.DB_STORE_NAME],"readwrite"),v=m.objectStore(G.DB_STORE_NAME),T=0,BA=0,eA=e.length;function kA(){BA==0?n():h()}e.forEach(function(LA){var sA=v.put(G.analyzePath(LA).object.contents,LA);sA.onsuccess=function(){++T+BA==eA&&kA()},sA.onerror=function(){BA++,T+BA==eA&&kA()}}),m.onerror=h},F.onerror=h},loadFilesFromDB:function(e,n,h){n=n||function(){},h=h||function(){};var y=G.indexedDB();try{var F=y.open(G.DB_NAME(),G.DB_VERSION)}catch(m){return h(m)}F.onupgradeneeded=h,F.onsuccess=function(){var m=F.result;try{var v=m.transaction([G.DB_STORE_NAME],"readonly")}catch(sA){return void h(sA)}var T=v.objectStore(G.DB_STORE_NAME),BA=0,eA=0,kA=e.length;function LA(){eA==0?n():h()}e.forEach(function(sA){var JA=T.get(sA);JA.onsuccess=function(){G.analyzePath(sA).exists&&G.unlink(sA),G.createDataFile($I.dirname(sA),$I.basename(sA),JA.result,!0,!0,!0),++BA+eA==kA&&LA()},JA.onerror=function(){eA++,BA+eA==kA&&LA()}}),v.onerror=h},F.onerror=h}},Zg={DEFAULT_POLLMASK:5,calculateAt:function(e,n,h){if($I.isAbs(n))return n;var y;if(y=e===-100?G.cwd():Zg.getStreamFromFD(e).path,n.length==0){if(!h)throw new G.ErrnoError(44);return y}return $I.join2(y,n)},doStat:function(e,n,h){try{var y=e(n)}catch(F){if(F&&F.node&&$I.normalize(n)!==$I.normalize(G.getPath(F.node)))return-54;throw F}return oI[h>>2]=y.dev,oI[h+8>>2]=y.ino,oI[h+12>>2]=y.mode,zI[h+16>>2]=y.nlink,oI[h+20>>2]=y.uid,oI[h+24>>2]=y.gid,oI[h+28>>2]=y.rdev,Tg=[y.size>>>0,(OI=y.size,+Math.abs(OI)>=1?OI>0?(0|Math.min(+Math.floor(OI/4294967296),4294967295))>>>0:~~+Math.ceil((OI-+(~~OI>>>0))/4294967296)>>>0:0)],oI[h+40>>2]=Tg[0],oI[h+44>>2]=Tg[1],oI[h+48>>2]=4096,oI[h+52>>2]=y.blocks,Tg=[Math.floor(y.atime.getTime()/1e3)>>>0,(OI=Math.floor(y.atime.getTime()/1e3),+Math.abs(OI)>=1?OI>0?(0|Math.min(+Math.floor(OI/4294967296),4294967295))>>>0:~~+Math.ceil((OI-+(~~OI>>>0))/4294967296)>>>0:0)],oI[h+56>>2]=Tg[0],oI[h+60>>2]=Tg[1],zI[h+64>>2]=0,Tg=[Math.floor(y.mtime.getTime()/1e3)>>>0,(OI=Math.floor(y.mtime.getTime()/1e3),+Math.abs(OI)>=1?OI>0?(0|Math.min(+Math.floor(OI/4294967296),4294967295))>>>0:~~+Math.ceil((OI-+(~~OI>>>0))/4294967296)>>>0:0)],oI[h+72>>2]=Tg[0],oI[h+76>>2]=Tg[1],zI[h+80>>2]=0,Tg=[Math.floor(y.ctime.getTime()/1e3)>>>0,(OI=Math.floor(y.ctime.getTime()/1e3),+Math.abs(OI)>=1?OI>0?(0|Math.min(+Math.floor(OI/4294967296),4294967295))>>>0:~~+Math.ceil((OI-+(~~OI>>>0))/4294967296)>>>0:0)],oI[h+88>>2]=Tg[0],oI[h+92>>2]=Tg[1],zI[h+96>>2]=0,Tg=[y.ino>>>0,(OI=y.ino,+Math.abs(OI)>=1?OI>0?(0|Math.min(+Math.floor(OI/4294967296),4294967295))>>>0:~~+Math.ceil((OI-+(~~OI>>>0))/4294967296)>>>0:0)],oI[h+104>>2]=Tg[0],oI[h+108>>2]=Tg[1],0},doMsync:function(e,n,h,y,F){var m=$g.slice(e,e+h);G.msync(n,m,F,h,y)},varargs:void 0,get:function(){return Zg.varargs+=4,oI[Zg.varargs-4>>2]},getStr:function(e){return LE(e)},getStreamFromFD:function(e){var n=G.getStream(e);if(!n)throw new G.ErrnoError(8);return n}},bE={};function Wt(e){for(;e.length;){var n=e.pop();e.pop()(n)}}function $Q(e){return this.fromWireType(oI[e>>2])}var pQ={},nQ={},qE={};function AE(e){if(e===void 0)return"_unknown";var n=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return n>=48&&n<=57?"_"+e:e}function xE(e,n){return e=AE(e),new Function("body","return function "+e+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(n)}function vE(e,n){var h=xE(n,function(y){this.name=n,this.message=y;var F=new Error(y).stack;F!==void 0&&(this.stack=this.toString()+`
`+F.replace(/^Error(:[^\n]*)?\n/,""))});return h.prototype=Object.create(e.prototype),h.prototype.constructor=h,h.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},h}var Tt=void 0;function _B(e){throw new Tt(e)}function Ag(e,n,h){function y(T){var BA=h(T);BA.length!==e.length&&_B("Mismatched type converter count");for(var eA=0;eA<e.length;++eA)fC(e[eA],BA[eA])}e.forEach(function(T){qE[T]=n});var F=new Array(n.length),m=[],v=0;n.forEach(function(T,BA){nQ.hasOwnProperty(T)?F[BA]=nQ[T]:(m.push(T),pQ.hasOwnProperty(T)||(pQ[T]=[]),pQ[T].push(function(){F[BA]=nQ[T],++v===m.length&&y(F)}))}),m.length===0&&y(F)}function xi(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}var fA=void 0;function Qg(e){for(var n="",h=e;$g[h];)n+=fA[$g[h++]];return n}var ZC=void 0;function Bg(e){throw new ZC(e)}function fC(e,n){var h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!("argPackAdvance"in n))throw new TypeError("registerType registeredInstance requires argPackAdvance");var y=n.name;if(e||Bg('type "'+y+'" must have a positive integer typeid pointer'),nQ.hasOwnProperty(e)){if(h.ignoreDuplicateRegistrations)return;Bg("Cannot register type '"+y+"' twice")}if(nQ[e]=n,delete qE[e],pQ.hasOwnProperty(e)){var F=pQ[e];delete pQ[e],F.forEach(function(m){return m()})}}function OC(e){Bg(e.$$.ptrType.registeredClass.name+" instance already deleted")}var sQ=!1;function fB(e){}function K(e){e.count.value-=1,e.count.value===0&&function(n){n.smartPtr?n.smartPtrType.rawDestructor(n.smartPtr):n.ptrType.registeredClass.rawDestructor(n.ptr)}(e)}function WE(e,n,h){if(n===h)return e;if(h.baseClass===void 0)return null;var y=WE(e,n,h.baseClass);return y===null?null:h.downcast(y)}var vi={},rC=[];function IE(){for(;rC.length;){var e=rC.pop();e.$$.deleteScheduled=!1,e.delete()}}var gE=void 0,BE={};function BC(e,n){return n.ptrType&&n.ptr||_B("makeClassHandle requires ptr and ptrType"),!!n.smartPtrType!=!!n.smartPtr&&_B("Both smartPtrType and smartPtr must be specified"),n.count={value:1},CE(Object.create(e,{$$:{value:n}}))}function CE(e){return typeof FinalizationRegistry>"u"?(CE=function(n){return n},e):(sQ=new FinalizationRegistry(function(n){K(n.$$)}),CE=function(n){var h=n.$$;if(h.smartPtr){var y={$$:h};sQ.register(n,y,n)}return n},fB=function(n){return sQ.unregister(n)},CE(e))}function VC(){}function Zt(e,n,h){if(e[n].overloadTable===void 0){var y=e[n];e[n]=function(){return e[n].overloadTable.hasOwnProperty(arguments.length)||Bg("Function '"+h+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[n].overloadTable+")!"),e[n].overloadTable[arguments.length].apply(this,arguments)},e[n].overloadTable=[],e[n].overloadTable[y.argCount]=y}}function Ot(e,n,h){l.hasOwnProperty(e)?((h===void 0||l[e].overloadTable!==void 0&&l[e].overloadTable[h]!==void 0)&&Bg("Cannot register public name '"+e+"' twice"),Zt(l,e,e),l.hasOwnProperty(h)&&Bg("Cannot register multiple overloads of a function with the same number of arguments ("+h+")!"),l[e].overloadTable[h]=n):(l[e]=n,h!==void 0&&(l[e].numArguments=h))}function hB(e,n,h,y,F,m,v,T){this.name=e,this.constructor=n,this.instancePrototype=h,this.rawDestructor=y,this.baseClass=F,this.getActualType=m,this.upcast=v,this.downcast=T,this.pureVirtualFunctions=[]}function PC(e,n,h){for(;n!==h;)n.upcast||Bg("Expected null or instance of "+h.name+", got an instance of "+n.name),e=n.upcast(e),n=n.baseClass;return e}function Wi(e,n){if(n===null)return this.isReference&&Bg("null is not a valid "+this.name),0;n.$$||Bg('Cannot pass "'+XC(n)+'" as a '+this.name),n.$$.ptr||Bg("Cannot pass deleted object as a pointer of type "+this.name);var h=n.$$.ptrType.registeredClass;return PC(n.$$.ptr,h,this.registeredClass)}function aQ(e,n){var h;if(n===null)return this.isReference&&Bg("null is not a valid "+this.name),this.isSmartPointer?(h=this.rawConstructor(),e!==null&&e.push(this.rawDestructor,h),h):0;n.$$||Bg('Cannot pass "'+XC(n)+'" as a '+this.name),n.$$.ptr||Bg("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&n.$$.ptrType.isConst&&Bg("Cannot convert argument of type "+(n.$$.smartPtrType?n.$$.smartPtrType.name:n.$$.ptrType.name)+" to parameter type "+this.name);var y=n.$$.ptrType.registeredClass;if(h=PC(n.$$.ptr,y,this.registeredClass),this.isSmartPointer)switch(n.$$.smartPtr===void 0&&Bg("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:n.$$.smartPtrType===this?h=n.$$.smartPtr:Bg("Cannot convert argument of type "+(n.$$.smartPtrType?n.$$.smartPtrType.name:n.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:h=n.$$.smartPtr;break;case 2:if(n.$$.smartPtrType===this)h=n.$$.smartPtr;else{var F=n.clone();h=this.rawShare(h,pC.toHandle(function(){F.delete()})),e!==null&&e.push(this.rawDestructor,h)}break;default:Bg("Unsupporting sharing policy")}return h}function Ti(e,n){if(n===null)return this.isReference&&Bg("null is not a valid "+this.name),0;n.$$||Bg('Cannot pass "'+XC(n)+'" as a '+this.name),n.$$.ptr||Bg("Cannot pass deleted object as a pointer of type "+this.name),n.$$.ptrType.isConst&&Bg("Cannot convert argument of type "+n.$$.ptrType.name+" to parameter type "+this.name);var h=n.$$.ptrType.registeredClass;return PC(n.$$.ptr,h,this.registeredClass)}function FC(e,n,h,y,F,m,v,T,BA,eA,kA){this.name=e,this.registeredClass=n,this.isReference=h,this.isConst=y,this.isSmartPointer=F,this.pointeeType=m,this.sharingPolicy=v,this.rawGetPointee=T,this.rawConstructor=BA,this.rawShare=eA,this.rawDestructor=kA,F||n.baseClass!==void 0?this.toWireType=aQ:y?(this.toWireType=Wi,this.destructorFunction=null):(this.toWireType=Ti,this.destructorFunction=null)}function Jg(e,n,h){l.hasOwnProperty(e)||_B("Replacing nonexistant public symbol"),l[e].overloadTable!==void 0&&h!==void 0?l[e].overloadTable[h]=n:(l[e]=n,l[e].argCount=h)}function xI(e){return bt.get(e)}function CC(e,n,h){return e.includes("j")?function(y,F,m){var v=l["dynCall_"+y];return m&&m.length?v.apply(null,[F].concat(m)):v.call(null,F)}(e,n,h):xI(n).apply(null,h)}function JB(e,n){var h,y,F,m=(e=Qg(e)).includes("j")?(h=e,y=n,F=[],function(){return F.length=0,Object.assign(F,arguments),CC(h,y,F)}):xI(n);return typeof m!="function"&&Bg("unknown function pointer with signature "+e+": "+n),m}var Vt=void 0;function TE(e){var n=LC(e),h=Qg(n);return UC(n),h}function ZE(e,n){var h=[],y={};throw n.forEach(function F(m){y[m]||nQ[m]||(qE[m]?qE[m].forEach(F):(h.push(m),y[m]=!0))}),new Vt(e+": "+h.map(TE).join([", "]))}function Zi(e,n){for(var h=[],y=0;y<e;y++)h.push(zI[n+4*y>>2]);return h}function SC(e,n,h,y,F){var m=n.length;m<2&&Bg("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var v=n[1]!==null&&h!==null,T=!1,BA=1;BA<n.length;++BA)if(n[BA]!==null&&n[BA].destructorFunction===void 0){T=!0;break}var eA=n[0].name!=="void",kA="",LA="";for(BA=0;BA<m-2;++BA)kA+=(BA!==0?", ":"")+"arg"+BA,LA+=(BA!==0?", ":"")+"arg"+BA+"Wired";var sA="return function "+AE(e)+"("+kA+`) {
if (arguments.length !== `+(m-2)+`) {
throwBindingError('function `+e+" called with ' + arguments.length + ' arguments, expected "+(m-2)+` args!');
}
`;T&&(sA+=`var destructors = [];
`);var JA=T?"destructors":"null",SA=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],KI=[Bg,y,F,Wt,n[0],n[1]];for(v&&(sA+="var thisWired = classParam.toWireType("+JA+`, this);
`),BA=0;BA<m-2;++BA)sA+="var arg"+BA+"Wired = argType"+BA+".toWireType("+JA+", arg"+BA+"); // "+n[BA+2].name+`
`,SA.push("argType"+BA),KI.push(n[BA+2]);if(v&&(LA="thisWired"+(LA.length>0?", ":"")+LA),sA+=(eA?"var rv = ":"")+"invoker(fn"+(LA.length>0?", ":"")+LA+`);
`,T)sA+=`runDestructors(destructors);
`;else for(BA=v?1:2;BA<n.length;++BA){var NI=BA===1?"thisWired":"arg"+(BA-2)+"Wired";n[BA].destructorFunction!==null&&(sA+=NI+"_dtor("+NI+"); // "+n[BA].name+`
`,SA.push(NI+"_dtor"),KI.push(n[BA].destructorFunction))}return eA&&(sA+=`var ret = retType.fromWireType(rv);
return ret;
`),sA+=`}
`,SA.push(sA),function(XI,cA){if(!(XI instanceof Function))throw new TypeError("new_ called with constructor type "+Cg(XI)+" which is not a function");var BI=xE(XI.name||"unknownFunctionName",function(){});BI.prototype=XI.prototype;var Dg=new BI,lg=XI.apply(Dg,cA);return lg instanceof Object?lg:Dg}(Function,SA).apply(null,KI)}var QC=[],EB=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function OE(e){e>4&&--EB[e].refcount==0&&(EB[e]=void 0,QC.push(e))}var pC={toValue:function(e){return e||Bg("Cannot use deleted val. handle = "+e),EB[e].value},toHandle:function(e){switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var n=QC.length?QC.pop():EB.length;return EB[n]={refcount:1,value:e},n}}};function XC(e){if(e===null)return"null";var n=Cg(e);return n==="object"||n==="array"||n==="function"?e.toString():""+e}function NQ(e,n){switch(n){case 2:return function(h){return this.fromWireType(Kt[h>>2])};case 3:return function(h){return this.fromWireType(Ki[h>>3])};default:throw new TypeError("Unknown float type: "+e)}}function _C(e,n,h){switch(n){case 0:return h?function(y){return Hg[y]}:function(y){return $g[y]};case 1:return h?function(y){return RB[y>>1]}:function(y){return EQ[y>>1]};case 2:return h?function(y){return oI[y>>2]}:function(y){return zI[y>>2]};default:throw new TypeError("Unknown integer type: "+e)}}var NC=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function rQ(e,n){for(var h=e,y=h>>1,F=y+n/2;!(y>=F)&&EQ[y];)++y;if((h=y<<1)-e>32&&NC)return NC.decode($g.subarray(e,h));for(var m="",v=0;!(v>=n/2);++v){var T=RB[e+2*v>>1];if(T==0)break;m+=String.fromCharCode(T)}return m}function QE(e,n,h){if(h===void 0&&(h=2147483647),h<2)return 0;for(var y=n,F=(h-=2)<2*e.length?h/2:e.length,m=0;m<F;++m){var v=e.charCodeAt(m);RB[n>>1]=v,n+=2}return RB[n>>1]=0,n-y}function VE(e){return 2*e.length}function PE(e,n){for(var h=0,y="";!(h>=n/4);){var F=oI[e+4*h>>2];if(F==0)break;if(++h,F>=65536){var m=F-65536;y+=String.fromCharCode(55296|m>>10,56320|1023&m)}else y+=String.fromCharCode(F)}return y}function hQ(e,n,h){if(h===void 0&&(h=2147483647),h<4)return 0;for(var y=n,F=y+h-4,m=0;m<e.length;++m){var v=e.charCodeAt(m);if(v>=55296&&v<=57343&&(v=65536+((1023&v)<<10)|1023&e.charCodeAt(++m)),oI[n>>2]=v,(n+=4)+4>F)break}return oI[n>>2]=0,n-y}function Oi(e){for(var n=0,h=0;h<e.length;++h){var y=e.charCodeAt(h);y>=55296&&y<=57343&&++h,n+=4}return n}function Pt(e){var n=KE(e)+1,h=FB(n);return h&&JE(e,Hg,h,n),h}var cQ=[];function Vi(e){try{return _g.grow(e-XB.byteLength+65535>>>16),Ht(_g.buffer),1}catch{}}var mC={};function xB(){if(!xB.strings){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:((typeof navigator>"u"?"undefined":Cg(navigator))=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:z||"./this.program"};for(var n in mC)mC[n]===void 0?delete e[n]:e[n]=mC[n];var h=[];for(var n in e)h.push(n+"="+e[n]);xB.strings=h}return xB.strings}function mQ(e){return e%4==0&&(e%100!=0||e%400==0)}var EE=[31,29,31,30,31,30,31,31,30,31,30,31],kC=[31,28,31,30,31,30,31,31,30,31,30,31];function XE(e,n,h,y){var F=oI[y+40>>2],m={tm_sec:oI[y>>2],tm_min:oI[y+4>>2],tm_hour:oI[y+8>>2],tm_mday:oI[y+12>>2],tm_mon:oI[y+16>>2],tm_year:oI[y+20>>2],tm_wday:oI[y+24>>2],tm_yday:oI[y+28>>2],tm_isdst:oI[y+32>>2],tm_gmtoff:oI[y+36>>2],tm_zone:F?LE(F):""},v=LE(h),T={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var BA in T)v=v.replace(new RegExp(BA,"g"),T[BA]);var eA=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],kA=["January","February","March","April","May","June","July","August","September","October","November","December"];function LA(cA,BI,Dg){for(var lg=typeof cA=="number"?cA.toString():cA||"";lg.length<BI;)lg=Dg[0]+lg;return lg}function sA(cA,BI){return LA(cA,BI,"0")}function JA(cA,BI){function Dg(iB){return iB<0?-1:iB>0?1:0}var lg;return(lg=Dg(cA.getFullYear()-BI.getFullYear()))===0&&(lg=Dg(cA.getMonth()-BI.getMonth()))===0&&(lg=Dg(cA.getDate()-BI.getDate())),lg}function SA(cA){switch(cA.getDay()){case 0:return new Date(cA.getFullYear()-1,11,29);case 1:return cA;case 2:return new Date(cA.getFullYear(),0,3);case 3:return new Date(cA.getFullYear(),0,2);case 4:return new Date(cA.getFullYear(),0,1);case 5:return new Date(cA.getFullYear()-1,11,31);case 6:return new Date(cA.getFullYear()-1,11,30)}}function KI(cA){var BI=function(_i,SB){for(var vB=new Date(_i.getTime());SB>0;){var cB=mQ(vB.getFullYear()),_E=vB.getMonth(),jB=(cB?EE:kC)[_E];if(!(SB>jB-vB.getDate()))return vB.setDate(vB.getDate()+SB),vB;SB-=jB-vB.getDate()+1,vB.setDate(1),_E<11?vB.setMonth(_E+1):(vB.setMonth(0),vB.setFullYear(vB.getFullYear()+1))}return vB}(new Date(cA.tm_year+1900,0,1),cA.tm_yday),Dg=new Date(BI.getFullYear(),0,4),lg=new Date(BI.getFullYear()+1,0,4),iB=SA(Dg),Vg=SA(lg);return JA(iB,BI)<=0?JA(Vg,BI)<=0?BI.getFullYear()+1:BI.getFullYear():BI.getFullYear()-1}var NI={"%a":function(cA){return eA[cA.tm_wday].substring(0,3)},"%A":function(cA){return eA[cA.tm_wday]},"%b":function(cA){return kA[cA.tm_mon].substring(0,3)},"%B":function(cA){return kA[cA.tm_mon]},"%C":function(cA){return sA((cA.tm_year+1900)/100|0,2)},"%d":function(cA){return sA(cA.tm_mday,2)},"%e":function(cA){return LA(cA.tm_mday,2," ")},"%g":function(cA){return KI(cA).toString().substring(2)},"%G":function(cA){return KI(cA)},"%H":function(cA){return sA(cA.tm_hour,2)},"%I":function(cA){var BI=cA.tm_hour;return BI==0?BI=12:BI>12&&(BI-=12),sA(BI,2)},"%j":function(cA){return sA(cA.tm_mday+function(BI,Dg){for(var lg=0,iB=0;iB<=Dg;lg+=BI[iB++]);return lg}(mQ(cA.tm_year+1900)?EE:kC,cA.tm_mon-1),3)},"%m":function(cA){return sA(cA.tm_mon+1,2)},"%M":function(cA){return sA(cA.tm_min,2)},"%n":function(){return`
`},"%p":function(cA){return cA.tm_hour>=0&&cA.tm_hour<12?"AM":"PM"},"%S":function(cA){return sA(cA.tm_sec,2)},"%t":function(){return"	"},"%u":function(cA){return cA.tm_wday||7},"%U":function(cA){var BI=cA.tm_yday+7-cA.tm_wday;return sA(Math.floor(BI/7),2)},"%V":function(cA){var BI=Math.floor((cA.tm_yday+7-(cA.tm_wday+6)%7)/7);if((cA.tm_wday+371-cA.tm_yday-2)%7<=2&&BI++,BI){if(BI==53){var Dg=(cA.tm_wday+371-cA.tm_yday)%7;Dg==4||Dg==3&&mQ(cA.tm_year)||(BI=1)}}else{BI=52;var lg=(cA.tm_wday+7-cA.tm_yday-1)%7;(lg==4||lg==5&&mQ(cA.tm_year%400-1))&&BI++}return sA(BI,2)},"%w":function(cA){return cA.tm_wday},"%W":function(cA){var BI=cA.tm_yday+7-(cA.tm_wday+6)%7;return sA(Math.floor(BI/7),2)},"%y":function(cA){return(cA.tm_year+1900).toString().substring(2)},"%Y":function(cA){return cA.tm_year+1900},"%z":function(cA){var BI=cA.tm_gmtoff,Dg=BI>=0;return BI=(BI=Math.abs(BI)/60)/60*100+BI%60,(Dg?"+":"-")+("0000"+BI).slice(-4)},"%Z":function(cA){return cA.tm_zone},"%%":function(){return"%"}};for(var BA in v=v.replace(/%%/g,"\0\0"),NI)v.includes(BA)&&(v=v.replace(new RegExp(BA,"g"),NI[BA](m)));var XI=HE(v=v.replace(/\0\0/g,"%"),!1);return XI.length>n?0:(function(cA,BI){Hg.set(cA,BI)}(XI,e),XI.length-1)}var iE=function(e,n,h,y){e||(e=this),this.parent=e,this.mount=e.mount,this.mounted=null,this.id=G.nextInode++,this.name=n,this.mode=h,this.node_ops={},this.stream_ops={},this.rdev=y};Object.defineProperties(iE.prototype,{read:{get:function(){return(365&this.mode)==365},set:function(e){e?this.mode|=365:this.mode&=-366}},write:{get:function(){return(146&this.mode)==146},set:function(e){e?this.mode|=146:this.mode&=-147}},isFolder:{get:function(){return G.isDir(this.mode)}},isDevice:{get:function(){return G.isChrdev(this.mode)}}}),G.FSNode=iE,G.staticInit(),Tt=l.InternalError=vE(Error,"InternalError"),function(){for(var e=new Array(256),n=0;n<256;++n)e[n]=String.fromCharCode(n);fA=e}(),ZC=l.BindingError=vE(Error,"BindingError"),VC.prototype.isAliasOf=function(e){if(!(this instanceof VC)||!(e instanceof VC))return!1;for(var n=this.$$.ptrType.registeredClass,h=this.$$.ptr,y=e.$$.ptrType.registeredClass,F=e.$$.ptr;n.baseClass;)h=n.upcast(h),n=n.baseClass;for(;y.baseClass;)F=y.upcast(F),y=y.baseClass;return n===y&&h===F},VC.prototype.clone=function(){if(this.$$.ptr||OC(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e,n=CE(Object.create(Object.getPrototypeOf(this),{$$:{value:(e=this.$$,{count:e.count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType})}}));return n.$$.count.value+=1,n.$$.deleteScheduled=!1,n},VC.prototype.delete=function(){this.$$.ptr||OC(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Bg("Object already scheduled for deletion"),fB(this),K(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},VC.prototype.isDeleted=function(){return!this.$$.ptr},VC.prototype.deleteLater=function(){return this.$$.ptr||OC(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Bg("Object already scheduled for deletion"),rC.push(this),rC.length===1&&gE&&gE(IE),this.$$.deleteScheduled=!0,this},l.getInheritedInstanceCount=function(){return Object.keys(BE).length},l.getLiveInheritedInstances=function(){var e=[];for(var n in BE)BE.hasOwnProperty(n)&&e.push(BE[n]);return e},l.flushPendingDeletes=IE,l.setDelayFunction=function(e){gE=e,rC.length&&gE&&gE(IE)},FC.prototype.getPointee=function(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e},FC.prototype.destructor=function(e){this.rawDestructor&&this.rawDestructor(e)},FC.prototype.argPackAdvance=8,FC.prototype.readValueFromPointer=$Q,FC.prototype.deleteObject=function(e){e!==null&&e.delete()},FC.prototype.fromWireType=function(e){var n=this.getPointee(e);if(!n)return this.destructor(e),null;var h=function(eA,kA){return kA=function(LA,sA){for(sA===void 0&&Bg("ptr should not be undefined");LA.baseClass;)sA=LA.upcast(sA),LA=LA.baseClass;return sA}(eA,kA),BE[kA]}(this.registeredClass,n);if(h!==void 0){if(h.$$.count.value===0)return h.$$.ptr=n,h.$$.smartPtr=e,h.clone();var y=h.clone();return this.destructor(e),y}function F(){return this.isSmartPointer?BC(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:n,smartPtrType:this,smartPtr:e}):BC(this.registeredClass.instancePrototype,{ptrType:this,ptr:e})}var m,v=this.registeredClass.getActualType(n),T=vi[v];if(!T)return F.call(this);m=this.isConst?T.constPointerType:T.pointerType;var BA=WE(n,this.registeredClass,m.registeredClass);return BA===null?F.call(this):this.isSmartPointer?BC(m.registeredClass.instancePrototype,{ptrType:m,ptr:BA,smartPtrType:this,smartPtr:e}):BC(m.registeredClass.instancePrototype,{ptrType:m,ptr:BA})},Vt=l.UnboundTypeError=vE(Error,"UnboundTypeError"),l.count_emval_handles=function(){for(var e=0,n=5;n<EB.length;++n)EB[n]!==void 0&&++e;return e},l.get_first_emval=function(){for(var e=5;e<EB.length;++e)if(EB[e]!==void 0)return EB[e];return null};var Pi=typeof atob=="function"?atob:function(e){var n,h,y,F,m,v,T="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",BA="",eA=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");do n=T.indexOf(e.charAt(eA++))<<2|(F=T.indexOf(e.charAt(eA++)))>>4,h=(15&F)<<4|(m=T.indexOf(e.charAt(eA++)))>>2,y=(3&m)<<6|(v=T.indexOf(e.charAt(eA++))),BA+=String.fromCharCode(n),m!==64&&(BA+=String.fromCharCode(h)),v!==64&&(BA+=String.fromCharCode(y));while(eA<e.length);return BA};function hC(e){if(IC(e))return function(n){if(typeof ZA=="boolean"&&ZA){var h=Buffer.from(n,"base64");return new Uint8Array(h.buffer,h.byteOffset,h.byteLength)}try{for(var y=Pi(n),F=new Uint8Array(y.length),m=0;m<y.length;++m)F[m]=y.charCodeAt(m);return F}catch{throw new Error("Converting base64 string to bytes failed.")}}(e.slice(zQ.length))}var pI,kQ={g:function(e){return FB(e+24)+24},f:function(e,n,h){throw new bg(e).init(n,h),e},o:function(e,n,h){Zg.varargs=h;try{var y=Zg.getStreamFromFD(e);switch(n){case 0:return(F=Zg.get())<0?-28:G.createStream(y,F).fd;case 1:case 2:case 6:case 7:return 0;case 3:return y.flags;case 4:var F=Zg.get();return y.flags|=F,0;case 5:return F=Zg.get(),RB[F+0>>1]=2,0;case 16:case 8:default:return-28;case 9:return oI[Xt()>>2]=28,-1}}catch(m){if(G===void 0||!(m instanceof G.ErrnoError))throw m;return-m.errno}},G:function(e,n,h){Zg.varargs=h;try{var y=Zg.getStreamFromFD(e);switch(n){case 21509:case 21505:case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:case 21523:case 21524:return y.tty?0:-59;case 21519:if(!y.tty)return-59;var F=Zg.get();return oI[F>>2]=0,0;case 21520:return y.tty?-28:-59;case 21531:return F=Zg.get(),G.ioctl(y,n,F);default:return-28}}catch(m){if(G===void 0||!(m instanceof G.ErrnoError))throw m;return-m.errno}},H:function(e,n,h,y){Zg.varargs=y;try{n=Zg.getStr(n),n=Zg.calculateAt(e,n);var F=y?Zg.get():0;return G.open(n,h,F).fd}catch(m){if(G===void 0||!(m instanceof G.ErrnoError))throw m;return-m.errno}},R:function(e){var n=bE[e];delete bE[e];var h=n.rawConstructor,y=n.rawDestructor,F=n.fields;Ag([e],F.map(function(m){return m.getterReturnType}).concat(F.map(function(m){return m.setterArgumentType})),function(m){var v={};return F.forEach(function(T,BA){var eA=T.fieldName,kA=m[BA],LA=T.getter,sA=T.getterContext,JA=m[BA+F.length],SA=T.setter,KI=T.setterContext;v[eA]={read:function(NI){return kA.fromWireType(LA(sA,NI))},write:function(NI,XI){var cA=[];SA(KI,NI,JA.toWireType(cA,XI)),Wt(cA)}}}),[{name:n.name,fromWireType:function(T){var BA={};for(var eA in v)BA[eA]=v[eA].read(T);return y(T),BA},toWireType:function(T,BA){for(var eA in v)if(!(eA in BA))throw new TypeError('Missing field:  "'+eA+'"');var kA=h();for(eA in v)v[eA].write(kA,BA[eA]);return T!==null&&T.push(y,kA),kA},argPackAdvance:8,readValueFromPointer:$Q,destructorFunction:y}]})},y:function(e,n,h,y,F){},L:function(e,n,h,y,F){var m=xi(h);fC(e,{name:n=Qg(n),fromWireType:function(v){return!!v},toWireType:function(v,T){return T?y:F},argPackAdvance:8,readValueFromPointer:function(v){var T;if(h===1)T=Hg;else if(h===2)T=RB;else{if(h!==4)throw new TypeError("Unknown boolean type size: "+n);T=oI}return this.fromWireType(T[v>>m])},destructorFunction:null})},U:function(e,n,h,y,F,m,v,T,BA,eA,kA,LA,sA){kA=Qg(kA),m=JB(F,m),T&&(T=JB(v,T)),eA&&(eA=JB(BA,eA)),sA=JB(LA,sA);var JA=AE(kA);Ot(JA,function(){ZE("Cannot construct "+kA+" due to unbound types",[y])}),Ag([e,n,h],y?[y]:[],function(SA){var KI,NI;SA=SA[0],NI=y?(KI=SA.registeredClass).instancePrototype:VC.prototype;var XI=xE(JA,function(){if(Object.getPrototypeOf(this)!==cA)throw new ZC("Use 'new' to construct "+kA);if(BI.constructor_body===void 0)throw new ZC(kA+" has no accessible constructor");var Vg=BI.constructor_body[arguments.length];if(Vg===void 0)throw new ZC("Tried to invoke ctor of "+kA+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(BI.constructor_body).toString()+") parameters instead!");return Vg.apply(this,arguments)}),cA=Object.create(NI,{constructor:{value:XI}});XI.prototype=cA;var BI=new hB(kA,XI,cA,sA,KI,m,T,eA),Dg=new FC(kA,BI,!0,!1,!1),lg=new FC(kA+"*",BI,!1,!1,!1),iB=new FC(kA+" const*",BI,!1,!0,!1);return vi[e]={pointerType:lg,constPointerType:iB},Jg(JA,XI),[Dg,lg,iB]})},Q:function(e,n,h,y,F,m){wg(n>0);var v=Zi(n,h);F=JB(y,F),Ag([],[e],function(T){var BA="constructor "+(T=T[0]).name;if(T.registeredClass.constructor_body===void 0&&(T.registeredClass.constructor_body=[]),T.registeredClass.constructor_body[n-1]!==void 0)throw new ZC("Cannot register multiple constructors with identical number of parameters ("+(n-1)+") for class '"+T.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return T.registeredClass.constructor_body[n-1]=function(){ZE("Cannot construct "+T.name+" due to unbound types",v)},Ag([],v,function(eA){return eA.splice(1,0,null),T.registeredClass.constructor_body[n-1]=SC(BA,eA,null,F,m),[]}),[]})},h:function(e,n,h,y,F,m,v,T){var BA=Zi(h,y);n=Qg(n),m=JB(F,m),Ag([],[e],function(eA){var kA=(eA=eA[0]).name+"."+n;function LA(){ZE("Cannot call "+kA+" due to unbound types",BA)}n.startsWith("@@")&&(n=Symbol[n.substring(2)]),T&&eA.registeredClass.pureVirtualFunctions.push(n);var sA=eA.registeredClass.instancePrototype,JA=sA[n];return JA===void 0||JA.overloadTable===void 0&&JA.className!==eA.name&&JA.argCount===h-2?(LA.argCount=h-2,LA.className=eA.name,sA[n]=LA):(Zt(sA,n,kA),sA[n].overloadTable[h-2]=LA),Ag([],BA,function(SA){var KI=SC(kA,SA,eA,m,v);return sA[n].overloadTable===void 0?(KI.argCount=h-2,sA[n]=KI):sA[n].overloadTable[h-2]=KI,[]}),[]})},s:function(e,n,h){e=Qg(e),Ag([],[n],function(y){return y=y[0],l[e]=y.fromWireType(h),[]})},K:function(e,n){fC(e,{name:n=Qg(n),fromWireType:function(h){var y=pC.toValue(h);return OE(h),y},toWireType:function(h,y){return pC.toHandle(y)},argPackAdvance:8,readValueFromPointer:$Q,destructorFunction:null})},r:function(e,n,h){var y=xi(h);fC(e,{name:n=Qg(n),fromWireType:function(F){return F},toWireType:function(F,m){return m},argPackAdvance:8,readValueFromPointer:NQ(n,y),destructorFunction:null})},d:function(e,n,h,y,F,m){var v=Zi(n,h);e=Qg(e),F=JB(y,F),Ot(e,function(){ZE("Cannot call "+e+" due to unbound types",v)},n-1),Ag([],v,function(T){var BA=[T[0],null].concat(T.slice(1));return Jg(e,SC(e,BA,null,F,m),n-1),[]})},e:function(e,n,h,y,F){n=Qg(n);var m=xi(h),v=function(eA){return eA};if(y===0){var T=32-8*h;v=function(eA){return eA<<T>>>T}}var BA=n.includes("unsigned");fC(e,{name:n,fromWireType:v,toWireType:BA?function(eA,kA){return this.name,kA>>>0}:function(eA,kA){return this.name,kA},argPackAdvance:8,readValueFromPointer:_C(n,m,y!==0),destructorFunction:null})},c:function(e,n,h){var y=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][n];function F(m){var v=zI,T=v[m>>=2],BA=v[m+1];return new y(XB,BA,T)}fC(e,{name:h=Qg(h),fromWireType:F,argPackAdvance:8,readValueFromPointer:F},{ignoreDuplicateRegistrations:!0})},q:function(e,n){var h=(n=Qg(n))==="std::string";fC(e,{name:n,fromWireType:function(y){var F,m=zI[y>>2],v=y+4;if(h)for(var T=v,BA=0;BA<=m;++BA){var eA=v+BA;if(BA==m||$g[eA]==0){var kA=LE(T,eA-T);F===void 0?F=kA:(F+="\0",F+=kA),T=eA+1}}else{var LA=new Array(m);for(BA=0;BA<m;++BA)LA[BA]=String.fromCharCode($g[v+BA]);F=LA.join("")}return UC(y),F},toWireType:function(y,F){var m;F instanceof ArrayBuffer&&(F=new Uint8Array(F));var v=typeof F=="string";v||F instanceof Uint8Array||F instanceof Uint8ClampedArray||F instanceof Int8Array||Bg("Cannot pass non-string to std::string"),m=h&&v?KE(F):F.length;var T=FB(4+m+1),BA=T+4;if(zI[T>>2]=m,h&&v)JE(F,$g,BA,m+1);else if(v)for(var eA=0;eA<m;++eA){var kA=F.charCodeAt(eA);kA>255&&(UC(BA),Bg("String has UTF-16 code units that do not fit in 8 bits")),$g[BA+eA]=kA}else for(eA=0;eA<m;++eA)$g[BA+eA]=F[eA];return y!==null&&y.push(UC,T),T},argPackAdvance:8,readValueFromPointer:$Q,destructorFunction:function(y){UC(y)}})},l:function(e,n,h){var y,F,m,v,T;h=Qg(h),n===2?(y=rQ,F=QE,v=VE,m=function(){return EQ},T=1):n===4&&(y=PE,F=hQ,v=Oi,m=function(){return zI},T=2),fC(e,{name:h,fromWireType:function(BA){for(var eA,kA=zI[BA>>2],LA=m(),sA=BA+4,JA=0;JA<=kA;++JA){var SA=BA+4+JA*n;if(JA==kA||LA[SA>>T]==0){var KI=y(sA,SA-sA);eA===void 0?eA=KI:(eA+="\0",eA+=KI),sA=SA+n}}return UC(BA),eA},toWireType:function(BA,eA){typeof eA!="string"&&Bg("Cannot pass non-string to C++ string type "+h);var kA=v(eA),LA=FB(4+kA+n);return zI[LA>>2]=kA>>T,F(eA,LA+4,kA+n),BA!==null&&BA.push(UC,LA),LA},argPackAdvance:8,readValueFromPointer:$Q,destructorFunction:function(BA){UC(BA)}})},T:function(e,n,h,y,F,m){bE[e]={name:Qg(n),rawConstructor:JB(h,y),rawDestructor:JB(F,m),fields:[]}},S:function(e,n,h,y,F,m,v,T,BA,eA){bE[e].fields.push({fieldName:Qg(n),getterReturnType:h,getter:JB(y,F),getterContext:m,setterArgumentType:v,setter:JB(T,BA),setterContext:eA})},M:function(e,n){fC(e,{isVoid:!0,name:n=Qg(n),argPackAdvance:0,fromWireType:function(){},toWireType:function(h,y){}})},p:function(){return Date.now()},A:function(){throw 1/0},O:OE,P:function(e){e>4&&(EB[e].refcount+=1)},N:function(e,n){var h,y;(y=nQ[h=e])===void 0&&Bg("_emval_take_value has unknown type "+TE(h));var F=(e=y).readValueFromPointer(n);return pC.toHandle(F)},I:function(e,n){var h,y=new Date(1e3*(zI[(h=e)>>2]+4294967296*oI[h+4>>2]));oI[n>>2]=y.getSeconds(),oI[n+4>>2]=y.getMinutes(),oI[n+8>>2]=y.getHours(),oI[n+12>>2]=y.getDate(),oI[n+16>>2]=y.getMonth(),oI[n+20>>2]=y.getFullYear()-1900,oI[n+24>>2]=y.getDay();var F=new Date(y.getFullYear(),0,1),m=(y.getTime()-F.getTime())/864e5|0;oI[n+28>>2]=m,oI[n+36>>2]=-60*y.getTimezoneOffset();var v=new Date(y.getFullYear(),6,1).getTimezoneOffset(),T=F.getTimezoneOffset(),BA=0|(v!=T&&y.getTimezoneOffset()==Math.min(T,v));oI[n+32>>2]=BA},J:function e(n,h,y){e.called||(e.called=!0,function(F,m,v){var T=new Date().getFullYear(),BA=new Date(T,0,1),eA=new Date(T,6,1),kA=BA.getTimezoneOffset(),LA=eA.getTimezoneOffset(),sA=Math.max(kA,LA);function JA(cA){var BI=cA.toTimeString().match(/\(([A-Za-z ]+)\)$/);return BI?BI[1]:"GMT"}oI[F>>2]=60*sA,oI[m>>2]=+(kA!=LA);var SA=JA(BA),KI=JA(eA),NI=Pt(SA),XI=Pt(KI);LA<kA?(zI[v>>2]=NI,zI[v+4>>2]=XI):(zI[v>>2]=XI,zI[v+4>>2]=NI)}(n,h,y))},a:function(){tQ("")},i:function(e,n,h){var y=function(F,m){var v;for(cQ.length=0,m>>=2;v=$g[F++];)m+=v!=105&m,cQ.push(v==105?oI[m]:Ki[m++>>1]),++m;return cQ}(n,h);return eQ[e].apply(null,y)},B:function(e){var n=$g.length,h=2147483648;if((e>>>=0)>h)return!1;for(var y,F=1;F<=4;F*=2){var m=n*(1+.2/F);if(m=Math.min(m,e+100663296),Vi(Math.min(h,(y=Math.max(e,m))+(65536-y%65536)%65536)))return!0}return!1},C:function(e,n){var h=0;return xB().forEach(function(y,F){var m=n+h;zI[e+4*F>>2]=m,function(v,T,BA){for(var eA=0;eA<v.length;++eA)Hg[T++>>0]=v.charCodeAt(eA);Hg[T>>0]=0}(y,m),h+=y.length+1}),0},D:function(e,n){var h=xB();zI[e>>2]=h.length;var y=0;return h.forEach(function(F){y+=F.length+1}),zI[n>>2]=y,0},b:function(e,n){var h;h=e,xt()||(l.onExit&&l.onExit(h),TC=!0),xA(h,new oQ(h))},m:function(e){try{var n=Zg.getStreamFromFD(e);return G.close(n),0}catch(h){if(G===void 0||!(h instanceof G.ErrnoError))throw h;return h.errno}},F:function(e,n,h,y){try{var F=function(m,v,T,BA){for(var eA=0,kA=0;kA<T;kA++){var LA=zI[v>>2],sA=zI[v+4>>2];v+=8;var JA=G.read(m,Hg,LA,sA,void 0);if(JA<0)return-1;if(eA+=JA,JA<sA)break}return eA}(Zg.getStreamFromFD(e),n,h);return zI[y>>2]=F,0}catch(m){if(G===void 0||!(m instanceof G.ErrnoError))throw m;return m.errno}},x:function(e,n,h,y,F){try{var m=(BA=h)+2097152>>>0<4194305-!!(T=n)?(T>>>0)+4294967296*BA:NaN;if(isNaN(m))return 61;var v=Zg.getStreamFromFD(e);return G.llseek(v,m,y),Tg=[v.position>>>0,(OI=v.position,+Math.abs(OI)>=1?OI>0?(0|Math.min(+Math.floor(OI/4294967296),4294967295))>>>0:~~+Math.ceil((OI-+(~~OI>>>0))/4294967296)>>>0:0)],oI[F>>2]=Tg[0],oI[F+4>>2]=Tg[1],v.getdents&&m===0&&y===0&&(v.getdents=null),0}catch(eA){if(G===void 0||!(eA instanceof G.ErrnoError))throw eA;return eA.errno}var T,BA},n:function(e,n,h,y){try{var F=function(m,v,T,BA){for(var eA=0,kA=0;kA<T;kA++){var LA=zI[v>>2],sA=zI[v+4>>2];v+=8;var JA=G.write(m,Hg,LA,sA,void 0);if(JA<0)return-1;eA+=JA}return eA}(Zg.getStreamFromFD(e),n,h);return zI[y>>2]=F,0}catch(m){if(G===void 0||!(m instanceof G.ErrnoError))throw m;return m.errno}},t:function(e,n){var h=Og();try{return xI(e)(n)}catch(y){if(JC(h),y!==y+0)throw y;EC(1,0)}},v:function(e,n,h){var y=Og();try{return xI(e)(n,h)}catch(F){if(JC(y),F!==F+0)throw F;EC(1,0)}},u:function(e,n,h,y){var F=Og();try{return xI(e)(n,h,y)}catch(m){if(JC(F),m!==m+0)throw m;EC(1,0)}},j:function(e,n){var h=Og();try{xI(e)(n)}catch(y){if(JC(h),y!==y+0)throw y;EC(1,0)}},w:function(e,n,h){var y=Og();try{xI(e)(n,h)}catch(F){if(JC(y),F!==F+0)throw F;EC(1,0)}},E:function(e,n,h,y){var F=Og();try{xI(e)(n,h,y)}catch(m){if(JC(F),m!==m+0)throw m;EC(1,0)}},k:function(e,n,h,y,F){var m=Og();try{xI(e)(n,h,y,F)}catch(v){if(JC(m),v!==v+0)throw v;EC(1,0)}},V:XE,z:function(e,n,h,y){return XE(e,n,h,y)}},FB=(function(){var e={a:kQ};function n(F,m){var v,T=F.exports;l.asm=T,Ht((_g=l.asm.W).buffer),bt=l.asm.$,v=l.asm.X,Yi.unshift(v),YE()}function h(F){n(F.instance)}function y(F){return function(){if(!gI&&(XA||pA)){if(typeof fetch=="function"&&!QB(qB))return fetch(qB,{credentials:"same-origin"}).then(function(m){if(!m.ok)throw"failed to load wasm binary file at '"+qB+"'";return m.arrayBuffer()}).catch(function(){return qi(qB)});if(X)return new Promise(function(m,v){X(qB,function(T){m(new Uint8Array(T))},v)})}return Promise.resolve().then(function(){return qi(qB)})}().then(function(m){return WebAssembly.instantiate(m,e)}).then(function(m){return m}).then(F,function(m){kg("failed to asynchronously prepare wasm: "+m),tQ(m)})}if(Hi(),l.instantiateWasm)try{return l.instantiateWasm(e,n)}catch(F){return kg("Module.instantiateWasm callback failed with error: "+F),!1}(gI||typeof WebAssembly.instantiateStreaming!="function"||IC(qB)||QB(qB)||ZA||typeof fetch!="function"?y(h):fetch(qB,{credentials:"same-origin"}).then(function(F){return WebAssembly.instantiateStreaming(F,e).then(h,function(m){return kg("wasm streaming compile failed: "+m),kg("falling back to ArrayBuffer instantiation"),y(h)})})).catch(H)}(),l.___wasm_call_ctors=function(){return(l.___wasm_call_ctors=l.asm.X).apply(null,arguments)},l._malloc=function(){return(FB=l._malloc=l.asm.Y).apply(null,arguments)}),UC=l._free=function(){return(UC=l._free=l.asm.Z).apply(null,arguments)},Xt=l.___errno_location=function(){return(Xt=l.___errno_location=l.asm._).apply(null,arguments)},LC=l.___getTypeName=function(){return(LC=l.___getTypeName=l.asm.aa).apply(null,arguments)},EC=(l.__embind_initialize_bindings=function(){return(l.__embind_initialize_bindings=l.asm.ba).apply(null,arguments)},l._setThrew=function(){return(EC=l._setThrew=l.asm.ca).apply(null,arguments)}),Og=l.stackSave=function(){return(Og=l.stackSave=l.asm.da).apply(null,arguments)},JC=l.stackRestore=function(){return(JC=l.stackRestore=l.asm.ea).apply(null,arguments)},Xi=l.___cxa_is_pointer_type=function(){return(Xi=l.___cxa_is_pointer_type=l.asm.fa).apply(null,arguments)};function UQ(e){function n(){pI||(pI=!0,l.calledRun=!0,TC||(l.noFSInit||G.init.initialized||G.init(),G.ignorePermissions=!1,MB(Yi),N(l),l.onRuntimeInitialized&&l.onRuntimeInitialized(),function(){if(l.postRun)for(typeof l.postRun=="function"&&(l.postRun=[l.postRun]);l.postRun.length;)h=l.postRun.shift(),SQ.unshift(h);var h;MB(SQ)}()))}iQ>0||(function(){if(l.preRun)for(typeof l.preRun=="function"&&(l.preRun=[l.preRun]);l.preRun.length;)h=l.preRun.shift(),qt.unshift(h);var h;MB(qt)}(),iQ>0||(l.setStatus?(l.setStatus("Running..."),setTimeout(function(){setTimeout(function(){l.setStatus("")},1),n()},1)):n()))}if(l.dynCall_jiji=function(){return(l.dynCall_jiji=l.asm.ga).apply(null,arguments)},l.dynCall_viijii=function(){return(l.dynCall_viijii=l.asm.ha).apply(null,arguments)},l.dynCall_iiiiij=function(){return(l.dynCall_iiiiij=l.asm.ia).apply(null,arguments)},l.dynCall_iiiiijj=function(){return(l.dynCall_iiiiijj=l.asm.ja).apply(null,arguments)},l.dynCall_iiiiiijj=function(){return(l.dynCall_iiiiiijj=l.asm.ka).apply(null,arguments)},l.FS=G,jQ=function e(){pI||UQ(),pI||(jQ=e)},l.preInit)for(typeof l.preInit=="function"&&(l.preInit=[l.preInit]);l.preInit.length>0;)l.preInit.pop()();return UQ(),l.ready});const GQ=Kg;function Mg(l,N){return function(){return l.apply(N,arguments)}}const{toString:aB}=Object.prototype,{getPrototypeOf:Gg}=Object,yB=(fg=Object.create(null),l=>{const N=aB.call(l);return fg[N]||(fg[N]=N.slice(8,-1).toLowerCase())});var fg;const rB=l=>(l=l.toLowerCase(),N=>yB(N)===l),LB=l=>N=>typeof N===l,{isArray:CB}=Array,b=LB("undefined"),Z=rB("ArrayBuffer"),gA=LB("string"),EA=LB("function"),dA=LB("number"),bA=l=>l!==null&&typeof l=="object",iI=l=>{if(yB(l)!=="object")return!1;const N=Gg(l);return!(N!==null&&N!==Object.prototype&&Object.getPrototypeOf(N)!==null||Symbol.toStringTag in l||Symbol.iterator in l)},DI=rB("Date"),bI=rB("File"),PI=rB("Blob"),ng=rB("FileList"),vg=rB("URLSearchParams");function Fg(l,N,{allOwnKeys:H=!1}={}){if(l==null)return;let O,X;if(typeof l!="object"&&(l=[l]),CB(l))for(O=0,X=l.length;O<X;O++)N.call(null,l[O],O,l);else{const IA=H?Object.getOwnPropertyNames(l):Object.keys(l),$=IA.length;let W;for(O=0;O<$;O++)W=IA[O],N.call(null,l[W],W,l)}}function yA(l,N){N=N.toLowerCase();const H=Object.keys(l);let O,X=H.length;for(;X-- >0;)if(O=H[X],N===O.toLowerCase())return O;return null}const MA=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:mg.g,YA=l=>!b(l)&&l!==MA,dI=(AI=typeof Uint8Array<"u"&&Gg(Uint8Array),l=>AI&&l instanceof AI);var AI;const TI=rB("HTMLFormElement"),ZI=(({hasOwnProperty:l})=>(N,H)=>l.call(N,H))(Object.prototype),YI=rB("RegExp"),hg=(l,N)=>{const H=Object.getOwnPropertyDescriptors(l),O={};Fg(H,(X,IA)=>{N(X,IA,l)!==!1&&(O[IA]=X)}),Object.defineProperties(l,O)},nA={isArray:CB,isArrayBuffer:Z,isBuffer:function(l){return l!==null&&!b(l)&&l.constructor!==null&&!b(l.constructor)&&EA(l.constructor.isBuffer)&&l.constructor.isBuffer(l)},isFormData:l=>{const N="[object FormData]";return l&&(typeof FormData=="function"&&l instanceof FormData||aB.call(l)===N||EA(l.toString)&&l.toString()===N)},isArrayBufferView:function(l){let N;return N=typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(l):l&&l.buffer&&Z(l.buffer),N},isString:gA,isNumber:dA,isBoolean:l=>l===!0||l===!1,isObject:bA,isPlainObject:iI,isUndefined:b,isDate:DI,isFile:bI,isBlob:PI,isRegExp:YI,isFunction:EA,isStream:l=>bA(l)&&EA(l.pipe),isURLSearchParams:vg,isTypedArray:dI,isFileList:ng,forEach:Fg,merge:function l(){const{caseless:N}=YA(this)&&this||{},H={},O=(X,IA)=>{const $=N&&yA(H,IA)||IA;iI(H[$])&&iI(X)?H[$]=l(H[$],X):iI(X)?H[$]=l({},X):CB(X)?H[$]=X.slice():H[$]=X};for(let X=0,IA=arguments.length;X<IA;X++)arguments[X]&&Fg(arguments[X],O);return H},extend:(l,N,H,{allOwnKeys:O}={})=>(Fg(N,(X,IA)=>{H&&EA(X)?l[IA]=Mg(X,H):l[IA]=X},{allOwnKeys:O}),l),trim:l=>l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:l=>(l.charCodeAt(0)===65279&&(l=l.slice(1)),l),inherits:(l,N,H,O)=>{l.prototype=Object.create(N.prototype,O),l.prototype.constructor=l,Object.defineProperty(l,"super",{value:N.prototype}),H&&Object.assign(l.prototype,H)},toFlatObject:(l,N,H,O)=>{let X,IA,$;const W={};if(N=N||{},l==null)return N;do{for(X=Object.getOwnPropertyNames(l),IA=X.length;IA-- >0;)$=X[IA],O&&!O($,l,N)||W[$]||(N[$]=l[$],W[$]=!0);l=H!==!1&&Gg(l)}while(l&&(!H||H(l,N))&&l!==Object.prototype);return N},kindOf:yB,kindOfTest:rB,endsWith:(l,N,H)=>{l=String(l),(H===void 0||H>l.length)&&(H=l.length),H-=N.length;const O=l.indexOf(N,H);return O!==-1&&O===H},toArray:l=>{if(!l)return null;if(CB(l))return l;let N=l.length;if(!dA(N))return null;const H=new Array(N);for(;N-- >0;)H[N]=l[N];return H},forEachEntry:(l,N)=>{const H=(l&&l[Symbol.iterator]).call(l);let O;for(;(O=H.next())&&!O.done;){const X=O.value;N.call(l,X[0],X[1])}},matchAll:(l,N)=>{let H;const O=[];for(;(H=l.exec(N))!==null;)O.push(H);return O},isHTMLForm:TI,hasOwnProperty:ZI,hasOwnProp:ZI,reduceDescriptors:hg,freezeMethods:l=>{hg(l,(N,H)=>{if(EA(l)&&["arguments","caller","callee"].indexOf(H)!==-1)return!1;const O=l[H];EA(O)&&(N.enumerable=!1,"writable"in N?N.writable=!1:N.set||(N.set=()=>{throw Error("Can not rewrite read-only method '"+H+"'")}))})},toObjectSet:(l,N)=>{const H={},O=X=>{X.forEach(IA=>{H[IA]=!0})};return CB(l)?O(l):O(String(l).split(N)),H},toCamelCase:l=>l.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(N,H,O){return H.toUpperCase()+O}),noop:()=>{},toFiniteNumber:(l,N)=>(l=+l,Number.isFinite(l)?l:N),findKey:yA,global:MA,isContextDefined:YA,toJSONObject:l=>{const N=new Array(10),H=(O,X)=>{if(bA(O)){if(N.indexOf(O)>=0)return;if(!("toJSON"in O)){N[X]=O;const IA=CB(O)?[]:{};return Fg(O,($,W)=>{const Y=H($,X+1);!b(Y)&&(IA[W]=Y)}),N[X]=void 0,IA}}return O};return H(l,0)}};function Rg(l,N,H,O,X){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=l,this.name="AxiosError",N&&(this.code=N),H&&(this.config=H),O&&(this.request=O),X&&(this.response=X)}nA.inherits(Rg,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:nA.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Wg=Rg.prototype,$B={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(l=>{$B[l]={value:l}}),Object.defineProperties(Rg,$B),Object.defineProperty(Wg,"isAxiosError",{value:!0}),Rg.from=(l,N,H,O,X,IA)=>{const $=Object.create(Wg);return nA.toFlatObject(l,$,function(W){return W!==Error.prototype},W=>W!=="isAxiosError"),Rg.call($,l.message,N,H,O,X),$.cause=l,$.name=l.name,IA&&Object.assign($,IA),$};const FI=Rg,BQ=gg(230);function Sg(l){return nA.isPlainObject(l)||nA.isArray(l)}function PB(l){return nA.endsWith(l,"[]")?l.slice(0,-2):l}function xQ(l,N,H){return l?l.concat(N).map(function(O,X){return O=PB(O),!H&&X?"["+O+"]":O}).join(H?".":""):N}const wC=nA.toFlatObject(nA,{},null,function(l){return/^is[A-Z]/.test(l)}),CQ=function(l,N,H){if(!nA.isObject(l))throw new TypeError("target must be an object");N=N||new(BQ||FormData);const O=(H=nA.toFlatObject(H,{metaTokens:!0,dots:!1,indexes:!1},!1,function(pA,ZA){return!nA.isUndefined(ZA[pA])})).metaTokens,X=H.visitor||z,IA=H.dots,$=H.indexes,W=(H.Blob||typeof Blob<"u"&&Blob)&&(Y=N)&&nA.isFunction(Y.append)&&Y[Symbol.toStringTag]==="FormData"&&Y[Symbol.iterator];var Y;if(!nA.isFunction(X))throw new TypeError("visitor must be a function");function j(pA){if(pA===null)return"";if(nA.isDate(pA))return pA.toISOString();if(!W&&nA.isBlob(pA))throw new FI("Blob is not supported. Use a Buffer instead.");return nA.isArrayBuffer(pA)||nA.isTypedArray(pA)?W&&typeof Blob=="function"?new Blob([pA]):Buffer.from(pA):pA}function z(pA,ZA,tI){let gI=pA;if(pA&&!tI&&typeof pA=="object"){if(nA.endsWith(ZA,"{}"))ZA=O?ZA:ZA.slice(0,-2),pA=JSON.stringify(pA);else if(nA.isArray(pA)&&function(jI){return nA.isArray(jI)&&!jI.some(Sg)}(pA)||nA.isFileList(pA)||nA.endsWith(ZA,"[]")&&(gI=nA.toArray(pA)))return ZA=PB(ZA),gI.forEach(function(jI,kg){!nA.isUndefined(jI)&&jI!==null&&N.append($===!0?xQ([ZA],kg,IA):$===null?ZA:ZA+"[]",j(jI))}),!1}return!!Sg(pA)||(N.append(xQ(tI,ZA,IA),j(pA)),!1)}const xA=[],XA=Object.assign(wC,{defaultVisitor:z,convertValue:j,isVisitable:Sg});if(!nA.isObject(l))throw new TypeError("data must be an object");return function pA(ZA,tI){if(!nA.isUndefined(ZA)){if(xA.indexOf(ZA)!==-1)throw Error("Circular reference detected in "+tI.join("."));xA.push(ZA),nA.forEach(ZA,function(gI,jI){(!(nA.isUndefined(gI)||gI===null)&&X.call(N,gI,nA.isString(jI)?jI.trim():jI,tI,XA))===!0&&pA(gI,tI?tI.concat(jI):[jI])}),xA.pop()}}(l),N};function Lg(l){const N={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g,function(H){return N[H]})}function fE(l,N){this._pairs=[],l&&CQ(l,this,N)}const Ut=fE.prototype;Ut.append=function(l,N){this._pairs.push([l,N])},Ut.toString=function(l){const N=l?function(H){return l.call(this,H,Lg)}:Lg;return this._pairs.map(function(H){return N(H[0])+"="+N(H[1])},"").join("&")};const dC=fE;function Ze(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function yC(l,N,H){if(!N)return l;const O=H&&H.encode||Ze,X=H&&H.serialize;let IA;if(IA=X?X(N,H):nA.isURLSearchParams(N)?N.toString():new dC(N,H).toString(O),IA){const $=l.indexOf("#");$!==-1&&(l=l.slice(0,$)),l+=(l.indexOf("?")===-1?"?":"&")+IA}return l}const yi=class{constructor(){this.handlers=[]}use(l,N,H){return this.handlers.push({fulfilled:l,rejected:N,synchronous:!!H&&H.synchronous,runWhen:H?H.runWhen:null}),this.handlers.length-1}eject(l){this.handlers[l]&&(this.handlers[l]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(l){nA.forEach(this.handlers,function(N){N!==null&&l(N)})}},ui={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Gi=typeof URLSearchParams<"u"?URLSearchParams:dC,Lt=FormData,xC=(()=>{let l;return(typeof navigator>"u"||(l=navigator.product)!=="ReactNative"&&l!=="NativeScript"&&l!=="NS")&&typeof window<"u"&&typeof document<"u"})(),uC=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",uB={isBrowser:!0,classes:{URLSearchParams:Gi,FormData:Lt,Blob},isStandardBrowserEnv:xC,isStandardBrowserWebWorkerEnv:uC,protocols:["http","https","file","blob","url","data"]},Ri=function(l){function N(H,O,X,IA){let $=H[IA++];const W=Number.isFinite(+$),Y=IA>=H.length;return $=!$&&nA.isArray(X)?X.length:$,Y?(nA.hasOwnProp(X,$)?X[$]=[X[$],O]:X[$]=O,!W):(X[$]&&nA.isObject(X[$])||(X[$]=[]),N(H,O,X[$],IA)&&nA.isArray(X[$])&&(X[$]=function(j){const z={},xA=Object.keys(j);let XA;const pA=xA.length;let ZA;for(XA=0;XA<pA;XA++)ZA=xA[XA],z[ZA]=j[ZA];return z}(X[$])),!W)}if(nA.isFormData(l)&&nA.isFunction(l.entries)){const H={};return nA.forEachEntry(l,(O,X)=>{N(function(IA){return nA.matchAll(/\w+|\[(\w*)]/g,IA).map($=>$[0]==="[]"?"":$[1]||$[0])}(O),X,H,0)}),H}return null},Jt={"Content-Type":void 0},nC={transitional:ui,adapter:["xhr","http"],transformRequest:[function(l,N){const H=N.getContentType()||"",O=H.indexOf("application/json")>-1,X=nA.isObject(l);if(X&&nA.isHTMLForm(l)&&(l=new FormData(l)),nA.isFormData(l))return O&&O?JSON.stringify(Ri(l)):l;if(nA.isArrayBuffer(l)||nA.isBuffer(l)||nA.isStream(l)||nA.isFile(l)||nA.isBlob(l))return l;if(nA.isArrayBufferView(l))return l.buffer;if(nA.isURLSearchParams(l))return N.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),l.toString();let IA;if(X){if(H.indexOf("application/x-www-form-urlencoded")>-1)return function($,W){return CQ($,new uB.classes.URLSearchParams,Object.assign({visitor:function(Y,j,z,xA){return uB.isNode&&nA.isBuffer(Y)?(this.append(j,Y.toString("base64")),!1):xA.defaultVisitor.apply(this,arguments)}},W))}(l,this.formSerializer).toString();if((IA=nA.isFileList(l))||H.indexOf("multipart/form-data")>-1){const $=this.env&&this.env.FormData;return CQ(IA?{"files[]":l}:l,$&&new $,this.formSerializer)}}return X||O?(N.setContentType("application/json",!1),function($,W,Y){if(nA.isString($))try{return(0,JSON.parse)($),nA.trim($)}catch(j){if(j.name!=="SyntaxError")throw j}return(0,JSON.stringify)($)}(l)):l}],transformResponse:[function(l){const N=this.transitional||nC.transitional,H=N&&N.forcedJSONParsing,O=this.responseType==="json";if(l&&nA.isString(l)&&(H&&!this.responseType||O)){const X=!(N&&N.silentJSONParsing)&&O;try{return JSON.parse(l)}catch(IA){if(X)throw IA.name==="SyntaxError"?FI.from(IA,FI.ERR_BAD_RESPONSE,this,null,this.response):IA}}return l}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:uB.classes.FormData,Blob:uB.classes.Blob},validateStatus:function(l){return l>=200&&l<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};nA.forEach(["delete","get","head"],function(l){nC.headers[l]={}}),nA.forEach(["post","put","patch"],function(l){nC.headers[l]=nA.merge(Jt)});const FE=nC,bB=nA.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Mi=Symbol("internals");function RQ(l){return l&&String(l).trim().toLowerCase()}function AC(l){return l===!1||l==null?l:nA.isArray(l)?l.map(AC):String(l)}function vC(l,N,H,O){return nA.isFunction(O)?O.call(this,N,H):nA.isString(N)?nA.isString(O)?N.indexOf(O)!==-1:nA.isRegExp(O)?O.test(N):void 0:void 0}class vQ{constructor(N){N&&this.set(N)}set(N,H,O){const X=this;function IA(W,Y,j){const z=RQ(Y);if(!z)throw new Error("header name must be a non-empty string");const xA=nA.findKey(X,z);(!xA||X[xA]===void 0||j===!0||j===void 0&&X[xA]!==!1)&&(X[xA||Y]=AC(W))}const $=(W,Y)=>nA.forEach(W,(j,z)=>IA(j,z,Y));return nA.isPlainObject(N)||N instanceof this.constructor?$(N,H):nA.isString(N)&&(N=N.trim())&&!/^[-_a-zA-Z]+$/.test(N.trim())?$((W=>{const Y={};let j,z,xA;return W&&W.split(`
`).forEach(function(XA){xA=XA.indexOf(":"),j=XA.substring(0,xA).trim().toLowerCase(),z=XA.substring(xA+1).trim(),!j||Y[j]&&bB[j]||(j==="set-cookie"?Y[j]?Y[j].push(z):Y[j]=[z]:Y[j]=Y[j]?Y[j]+", "+z:z)}),Y})(N),H):N!=null&&IA(H,N,O),this}get(N,H){if(N=RQ(N)){const O=nA.findKey(this,N);if(O){const X=this[O];if(!H)return X;if(H===!0)return function(IA){const $=Object.create(null),W=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let Y;for(;Y=W.exec(IA);)$[Y[1]]=Y[2];return $}(X);if(nA.isFunction(H))return H.call(this,X,O);if(nA.isRegExp(H))return H.exec(X);throw new TypeError("parser must be boolean|regexp|function")}}}has(N,H){if(N=RQ(N)){const O=nA.findKey(this,N);return!(!O||H&&!vC(0,this[O],O,H))}return!1}delete(N,H){const O=this;let X=!1;function IA($){if($=RQ($)){const W=nA.findKey(O,$);!W||H&&!vC(0,O[W],W,H)||(delete O[W],X=!0)}}return nA.isArray(N)?N.forEach(IA):IA(N),X}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(N){const H=this,O={};return nA.forEach(this,(X,IA)=>{const $=nA.findKey(O,IA);if($)return H[$]=AC(X),void delete H[IA];const W=N?function(Y){return Y.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(j,z,xA)=>z.toUpperCase()+xA)}(IA):String(IA).trim();W!==IA&&delete H[IA],H[W]=AC(X),O[W]=!0}),this}concat(...N){return this.constructor.concat(this,...N)}toJSON(N){const H=Object.create(null);return nA.forEach(this,(O,X)=>{O!=null&&O!==!1&&(H[X]=N&&nA.isArray(O)?O.join(", "):O)}),H}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([N,H])=>N+": "+H).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(N){return N instanceof this?N:new this(N)}static concat(N,...H){const O=new this(N);return H.forEach(X=>O.set(X)),O}static accessor(N){const H=(this[Mi]=this[Mi]={accessors:{}}).accessors,O=this.prototype;function X(IA){const $=RQ(IA);H[$]||(function(W,Y){const j=nA.toCamelCase(" "+Y);["get","set","has"].forEach(z=>{Object.defineProperty(W,z+j,{value:function(xA,XA,pA){return this[z].call(this,Y,xA,XA,pA)},configurable:!0})})}(O,IA),H[$]=!0)}return nA.isArray(N)?N.forEach(X):X(N),this}}vQ.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),nA.freezeMethods(vQ.prototype),nA.freezeMethods(vQ);const sC=vQ;function SE(l,N){const H=this||FE,O=N||H,X=sC.from(O.headers);let IA=O.data;return nA.forEach(l,function($){IA=$.call(H,IA,X.normalize(),N?N.status:void 0)}),X.normalize(),IA}function fi(l){return!(!l||!l.__CANCEL__)}function Fi(l,N,H){FI.call(this,l??"canceled",FI.ERR_CANCELED,N,H),this.name="CanceledError"}nA.inherits(Fi,FI,{__CANCEL__:!0});const QQ=Fi,pE=uB.isStandardBrowserEnv?{write:function(l,N,H,O,X,IA){const $=[];$.push(l+"="+encodeURIComponent(N)),nA.isNumber(H)&&$.push("expires="+new Date(H).toGMTString()),nA.isString(O)&&$.push("path="+O),nA.isString(X)&&$.push("domain="+X),IA===!0&&$.push("secure"),document.cookie=$.join("; ")},read:function(l){const N=document.cookie.match(new RegExp("(^|;\\s*)("+l+")=([^;]*)"));return N?decodeURIComponent(N[3]):null},remove:function(l){this.write(l,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function WQ(l,N){return l&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(N)?function(H,O){return O?H.replace(/\/+$/,"")+"/"+O.replace(/^\/+/,""):H}(l,N):N}const NE=uB.isStandardBrowserEnv?function(){const l=/(msie|trident)/i.test(navigator.userAgent),N=document.createElement("a");let H;function O(X){let IA=X;return l&&(N.setAttribute("href",IA),IA=N.href),N.setAttribute("href",IA),{href:N.href,protocol:N.protocol?N.protocol.replace(/:$/,""):"",host:N.host,search:N.search?N.search.replace(/^\?/,""):"",hash:N.hash?N.hash.replace(/^#/,""):"",hostname:N.hostname,port:N.port,pathname:N.pathname.charAt(0)==="/"?N.pathname:"/"+N.pathname}}return H=O(window.location.href),function(X){const IA=nA.isString(X)?O(X):X;return IA.protocol===H.protocol&&IA.host===H.host}}():function(){return!0};function mE(l,N){let H=0;const O=function(X,IA){X=X||10;const $=new Array(X),W=new Array(X);let Y,j=0,z=0;return IA=IA!==void 0?IA:1e3,function(xA){const XA=Date.now(),pA=W[z];Y||(Y=XA),$[j]=xA,W[j]=XA;let ZA=z,tI=0;for(;ZA!==j;)tI+=$[ZA++],ZA%=X;if(j=(j+1)%X,j===z&&(z=(z+1)%X),XA-Y<IA)return;const gI=pA&&XA-pA;return gI?Math.round(1e3*tI/gI):void 0}}(50,250);return X=>{const IA=X.loaded,$=X.lengthComputable?X.total:void 0,W=IA-H,Y=O(W);H=IA;const j={loaded:IA,total:$,progress:$?IA/$:void 0,bytes:W,rate:Y||void 0,estimated:Y&&$&&IA<=$?($-IA)/Y:void 0,event:X};j[N?"download":"upload"]=!0,l(j)}}const TQ={http:null,xhr:typeof XMLHttpRequest<"u"&&function(l){return new Promise(function(N,H){let O=l.data;const X=sC.from(l.headers).normalize(),IA=l.responseType;let $;function W(){l.cancelToken&&l.cancelToken.unsubscribe($),l.signal&&l.signal.removeEventListener("abort",$)}nA.isFormData(O)&&(uB.isStandardBrowserEnv||uB.isStandardBrowserWebWorkerEnv)&&X.setContentType(!1);let Y=new XMLHttpRequest;if(l.auth){const XA=l.auth.username||"",pA=l.auth.password?unescape(encodeURIComponent(l.auth.password)):"";X.set("Authorization","Basic "+btoa(XA+":"+pA))}const j=WQ(l.baseURL,l.url);function z(){if(!Y)return;const XA=sC.from("getAllResponseHeaders"in Y&&Y.getAllResponseHeaders());(function(pA,ZA,tI){const gI=tI.config.validateStatus;tI.status&&gI&&!gI(tI.status)?ZA(new FI("Request failed with status code "+tI.status,[FI.ERR_BAD_REQUEST,FI.ERR_BAD_RESPONSE][Math.floor(tI.status/100)-4],tI.config,tI.request,tI)):pA(tI)})(function(pA){N(pA),W()},function(pA){H(pA),W()},{data:IA&&IA!=="text"&&IA!=="json"?Y.response:Y.responseText,status:Y.status,statusText:Y.statusText,headers:XA,config:l,request:Y}),Y=null}if(Y.open(l.method.toUpperCase(),yC(j,l.params,l.paramsSerializer),!0),Y.timeout=l.timeout,"onloadend"in Y?Y.onloadend=z:Y.onreadystatechange=function(){Y&&Y.readyState===4&&(Y.status!==0||Y.responseURL&&Y.responseURL.indexOf("file:")===0)&&setTimeout(z)},Y.onabort=function(){Y&&(H(new FI("Request aborted",FI.ECONNABORTED,l,Y)),Y=null)},Y.onerror=function(){H(new FI("Network Error",FI.ERR_NETWORK,l,Y)),Y=null},Y.ontimeout=function(){let XA=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded";const pA=l.transitional||ui;l.timeoutErrorMessage&&(XA=l.timeoutErrorMessage),H(new FI(XA,pA.clarifyTimeoutError?FI.ETIMEDOUT:FI.ECONNABORTED,l,Y)),Y=null},uB.isStandardBrowserEnv){const XA=(l.withCredentials||NE(j))&&l.xsrfCookieName&&pE.read(l.xsrfCookieName);XA&&X.set(l.xsrfHeaderName,XA)}O===void 0&&X.setContentType(null),"setRequestHeader"in Y&&nA.forEach(X.toJSON(),function(XA,pA){Y.setRequestHeader(pA,XA)}),nA.isUndefined(l.withCredentials)||(Y.withCredentials=!!l.withCredentials),IA&&IA!=="json"&&(Y.responseType=l.responseType),typeof l.onDownloadProgress=="function"&&Y.addEventListener("progress",mE(l.onDownloadProgress,!0)),typeof l.onUploadProgress=="function"&&Y.upload&&Y.upload.addEventListener("progress",mE(l.onUploadProgress)),(l.cancelToken||l.signal)&&($=XA=>{Y&&(H(!XA||XA.type?new QQ(null,l,Y):XA),Y.abort(),Y=null)},l.cancelToken&&l.cancelToken.subscribe($),l.signal&&(l.signal.aborted?$():l.signal.addEventListener("abort",$)));const xA=function(XA){const pA=/^([-+\w]{1,25})(:?\/\/|:)/.exec(XA);return pA&&pA[1]||""}(j);xA&&uB.protocols.indexOf(xA)===-1?H(new FI("Unsupported protocol "+xA+":",FI.ERR_BAD_REQUEST,l)):Y.send(O||null)})}};function ZQ(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new QQ(null,l)}function kE(l){return ZQ(l),l.headers=sC.from(l.headers),l.data=SE.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),(N=>{N=nA.isArray(N)?N:[N];const{length:H}=N;let O,X;for(let IA=0;IA<H&&(O=N[IA],!(X=nA.isString(O)?TQ[O.toLowerCase()]:O));IA++);if(!X)throw X===!1?new FI(`Adapter ${O} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(nA.hasOwnProp(TQ,O)?`Adapter '${O}' is not available in the build`:`Unknown adapter '${O}'`);if(!nA.isFunction(X))throw new TypeError("adapter is not a function");return X})(l.adapter||FE.adapter)(l).then(function(N){return ZQ(l),N.data=SE.call(l,l.transformResponse,N),N.headers=sC.from(N.headers),N},function(N){return fi(N)||(ZQ(l),N&&N.response&&(N.response.data=SE.call(l,l.transformResponse,N.response),N.response.headers=sC.from(N.response.headers))),Promise.reject(N)})}nA.forEach(TQ,(l,N)=>{if(l){try{Object.defineProperty(l,"name",{value:N})}catch{}Object.defineProperty(l,"adapterName",{value:N})}});const Si=l=>l instanceof sC?l.toJSON():l;function WC(l,N){N=N||{};const H={};function O(j,z,xA){return nA.isPlainObject(j)&&nA.isPlainObject(z)?nA.merge.call({caseless:xA},j,z):nA.isPlainObject(z)?nA.merge({},z):nA.isArray(z)?z.slice():z}function X(j,z,xA){return nA.isUndefined(z)?nA.isUndefined(j)?void 0:O(void 0,j,xA):O(j,z,xA)}function IA(j,z){if(!nA.isUndefined(z))return O(void 0,z)}function $(j,z){return nA.isUndefined(z)?nA.isUndefined(j)?void 0:O(void 0,j):O(void 0,z)}function W(j,z,xA){return xA in N?O(j,z):xA in l?O(void 0,j):void 0}const Y={url:IA,method:IA,data:IA,baseURL:$,transformRequest:$,transformResponse:$,paramsSerializer:$,timeout:$,timeoutMessage:$,withCredentials:$,adapter:$,responseType:$,xsrfCookieName:$,xsrfHeaderName:$,onUploadProgress:$,onDownloadProgress:$,decompress:$,maxContentLength:$,maxBodyLength:$,beforeRedirect:$,transport:$,httpAgent:$,httpsAgent:$,cancelToken:$,socketPath:$,responseEncoding:$,validateStatus:W,headers:(j,z)=>X(Si(j),Si(z),!0)};return nA.forEach(Object.keys(l).concat(Object.keys(N)),function(j){const z=Y[j]||X,xA=z(l[j],N[j],j);nA.isUndefined(xA)&&z!==W||(H[j]=xA)}),H}const OQ={};["object","boolean","number","function","string","symbol"].forEach((l,N)=>{OQ[l]=function(H){return typeof H===l||"a"+(N<1?"n ":" ")+l}});const UE={};OQ.transitional=function(l,N,H){function O(X,IA){return"[Axios v1.2.4] Transitional option '"+X+"'"+IA+(H?". "+H:"")}return(X,IA,$)=>{if(l===!1)throw new FI(O(IA," has been removed"+(N?" in "+N:"")),FI.ERR_DEPRECATED);return N&&!UE[IA]&&(UE[IA]=!0,console.warn(O(IA," has been deprecated since v"+N+" and will be removed in the near future"))),!l||l(X,IA,$)}};const VQ={assertOptions:function(l,N,H){if(typeof l!="object")throw new FI("options must be an object",FI.ERR_BAD_OPTION_VALUE);const O=Object.keys(l);let X=O.length;for(;X-- >0;){const IA=O[X],$=N[IA];if($){const W=l[IA],Y=W===void 0||$(W,IA,l);if(Y!==!0)throw new FI("option "+IA+" must be "+Y,FI.ERR_BAD_OPTION_VALUE)}else if(H!==!0)throw new FI("Unknown option "+IA,FI.ERR_BAD_OPTION)}},validators:OQ},aC=VQ.validators;class MQ{constructor(N){this.defaults=N,this.interceptors={request:new yi,response:new yi}}request(N,H){typeof N=="string"?(H=H||{}).url=N:H=N||{},H=WC(this.defaults,H);const{transitional:O,paramsSerializer:X,headers:IA}=H;let $;O!==void 0&&VQ.assertOptions(O,{silentJSONParsing:aC.transitional(aC.boolean),forcedJSONParsing:aC.transitional(aC.boolean),clarifyTimeoutError:aC.transitional(aC.boolean)},!1),X!==void 0&&VQ.assertOptions(X,{encode:aC.function,serialize:aC.function},!0),H.method=(H.method||this.defaults.method||"get").toLowerCase(),$=IA&&nA.merge(IA.common,IA[H.method]),$&&nA.forEach(["delete","get","head","post","put","patch","common"],ZA=>{delete IA[ZA]}),H.headers=sC.concat($,IA);const W=[];let Y=!0;this.interceptors.request.forEach(function(ZA){typeof ZA.runWhen=="function"&&ZA.runWhen(H)===!1||(Y=Y&&ZA.synchronous,W.unshift(ZA.fulfilled,ZA.rejected))});const j=[];let z;this.interceptors.response.forEach(function(ZA){j.push(ZA.fulfilled,ZA.rejected)});let xA,XA=0;if(!Y){const ZA=[kE.bind(this),void 0];for(ZA.unshift.apply(ZA,W),ZA.push.apply(ZA,j),xA=ZA.length,z=Promise.resolve(H);XA<xA;)z=z.then(ZA[XA++],ZA[XA++]);return z}xA=W.length;let pA=H;for(XA=0;XA<xA;){const ZA=W[XA++],tI=W[XA++];try{pA=ZA(pA)}catch(gI){tI.call(this,gI);break}}try{z=kE.call(this,pA)}catch(ZA){return Promise.reject(ZA)}for(XA=0,xA=j.length;XA<xA;)z=z.then(j[XA++],j[XA++]);return z}getUri(N){return yC(WQ((N=WC(this.defaults,N)).baseURL,N.url),N.params,N.paramsSerializer)}}nA.forEach(["delete","get","head","options"],function(l){MQ.prototype[l]=function(N,H){return this.request(WC(H||{},{method:l,url:N,data:(H||{}).data}))}}),nA.forEach(["post","put","patch"],function(l){function N(H){return function(O,X,IA){return this.request(WC(IA||{},{method:l,headers:H?{"Content-Type":"multipart/form-data"}:{},url:O,data:X}))}}MQ.prototype[l]=N(),MQ.prototype[l+"Form"]=N(!0)});const fQ=MQ;class PQ{constructor(N){if(typeof N!="function")throw new TypeError("executor must be a function.");let H;this.promise=new Promise(function(X){H=X});const O=this;this.promise.then(X=>{if(!O._listeners)return;let IA=O._listeners.length;for(;IA-- >0;)O._listeners[IA](X);O._listeners=null}),this.promise.then=X=>{let IA;const $=new Promise(W=>{O.subscribe(W),IA=W}).then(X);return $.cancel=function(){O.unsubscribe(IA)},$},N(function(X,IA,$){O.reason||(O.reason=new QQ(X,IA,$),H(O.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(N){this.reason?N(this.reason):this._listeners?this._listeners.push(N):this._listeners=[N]}unsubscribe(N){if(!this._listeners)return;const H=this._listeners.indexOf(N);H!==-1&&this._listeners.splice(H,1)}static source(){let N;return{token:new PQ(function(H){N=H}),cancel:N}}}const pi=PQ,XQ={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(XQ).forEach(([l,N])=>{XQ[N]=l});const Ni=XQ,Yg=function l(N){const H=new fQ(N),O=Mg(fQ.prototype.request,H);return nA.extend(O,fQ.prototype,H,{allOwnKeys:!0}),nA.extend(O,H,null,{allOwnKeys:!0}),O.create=function(X){return l(WC(N,X))},O}(FE);Yg.Axios=fQ,Yg.CanceledError=QQ,Yg.CancelToken=pi,Yg.isCancel=fi,Yg.VERSION="1.2.4",Yg.toFormData=CQ,Yg.AxiosError=FI,Yg.Cancel=Yg.CanceledError,Yg.all=function(l){return Promise.all(l)},Yg.spread=function(l){return function(N){return l.apply(null,N)}},Yg.isAxiosError=function(l){return nA.isObject(l)&&l.isAxiosError===!0},Yg.mergeConfig=WC,Yg.AxiosHeaders=sC,Yg.formToJSON=l=>Ri(nA.isHTMLForm(l)?new FormData(l):l),Yg.HttpStatusCode=Ni,Yg.default=Yg;const mi=Yg;var GC=function(){function l(){rg(this,l)}var N;return UB(l,null,[{key:"fetchRemoteData",value:(N=RI(WI().mark(function H(O){var X;return WI().wrap(function(IA){for(;;)switch(IA.prev=IA.next){case 0:return IA.prev=0,IA.next=3,mi.get(O,{responseType:"arraybuffer"});case 3:return X=IA.sent,IA.abrupt("return",new Uint8Array(X.data));case 7:throw IA.prev=7,IA.t0=IA.catch(0),IA.t0;case 10:case"end":return IA.stop()}},H,null,[[0,7]])})),function(H){return N.apply(this,arguments)})},{key:"string2Uint8Data",value:function(H){for(var O=new Uint8Array(H.length),X=0;X<O.length;X++)O[X]=255&H.charCodeAt(X);return O}},{key:"uint8Data2String",value:function(H){return String.fromCharCode.apply(String,H)}},{key:"parseMultiFile",value:function(H){var O=l.uint8Data2String(H).split(`
`),X=[],IA=0;return O.forEach(function($){if(($=$.trim())&&!$.startsWith("#"))switch(IA){case 0:return void(IA=1);case 1:$.match(/^\d+$/)||X.push($);case 2:case 3:case 4:return void IA++;case 5:return void(IA=1)}}),X}}]),l}(),RC=function(){function l(){rg(this,l),this.instance,this.markerCount=0,this.multiMarkerCount=0,this.cameraCount=0,this.version="0.3.0",console.info("ARToolkit ",this.version)}var N,H,O,X,IA;return UB(l,[{key:"init",value:(IA=RI(WI().mark(function $(){var W;return WI().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:return Y.next=2,new Promise(function(j){GQ({onRuntimeInitialized:function(){j({instance:this})}})});case 2:return W=Y.sent,this.instance=W.instance,this._decorate(),(typeof window<"u"?window:gg.g).artoolkit=this,Y.abrupt("return",this);case 8:case"end":return Y.stop()}},$,this)})),function(){return IA.apply(this,arguments)})},{key:"_decorate",value:function(){var $=this;for(var W in["setup","teardown","setupAR2","setLogLevel","getLogLevel","setDebugMode","getDebugMode","getProcessingImage","setMarkerInfoDir","setMarkerInfoVertex","getTransMatSquare","getTransMatSquareCont","getTransMatMultiSquare","getTransMatMultiSquareRobust","getMultiMarkerNum","getMultiMarkerCount","detectMarker","getMarkerNum","detectNFTMarker","getNFTMarker","getNFTData","getMarker","getMultiEachMarker","setProjectionNearPlane","getProjectionNearPlane","setProjectionFarPlane","getProjectionFarPlane","setThresholdMode","getThresholdMode","setThreshold","getThreshold","setPatternDetectionMode","getPatternDetectionMode","setMatrixCodeType","getMatrixCodeType","setLabelingMode","getLabelingMode","setPattRatio","getPattRatio","setImageProcMode","getImageProcMode"].forEach(function(Y){$[Y]=$.instance[Y]}),this.instance)W.match(/^AR/)&&(this[W]=this.instance[W])}},{key:"loadCamera",value:(X=RI(WI().mark(function $(W){var Y,j;return WI().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:if(Y="/camera_param_"+this.cameraCount++,!(W instanceof Uint8Array)){z.next=5;break}j=W,z.next=14;break;case 5:return z.prev=5,z.next=8,GC.fetchRemoteData(W);case 8:j=z.sent,z.next=14;break;case 11:throw z.prev=11,z.t0=z.catch(5),z.t0;case 14:return this._storeDataFile(j,Y),z.abrupt("return",this.instance._loadCamera(Y));case 16:case"end":return z.stop()}},$,this,[[5,11]])})),function($){return X.apply(this,arguments)})},{key:"addMarker",value:(O=RI(WI().mark(function $(W,Y){var j,z;return WI().wrap(function(xA){for(;;)switch(xA.prev=xA.next){case 0:if(j="/marker_"+this.markerCount++,Y.indexOf(`
Name: `+bA.name+`
Message: `+bA.message,DI.setAttribute("id","error-popup"),document.body.appendChild(DI)}},1e3)};var EA=document.createElement("video");if(EA.setAttribute("autoplay",""),EA.setAttribute("muted",""),EA.setAttribute("playsinline",""),EA.style.width=this.parameters.displayWidth+"px",EA.style.height=this.parameters.displayHeight+"px",navigator.mediaDevices===void 0||navigator.mediaDevices.enumerateDevices===void 0||navigator.mediaDevices.getUserMedia===void 0){if(navigator.mediaDevices===void 0)var dA="navigator.mediaDevices";else navigator.mediaDevices.enumerateDevices===void 0?dA="navigator.mediaDevices.enumerateDevices":navigator.mediaDevices.getUserMedia===void 0?dA="navigator.mediaDevices.getUserMedia":console.assert(!1);return Z({name:"",message:"WebRTC issue-! "+dA+" not present in your browser"}),null}return navigator.mediaDevices.enumerateDevices().then(function(bA){var iI={audio:!1,video:{facingMode:"environment",width:{ideal:gA.parameters.sourceWidth},height:{ideal:gA.parameters.sourceHeight}}};gA.parameters.deviceId!==null&&(iI.video.deviceId={exact:gA.parameters.deviceId}),navigator.mediaDevices.getUserMedia(iI).then(function(DI){EA.srcObject=DI;var bI=new CustomEvent("camera-init",{stream:DI});window.dispatchEvent(bI),document.body.addEventListener("click",gA.onInitialClick,{once:!0}),b()}).catch(function(DI){Z({name:DI.name,message:DI.message})})}).catch(function(bA){Z({message:bA.message})}),EA},Mg.prototype.dispose=function(){switch(this.ready=!1,this.parameters.sourceType){case"image":this._disposeSourceImage();break;case"video":this._disposeSourceVideo();break;case"webcam":this._disposeSourceWebcam()}this.domElement=null,document.body.removeEventListener("click",this.onInitialClick,{once:!0})},Mg.prototype._disposeSourceImage=function(){var b=document.querySelector("#arjs-video");b&&b.remove()},Mg.prototype._disposeSourceVideo=function(){var b=document.querySelector("#arjs-video");b&&(b.pause(),b.removeAttribute("src"),b.load(),b.remove())},Mg.prototype._disposeSourceWebcam=function(){var b=document.querySelector("#arjs-video");b&&(b.srcObject&&b.srcObject.getTracks&&b.srcObject.getTracks().map(Z=>Z.stop()),b.remove())},Mg.prototype.hasMobileTorch=function(){var b=arToolkitSource.domElement.srcObject;if(b instanceof MediaStream==0)return!1;this._currentTorchStatus===void 0&&(this._currentTorchStatus=!1);var Z=b.getVideoTracks()[0];return Z.getCapabilities!==void 0&&!!Z.getCapabilities().torch},Mg.prototype.toggleMobileTorch=function(){console.assert(this.hasMobileTorch()===!0);var b=arToolkitSource.domElement.srcObject;if(b instanceof MediaStream!=0){this._currentTorchStatus===void 0&&(this._currentTorchStatus=!1);var Z=b.getVideoTracks()[0];Z.getCapabilities().torch?(this._currentTorchStatus=this._currentTorchStatus===!1,Z.applyConstraints({advanced:[{torch:this._currentTorchStatus}]}).catch(function(EA){console.log(EA)})):document.getElementById("error-popup")||((gA=document.createElement("div")).innerHTML="no mobile torch is available on your camera",gA.setAttribute("id","error-popup"),document.body.appendChild(gA))}else{var gA;document.getElementById("error-popup")||((gA=document.createElement("div")).innerHTML="enabling mobile torch is available only on webcam",gA.setAttribute("id","error-popup"),document.body.appendChild(gA))}},Mg.prototype.domElementWidth=function(){return parseInt(this.domElement.style.width)},Mg.prototype.domElementHeight=function(){return parseInt(this.domElement.style.height)},Mg.prototype.onResizeElement=function(){var b=window.innerWidth,Z=window.innerHeight;if(console.assert(arguments.length===0),this.domElement.nodeName==="IMG")var gA=this.domElement.naturalWidth,EA=this.domElement.naturalHeight;else this.domElement.nodeName==="VIDEO"?(gA=this.domElement.videoWidth,EA=this.domElement.videoHeight):console.assert(!1);var dA=gA/EA;if(b/Z<dA){var bA=dA*Z;this.domElement.style.width=bA+"px",this.domElement.style.marginLeft=-(bA-b)/2+"px",this.domElement.style.height=Z+"px",this.domElement.style.marginTop="0px"}else{var iI=1/(dA/b);this.domElement.style.height=iI+"px",this.domElement.style.marginTop=-(iI-Z)/2+"px",this.domElement.style.width=b+"px",this.domElement.style.marginLeft="0px"}},Mg.prototype.copyElementSizeTo=function(b){window.innerWidth>window.innerHeight?(b.style.width=this.domElement.style.width,b.style.height=this.domElement.style.height,b.style.marginLeft=this.domElement.style.marginLeft,b.style.marginTop=this.domElement.style.marginTop):(b.style.height=this.domElement.style.height,b.style.width=4*parseInt(b.style.height)/3+"px",b.style.marginLeft=(window.innerWidth-parseInt(b.style.width))/2+"px",b.style.marginTop=0)},Mg.prototype.copySizeTo=function(){console.warn("obsolete function arToolkitSource.copySizeTo. Use arToolkitSource.copyElementSizeTo"),this.copyElementSizeTo.apply(this,arguments)},Mg.prototype.onResize=function(b,Z,gA){if(arguments.length!==3)return console.warn("obsolete function arToolkitSource.onResize. Use arToolkitSource.onResizeElement"),this.onResizeElement.apply(this,arguments);var EA=b.parameters.trackingBackend;EA==="artoolkit"?(this.onResizeElement(),!Z.domElement.dataset.aframeCanvas&&this.copyElementSizeTo(Z.domElement),b.arController!==null&&this.copyElementSizeTo(b.arController.canvas)):console.assert(!1,"unhandled trackingBackend "+EA),EA==="artoolkit"?b.arController!==null&&gA.projectionMatrix.copy(b.getProjectionMatrix()):console.assert(!1,"unhandled trackingBackend "+EA)};const aB=Mg,Gg=function(b,Z,gA){var EA=this;mg.call(this,Z),arguments.length>3&&console.assert("wrong api for",Gg),this.parameters={subMarkersControls:gA.subMarkersControls,subMarkerPoses:gA.subMarkerPoses,changeMatrixMode:gA.changeMatrixMode!==void 0?gA.changeMatrixMode:"modelViewMatrix"},this.object3d.visible=!1,this.subMarkersControls=this.parameters.subMarkersControls,this.subMarkerPoses=this.parameters.subMarkerPoses,b.addEventListener("sourceProcessed",function(){EA._onSourceProcessed()})};Gg.prototype=Object.create(mg.prototype),Gg.prototype.constructor=Gg,Gg.prototype._onSourceProcessed=function(){var b=this,Z={count:0,position:{sum:new TA.Vector3(0,0,0),average:new TA.Vector3(0,0,0)},quaternion:{sum:new TA.Quaternion(0,0,0,0),average:new TA.Quaternion(0,0,0,0)},scale:{sum:new TA.Vector3(0,0,0),average:new TA.Vector3(0,0,0)}},gA=b.parameters.subMarkersControls[0].object3d.quaternion;if(this.parameters.subMarkersControls.forEach(function(dA,bA){var iI=dA.object3d;if(iI.visible!==!1){var DI=iI.matrix.clone(),bI=b.parameters.subMarkerPoses[bA];DI.multiply(new TA.Matrix4().copy(bI).invert());var PI=new TA.Vector3,ng=new TA.Quaternion,vg=new TA.Vector3;DI.decompose(PI,ng,vg),Z.count++,Gg.averageVector3(Z.position.sum,PI,Z.count,Z.position.average),Gg.averageQuaternion(Z.quaternion.sum,ng,gA,Z.count,Z.quaternion.average),Gg.averageVector3(Z.scale.sum,vg,Z.count,Z.scale.average)}}),Z.count>0?b.object3d.visible=!0:b.object3d.visible=!1,Z.count>0){var EA=new TA.Matrix4;EA.compose(Z.position.average,Z.quaternion.average,Z.scale.average),this.parameters.changeMatrixMode==="modelViewMatrix"?b.object3d.matrix.copy(EA):this.parameters.changeMatrixMode==="cameraTransformMatrix"?b.object3d.matrix.copy(EA).invert():console.assert(!1),b.object3d.matrix.decompose(b.object3d.position,b.object3d.quaternion,b.object3d.scale)}},Gg.averageQuaternion=function(b,Z,gA,EA,dA){return dA=dA||new TA.Quaternion,console.assert(gA instanceof TA.Quaternion==1),Z.dot(gA)>0&&(Z=new TA.Quaternion(-Z.x,-Z.y,-Z.z,-Z.w)),b.x+=Z.x,b.y+=Z.y,b.z+=Z.z,b.w+=Z.w,dA.x=b.x/EA,dA.y=b.y/EA,dA.z=b.z/EA,dA.w=b.w/EA,dA.normalize(),dA},Gg.averageVector3=function(b,Z,gA,EA){return EA=EA||new TA.Vector3,b.x+=Z.x,b.y+=Z.y,b.z+=Z.z,EA.x=b.x/gA,EA.y=b.y/gA,EA.z=b.z/gA,EA},Gg.computeCenter=function(b){var Z=JSON.parse(b),gA={count:0,position:{sum:new TA.Vector3(0,0,0),average:new TA.Vector3(0,0,0)},quaternion:{sum:new TA.Quaternion(0,0,0,0),average:new TA.Quaternion(0,0,0,0)},scale:{sum:new TA.Vector3(0,0,0),average:new TA.Vector3(0,0,0)}},EA=new TA.Quaternion;Z.subMarkersControls.forEach(function(bA){var iI=new TA.Matrix4().fromArray(bA.poseMatrix),DI=new TA.Vector3,bI=new TA.Quaternion,PI=new TA.Vector3;iI.decompose(DI,bI,PI),gA.count++,Gg.averageVector3(gA.position.sum,DI,gA.count,gA.position.average),Gg.averageQuaternion(gA.quaternion.sum,bI,EA,gA.count,gA.quaternion.average),Gg.averageVector3(gA.scale.sum,PI,gA.count,gA.scale.average)});var dA=new TA.Matrix4;return dA.compose(gA.position.average,gA.quaternion.average,gA.scale.average),dA},Gg.computeBoundingBox=function(b){var Z=JSON.parse(b),gA=new TA.Box3;return Z.subMarkersControls.forEach(function(EA){var dA=new TA.Matrix4().fromArray(EA.poseMatrix),bA=new TA.Vector3,iI=new TA.Quaternion,DI=new TA.Vector3;dA.decompose(bA,iI,DI),gA.expandByPoint(bA)}),gA},Gg.prototype.updateSmoothedControls=function(b,Z){Z===void 0&&(Z=[[.4,.1,.3],[.5,.1,.4],[.5,.2,.5],[.6,.2,.7],[.6,.2,.7]]);var gA=0;if(this.parameters.subMarkersControls.forEach(function(dA,bA){dA.object3d.visible===!0&&gA++}),Z[gA-1]!==void 0)var EA=Z[gA-1];else EA=Z[Z.length-1];b.parameters.lerpPosition=EA[0],b.parameters.lerpQuaternion=EA[1],b.parameters.lerpScale=EA[2]},Gg.fromJSON=function(b,Z,gA,EA,dA){var bA=JSON.parse(EA),iI=[],DI=[];return dA=dA||{},bA.subMarkersControls.forEach(function(bI){var PI=new TA.Object3D;Z.add(PI);var ng=new rg(b,PI,bI.parameters);iI.push(ng),DI.push(new TA.Matrix4().fromArray(bI.poseMatrix))}),dA.subMarkersControls=iI,dA.subMarkerPoses=DI,new yB(b,gA,dA)};const yB=Gg,fg=function(b,Z){var gA=this;this._arToolkitContext=b,this.subMarkersControls=Z,this.enabled=!0,b.addEventListener("sourceProcessed",function(){gA._onSourceProcessed()})};fg.prototype._onSourceProcessed=function(){var b=this.subMarkersControls[0].object3d.quaternion;if(this.enabled!==!1)for(var Z=this.subMarkersControls.filter(function(yA){return yA.object3d.visible===!0}),gA=Object.keys(Z).length,EA=new THREE.Vector3,dA=new THREE.Quaternion,bA=new THREE.Vector3,iI=new THREE.Matrix4,DI=0;DI<gA;DI++)for(var bI=Z[DI],PI=0;PI<gA;PI++){var ng=Z[PI];if(DI!==PI){bI.object3d.userData.seenCouples===void 0&&(bI.object3d.userData.seenCouples={});var vg=bI.object3d.userData.seenCouples;vg[ng.id]===void 0&&(vg[ng.id]={count:0,position:{sum:new THREE.Vector3(0,0,0),average:new THREE.Vector3(0,0,0)},quaternion:{sum:new THREE.Quaternion(0,0,0,0),average:new THREE.Quaternion(0,0,0,0)},scale:{sum:new THREE.Vector3(0,0,0),average:new THREE.Vector3(0,0,0)}}),iI.copy(bI.object3d.matrix).invert(),iI.multiply(ng.object3d.matrix),iI.decompose(EA,dA,bA);var Fg=vg[ng.id];Fg.count++,yB.averageVector3(Fg.position.sum,EA,Fg.count,Fg.position.average),yB.averageQuaternion(Fg.quaternion.sum,dA,b,Fg.count,Fg.quaternion.average),yB.averageVector3(Fg.scale.sum,bA,Fg.count,Fg.scale.average)}}},fg.prototype.computeResult=function(){var b=this,Z=this.subMarkersControls[0];this.deleteResult(),Z.object3d.userData.result={averageMatrix:new THREE.Matrix4,confidenceFactor:1};do{var gA=!1;this.subMarkersControls.forEach(function(EA){var dA=EA.object3d.userData.result;if(!(dA!==void 0&&dA.confidenceFactor>=1)){var bA=b._getLearnedCoupleStats(EA);if(bA!==null){var iI=b._getSubMarkerControlsByID(bA),DI=EA.object3d.userData.seenCouples[bA],bI=new THREE.Matrix4;bI.compose(DI.position.average,DI.quaternion.average,DI.scale.average);var PI=iI.object3d.userData.result.averageMatrix,ng=new THREE.Matrix4().getInverse(PI).multiply(bI);ng=new THREE.Matrix4().getInverse(ng),console.assert(EA.object3d.userData.result===void 0),EA.object3d.userData.result={averageMatrix:ng,confidenceFactor:1},gA=!0}}})}while(gA===!0)},fg.prototype._getLearnedCoupleStats=function(b){if(b.object3d.userData.seenCouples===void 0)return null;for(var Z=b.object3d.userData.seenCouples,gA=Object.keys(Z).map(Number),EA=0;EA<gA.length;EA++){var dA=gA[EA],bA=this._getSubMarkerControlsByID(dA).object3d.userData.result;if(bA!==void 0&&bA.confidenceFactor>=1)return dA}return null},fg.prototype._getSubMarkerControlsByID=function(b){for(var Z=0;Z<this.subMarkersControls.length;Z++){var gA=this.subMarkersControls[Z];if(gA.id===b)return gA}return null},fg.prototype.toJSON=function(){this.computeResult();var b={meta:{createdBy:"Area Learning - AR.js "+THREEx.ArToolkitContext.REVISION,createdAt:new Date().toJSON()},trackingBackend:this._arToolkitContext.parameters.trackingBackend,subMarkersControls:[]},Z=this.subMarkersControls[0];return new THREE.Matrix4().copy(Z.object3d.matrix).invert(),this.subMarkersControls.forEach(function(gA,EA){if(gA.object3d.userData.result!==void 0){var dA=gA.object3d.userData.result.averageMatrix;console.assert(dA instanceof THREE.Matrix4);var bA={parameters:{},poseMatrix:dA.toArray()};gA.parameters.type==="pattern"?(bA.parameters.type=gA.parameters.type,bA.parameters.patternUrl=gA.parameters.patternUrl):gA.parameters.type==="barcode"?(bA.parameters.type=gA.parameters.type,bA.parameters.barcodeValue=gA.parameters.barcodeValue):console.assert(!1),b.subMarkersControls.push(bA)}}),JSON.stringify(b,null,"	")},fg.prototype.resetStats=function(){this.deleteResult(),this.subMarkersControls.forEach(function(b){delete b.object3d.userData.seenCouples})},fg.prototype.deleteResult=function(){this.subMarkersControls.forEach(function(b){delete b.object3d.userData.result})};const rB=fg,LB={navigateToLearnerPage:function(b,Z){var gA={backURL:location.href,trackingBackend:Z,markersControlsParameters:LB.createDefaultMarkersControlsParameters(Z)};location.href=b+"?"+encodeURIComponent(JSON.stringify(gA))},storeDefaultMultiMarkerFile:function(b){var Z=LB.createDefaultMultiMarkerFile(b);localStorage.setItem("ARjsMultiMarkerFile",JSON.stringify(Z))},createDefaultMultiMarkerFile:function(b){console.assert(b);var Z=document.createElement("a");Z.href=sB.baseURL;var gA=Z.href,EA={meta:{createdBy:"AR.js "+sB.REVISION+" - Default Marker",createdAt:new Date().toJSON()},trackingBackend:b,subMarkersControls:[]};return EA.subMarkersControls[0]={parameters:{},poseMatrix:new TA.Matrix4().makeTranslation(0,0,0).toArray()},b==="artoolkit"?(EA.subMarkersControls[0].parameters.type="pattern",EA.subMarkersControls[0].parameters.patternUrl=gA+"examples/marker-training/examples/pattern-files/pattern-hiro.patt"):console.assert(!1),EA},createDefaultMarkersControlsParameters:function(b){var Z=document.createElement("a");Z.href=sB.baseURL;var gA=Z.href;if(b==="artoolkit")var EA=[{type:"pattern",patternUrl:gA+"examples/marker-training/examples/pattern-files/pattern-hiro.patt"},{type:"pattern",patternUrl:gA+"examples/marker-training/examples/pattern-files/pattern-kanji.patt"},{type:"pattern",patternUrl:gA+"examples/marker-training/examples/pattern-files/pattern-letterA.patt"},{type:"pattern",patternUrl:gA+"examples/marker-training/examples/pattern-files/pattern-letterB.patt"},{type:"pattern",patternUrl:gA+"examples/marker-training/examples/pattern-files/pattern-letterC.patt"},{type:"pattern",patternUrl:gA+"examples/marker-training/examples/pattern-files/pattern-letterF.patt"}];else console.assert(!1);return EA},storeMarkersAreaFileFromResolution:function(b,Z,gA){var EA=this.buildMarkersAreaFileFromResolution(b,Z,gA);localStorage.setItem("ARjsMultiMarkerFile",JSON.stringify(EA))},buildMarkersAreaFileFromResolution:function(b,Z,gA){var EA={meta:{createdBy:"AR.js - Augmented Website",createdAt:new Date().toJSON()},trackingBackend:b,subMarkersControls:[]};if(Z>gA)var dA=.4*gA;else Z<gA?dA=.4*Z:Z===gA?dA=.33*Z:console.assert(!1);var bA=.8*dA,iI=(Z-dA)/2/bA,DI=(gA-dA)/2/bA,bI=PI("center",0,0);return EA.subMarkersControls.push(bI),bI=PI("topleft",-iI,-DI),EA.subMarkersControls.push(bI),bI=PI("topright",+iI,-DI),EA.subMarkersControls.push(bI),bI=PI("bottomleft",-iI,+DI),EA.subMarkersControls.push(bI),bI=PI("bottomright",+iI,+DI),EA.subMarkersControls.push(bI),EA;function PI(ng,vg,Fg){console.log("buildSubMarkerControls",ng,vg,Fg);var yA={parameters:{},poseMatrix:new TA.Matrix4().makeTranslation(vg,0,Fg).toArray()};return b==="artoolkit"?function(MA,YA){var dI=document.createElement("a");dI.href=sB.baseURL;var AI=dI.href,TI={center:ZI(AI+"examples/marker-training/examples/pattern-files/pattern-hiro.patt"),topleft:ZI(AI+"examples/marker-training/examples/pattern-files/pattern-letterA.patt"),topright:ZI(AI+"examples/marker-training/examples/pattern-files/pattern-letterB.patt"),bottomleft:ZI(AI+"examples/marker-training/examples/pattern-files/pattern-letterC.patt"),bottomright:ZI(AI+"examples/marker-training/examples/pattern-files/pattern-letterF.patt")};return console.assert(TI[YA]!==void 0),MA.type="pattern",void(MA.patternUrl=TI[YA]);function ZI(YI){var hg=document.createElement("a");return hg.href=YI,hg.href}}(yA.parameters,ng):console.assert(!1),yA}}},CB=LB})(),di})())})(wa);var kt=wa.exports;kt.ArToolkitContext.baseURL="./";const nd=new Ow,da=new Vw;da.setDecoderPath("three/examples/jsm/libs/draco/");nd.setDRACOLoader(da);const sd=new Pw;td.enabled=!0;const ad=await fetch("/data/BusinessParameters.json"),li=await ad.json();var qQ=new Xw({antialias:!0,depth:!0,precision:"highp",toneMapping:_w,toneMappingExposure:1,premultipliedAlpha:!1});qQ.localClippingEnabled=!0;const ya=1;console.log("device pix ratio "+window.devicePixelRatio+" screen width "+window.screen.width);const rd=window.screen.width*window.devicePixelRatio*ya,hd=window.screen.height*window.devicePixelRatio*ya;qQ.setSize(rd,hd);qQ.domElement.style.position="absolute";qQ.domElement.style.top="0px";qQ.domElement.style.left="0px";document.body.appendChild(qQ.domElement);var Te=[],bC,Da,uQ=new jw,cd=new zw(uQ),wi=new $w;uQ.add(wi);sd.load("/models/this_ambient.hdr",Ig=>{Ig.mapping=Ad,uQ.environment=Ig});const Dd=document.getElementById("hbox_slider"),ld=document.getElementById("product_name"),wd=document.getElementById("product_description");li.products.forEach(Ig=>{const Xg=document.createElement("a");Xg.href="#";const zB=document.createElement("img");zB.src=Ig.thumbnailImage,Xg.appendChild(zB),Xg.addEventListener("click",()=>{cd.LoadModel(Ig.model_url),ld.innerText=Ig.label,wd.innerText=Ig.description}),Dd.appendChild(Xg)});var oB=new kt.ArToolkitSource({sourceType:"webcam",sourceWidth:window.innerWidth>window.innerHeight?640:480,sourceHeight:window.innerWidth>window.innerHeight?480:640,displayWidth:window.innerWidth,displayHeight:window.innerHeight});oB.init(function(){oB.domElement.willReadFrequently=!0,oB.domElement.addEventListener("canplay",()=>{console.log("canplay "+oB.domElement.id+" actual source dimensions "+oB.domElement.videoWidth+" "+oB.domElement.videoHeight);const Xg=new Id(oB.domElement);Xg.colorSpace=gd,uQ.background=Xg,uQ.backgroundIntensity=1,dd()}),window.arToolkitSource=oB,setTimeout(()=>{ua()},100)});window.addEventListener("resize",function(){ua()});function ua(){oB.onResizeElement(),oB.copyElementSizeTo(qQ.domElement),window.arToolkitContext&&window.arToolkitContext.arController!==null&&oB.copyElementSizeTo(window.arToolkitContext.arController.canvas)}function dd(){bC=new kt.ArToolkitContext({cameraParametersUrl:kt.ArToolkitContext.baseURL+"/data/camera_para.dat",detectionMode:li.detectionMode,matrixCodeType:li.matrixCodeType,labelingMode:li.labelingMode}),bC.init(()=>{wi.projectionMatrix.copy(bC.getProjectionMatrix()),bC.arController.orientation=la(),bC.arController.options.orientation=la(),window.arToolkitContext=bC}),Da=new kt.ArMarkerControls(bC,wi,{type:li.marker_type,patternUrl:"/data/pattern-marker.patt",barcodeValue:li.barcodeValue,patternRatio:.5,changeMatrixMode:"cameraTransformMatrix"}),uQ.visible=!1,window.arMarkerControls=Da}function la(){if(!oB)return null;console.log("actual source dimensions "+oB.domElement.videoWidth+" "+oB.domElement.videoHeight);let Ig;return oB.domElement.videoWidth>oB.domElement.videoHeight?Ig="landscape":Ig="portrait",Ig}Te.push(function(){if(!(!bC||!oB||!oB.ready)){if(bC.update(oB.domElement),bC.arController){let mB=bC.getProjectionMatrix().toArray();ud(mB),mB=yd(mB,.1,1e3,.1,1e3);let yg=new id;yg.fromArray(mB,0),wi.projectionMatrix.copy(yg)}uQ.visible=wi.visible}});function yd(Ig,Xg,zB,nB,mB){let yg=Ig;return yg[0]=Ig[0]/Xg*nB,yg[5]=Ig[5]/Xg*nB,yg[10]=-((mB+nB)/(mB-nB)),yg[14]=-2*mB*nB/(mB-nB),yg}function ud(Ig){Ig[10],Ig[14];let Xg=2*Math.atan(1/Ig[5])*180/Math.PI,zB=Ig[14]/(Ig[10]-1),nB=Ig[14]/(Ig[10]+1);return[zB,nB,Xg]}let Gd=new Bd(1,1),Rd=new Cd({transparent:!0,opacity:.5,side:Qd,color:"rgb(0,0,0)"}),jo=new Ed(Gd,Rd);jo.position.y=0;jo.rotation.x=Math.PI*.5;uQ.add(jo);Te.push(function(Ig){});Te.push(function(){qQ.render(uQ,wi)});var We=null;requestAnimationFrame(function Ig(Xg){requestAnimationFrame(Ig),We=We||Xg-1e3/60;var zB=Math.min(200,Xg-We);We=Xg,Te.forEach(function(nB){nB(zB/1e3,Xg/1e3)})});