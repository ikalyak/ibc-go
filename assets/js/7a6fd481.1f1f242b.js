"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40860],{94097:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(85893),s=t(11151);const a={title:"Concepts",sidebar_label:"Concepts",sidebar_position:2,slug:"/ibc/light-clients/solomachine/concepts"},o="Concepts",l={id:"light-clients/solomachine/concepts",title:"Concepts",description:"Client State",source:"@site/versioned_docs/version-v9.0.x/03-light-clients/03-solomachine/02-concepts.md",sourceDirName:"03-light-clients/03-solomachine",slug:"/ibc/light-clients/solomachine/concepts",permalink:"/v9/ibc/light-clients/solomachine/concepts",draft:!1,unlisted:!1,tags:[],version:"v9.0.x",sidebarPosition:2,frontMatter:{title:"Concepts",sidebar_label:"Concepts",sidebar_position:2,slug:"/ibc/light-clients/solomachine/concepts"},sidebar:"defaultSidebar",previous:{title:"Solomachine",permalink:"/v9/ibc/light-clients/solomachine/solomachine"},next:{title:"State",permalink:"/v9/ibc/light-clients/solomachine/state"}},r={},c=[{value:"Client State",id:"client-state",level:2},{value:"Consensus State",id:"consensus-state",level:2},{value:"Public Key",id:"public-key",level:2},{value:"Counterparty Verification",id:"counterparty-verification",level:2},{value:"Proofs",id:"proofs",level:2},{value:"Updates By Header",id:"updates-by-header",level:2},{value:"Updates By Proposal",id:"updates-by-proposal",level:2},{value:"Misbehaviour",id:"misbehaviour",level:2},{value:"Upgrades",id:"upgrades",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"concepts",children:"Concepts"}),"\n",(0,i.jsx)(n.h2,{id:"client-state",children:"Client State"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ClientState"})," for a solo machine light client stores the latest sequence, the frozen sequence,\nthe latest consensus state, and client flag indicating if the client should be allowed to be updated\nafter a governance proposal."]}),"\n",(0,i.jsx)(n.p,{children:"If the client is not frozen then the frozen sequence is 0."}),"\n",(0,i.jsx)(n.h2,{id:"consensus-state",children:"Consensus State"}),"\n",(0,i.jsx)(n.p,{children:"The consensus states stores the public key, diversifier, and timestamp of the solo machine light client."}),"\n",(0,i.jsx)(n.p,{children:"The diversifier is used to prevent accidental misbehaviour if the same public key is used across\ndifferent chains with the same client identifier. It should be unique to the chain the light client\nis used on."}),"\n",(0,i.jsx)(n.h2,{id:"public-key",children:"Public Key"}),"\n",(0,i.jsxs)(n.p,{children:["The public key can be a single public key or a multi-signature public key. The public key type used\nmust fulfill the tendermint public key interface (this will become the SDK public key interface in the\nnear future). The public key must be registered on the application codec otherwise encoding/decoding\nerrors will arise. The public key stored in the consensus state is represented as a protobuf ",(0,i.jsx)(n.code,{children:"Any"}),".\nThis allows for flexibility in what other public key types can be supported in the future."]}),"\n",(0,i.jsx)(n.h2,{id:"counterparty-verification",children:"Counterparty Verification"}),"\n",(0,i.jsx)(n.p,{children:"The solo machine light client can verify counterparty client state, consensus state, connection state,\nchannel state, packet commitments, packet acknowledgements, packet receipt absence,\nand the next sequence receive. At the end of each successful verification call the light\nclient sequence number will be incremented."}),"\n",(0,i.jsx)(n.p,{children:"Successful verification requires the current public key to sign over the proof."}),"\n",(0,i.jsx)(n.h2,{id:"proofs",children:"Proofs"}),"\n",(0,i.jsx)(n.p,{children:"A solo machine proof should verify that the solomachine public key signed\nover some specified data. The format for generating marshaled proofs for\nthe SDK's implementation of solo machine is as follows:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Construct the data using the associated protobuf definition and marshal it."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"data := &ClientStateData{\n  Path:        []byte(path.String()),\n  ClientState: protoAny,\n}\n\ndataBz, err := cdc.Marshal(data)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The helper functions ",(0,i.jsx)(n.code,{children:"...DataBytes()"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/06-solomachine/proof.go",children:"proof.go"})," handle this\nfunctionality."]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Construct the ",(0,i.jsx)(n.code,{children:"SignBytes"})," and marshal it."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"signBytes := &SignBytes{\n  Sequence:    sequence,\n  Timestamp:   timestamp,\n  Diversifier: diversifier,\n  DataType:    CLIENT,\n  Data:        dataBz,\n}\n\nsignBz, err := cdc.Marshal(signBytes)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The helper functions ",(0,i.jsx)(n.code,{children:"...SignBytes()"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/06-solomachine/proof.go",children:"proof.go"})," handle this functionality.\nThe ",(0,i.jsx)(n.code,{children:"DataType"})," field is used to disambiguate what type of data was signed to prevent potential\nproto encoding overlap."]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["Sign the sign bytes. Embed the signatures into either ",(0,i.jsx)(n.code,{children:"SingleSignatureData"})," or ",(0,i.jsx)(n.code,{children:"MultiSignatureData"}),".\nConvert the ",(0,i.jsx)(n.code,{children:"SignatureData"})," to proto and marshal it."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"sig, err := key.Sign(signBz)\nsigData := &signing.SingleSignatureData{\n  Signature: sig,\n}\n\nprotoSigData := signing.SignatureDataToProto(sigData)\nbz, err := cdc.Marshal(protoSigData)\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Construct a ",(0,i.jsx)(n.code,{children:"TimestampedSignatureData"})," and marshal it. The marshaled result can be passed in\nas the proof parameter to the verification functions."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"timestampedSignatureData := &solomachine.TimestampedSignatureData{\n  SignatureData: sigData,\n  Timestamp: solomachine.Time,\n}\n\nproof, err := cdc.Marshal(timestampedSignatureData)\n"})}),"\n",(0,i.jsx)(n.p,{children:"NOTE: At the end of this process, the sequence associated with the key needs to be updated.\nThe sequence must be incremented each time proof is generated."}),"\n",(0,i.jsx)(n.h2,{id:"updates-by-header",children:"Updates By Header"}),"\n",(0,i.jsx)(n.p,{children:"An update by a header will only succeed if:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the header provided is parseable to solo machine header"}),"\n",(0,i.jsx)(n.li,{children:"the header sequence matches the current sequence"}),"\n",(0,i.jsx)(n.li,{children:"the header timestamp is greater than or equal to the consensus state timestamp"}),"\n",(0,i.jsx)(n.li,{children:"the currently registered public key generated the proof"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If the update is successful:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the public key is updated"}),"\n",(0,i.jsx)(n.li,{children:"the diversifier is updated"}),"\n",(0,i.jsx)(n.li,{children:"the timestamp is updated"}),"\n",(0,i.jsx)(n.li,{children:"the sequence is incremented by 1"}),"\n",(0,i.jsx)(n.li,{children:"the new consensus state is set in the client state"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"updates-by-proposal",children:"Updates By Proposal"}),"\n",(0,i.jsx)(n.p,{children:"An update by a governance proposal will only succeed if:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the substitute provided is parseable to solo machine client state"}),"\n",(0,i.jsx)(n.li,{children:"the new consensus state public key does not equal the current consensus state public key"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If the update is successful:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the subject client state is updated to the substitute client state"}),"\n",(0,i.jsx)(n.li,{children:"the subject consensus state is updated to the substitute consensus state"}),"\n",(0,i.jsx)(n.li,{children:"the client is unfrozen (if it was previously frozen)"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["NOTE: Previously, ",(0,i.jsx)(n.code,{children:"AllowUpdateAfterProposal"})," was used to signal the update/recovery options for the solo machine client.  However, this has now been deprecated because a code migration can overwrite the client and consensus states regardless of the value of this parameter. If governance would vote to overwrite a client or consensus state, it is likely that governance would also be willing to perform a code migration to do the same."]}),"\n",(0,i.jsx)(n.h2,{id:"misbehaviour",children:"Misbehaviour"}),"\n",(0,i.jsx)(n.p,{children:"Misbehaviour handling will only succeed if:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the misbehaviour provided is parseable to solo machine misbehaviour"}),"\n",(0,i.jsx)(n.li,{children:"the client is not already frozen"}),"\n",(0,i.jsx)(n.li,{children:"the current public key signed over two unique data messages at the same sequence and diversifier."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If the misbehaviour is successfully processed:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"the client is frozen by setting the frozen sequence to the misbehaviour sequence"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"NOTE: Misbehaviour processing is data processing order dependent. A misbehaving solo machine\ncould update to a new public key to prevent being frozen before misbehaviour is submitted."}),"\n",(0,i.jsx)(n.h2,{id:"upgrades",children:"Upgrades"}),"\n",(0,i.jsx)(n.p,{children:"Upgrades to solo machine light clients are not supported since an entirely different type of\npublic key can be set using normal client updates."})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var i=t(67294);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);