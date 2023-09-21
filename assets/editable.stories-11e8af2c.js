import{a as r,j as e,F as I}from"./jsx-runtime-29545a09.js";import{I as P,c as we,h as ve,i as Ve}from"./fontawesome-icon-d891cbf9.js";import{u as Ie,C as O}from"./index.esm-52a02924.js";import{E as a,a as t,b as l,c as fe,u as Se}from"./editable-0787b049.js";import{B as Ce,a as k}from"./button-900c3cb1.js";import{F as s}from"./form-control-bbec717c.js";import{V as Pe}from"./stack-b1b08758.js";import{I as F}from"./icon-button-665c93cd.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";import"./icon-2298db64.js";import"./index-d953af92.js";import"./theme-f3d0af46.js";import"./factory-3e6420ff.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./index-fbad4289.js";import"./index-4c4f47ee.js";import"./index-9451f140.js";import"./use-component-style-fb710021.js";import"./loading-a8f76bf0.js";import"./index-f3546514.js";import"./index-bd23768e.js";const Ue={title:"Components / Forms / Editable",component:a},d=()=>r(a,{defaultValue:"オッス！オラ悟空！",children:[e(t,{}),e(l,{})]}),u=()=>r(a,{defaultValue:"オッス！オラ悟空！",children:[e(t,{}),e(fe,{})]}),c=()=>r(a,{startWithEditView:!0,defaultValue:"オッス！オラ悟空！",children:[e(t,{}),e(l,{})]}),m=()=>r(a,{isPreviewFocusable:!1,defaultValue:"オッス！オラ悟空！",children:[e(t,{}),e(l,{})]}),p=()=>r(a,{submitOnBlur:!1,defaultValue:"オッス！オラ悟空！",children:[e(t,{}),e(l,{})]}),b=()=>r(a,{selectAllOnFocus:!1,defaultValue:"オッス！オラ悟空！",children:[e(t,{}),e(l,{})]}),E=()=>r(a,{placeholder:"オッス！オラ悟空！",children:[e(t,{}),e(l,{})]}),h=()=>r(I,{children:[r(a,{defaultValue:"default border color",children:[e(t,{}),e(l,{})]}),r(a,{focusBorderColor:"green.500",defaultValue:"custom border color",children:[e(t,{}),e(l,{})]}),r(a,{isInvalid:!0,errorBorderColor:"orange.500",defaultValue:"custom border color",children:[e(t,{}),e(l,{})]})]}),f=()=>r(I,{children:[r(a,{isDisabled:!0,defaultValue:"your email address",children:[e(t,{}),e(l,{})]}),e(s,{isDisabled:!0,label:"Email address",helperMessage:"We'll never share your email.",children:r(a,{defaultValue:"your email address",children:[e(t,{}),e(l,{})]})})]}),g=()=>r(I,{children:[r(a,{isReadOnly:!0,defaultValue:"your email address",children:[e(t,{}),e(l,{})]}),e(s,{isReadOnly:!0,label:"Email address",helperMessage:"We'll never share your email.",children:r(a,{defaultValue:"your email address",children:[e(t,{}),e(l,{})]})})]}),w=()=>r(I,{children:[r(a,{isInvalid:!0,defaultValue:"your email address",children:[e(t,{}),e(l,{})]}),e(s,{isInvalid:!0,label:"Email address",errorMessage:"Email is required.",children:r(a,{defaultValue:"your email address",children:[e(t,{}),e(l,{})]})})]}),v=()=>r(a,{display:"flex",gap:"sm",isPreviewFocusable:!1,defaultValue:"オッス！オラ悟空！",children:[e(t,{w:"full"}),e(l,{}),e(()=>{const{isEditing:i,getSubmitProps:S,getCancelProps:C,getEditProps:n}=Se();return i?r(k,{size:"sm",gap:"sm",children:[e(F,{icon:e(P,{icon:we}),...S()}),e(F,{icon:e(P,{icon:ve}),...C()})]}):e(k,{size:"sm",gap:"sm",children:e(F,{icon:e(P,{icon:Ve}),...n()})})},{})]}),V=()=>{var B,x;const y={input:"",textarea:""},{control:i,handleSubmit:S,watch:C,formState:{errors:n}}=Ie({defaultValues:y}),ge=o=>console.log("submit:",o);return console.log("watch:",C()),r(Pe,{as:"form",onSubmit:S(ge),children:[e(s,{isInvalid:!!n.input,label:"Name",errorMessage:(B=n.input)==null?void 0:B.message,children:e(O,{name:"input",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:o})=>r(a,{placeholder:"孫悟空",...o,children:[e(t,{}),e(l,{})]})})}),e(s,{isInvalid:!!n.textarea,label:"Feedback",errorMessage:(x=n.textarea)==null?void 0:x.message,children:e(O,{name:"textarea",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:o})=>r(a,{placeholder:"オッス！オラ悟空！",...o,children:[e(t,{}),e(fe,{})]})})}),e(Ce,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var q,D,M;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Editable defaultValue='オッス！オラ悟空！'>
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(M=(D=d.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var T,W,R;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Editable defaultValue='オッス！オラ悟空！'>
      <EditablePreview />
      <EditableTextarea />
    </Editable>;
}`,...(R=(W=u.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var G,z,A;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Editable startWithEditView defaultValue='オッス！オラ悟空！'>
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var j,H,N;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Editable isPreviewFocusable={false} defaultValue='オッス！オラ悟空！'>
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(N=(H=m.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var X,_,J;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Editable submitOnBlur={false} defaultValue='オッス！オラ悟空！'>
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(J=(_=p.parameters)==null?void 0:_.docs)==null?void 0:J.source}}};var K,L,Q;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Editable selectAllOnFocus={false} defaultValue='オッス！オラ悟空！'>
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(Q=(L=b.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,Y,Z;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <Editable placeholder='オッス！オラ悟空！'>
      <EditablePreview />
      <EditableInput />
    </Editable>;
}`,...(Z=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <Editable defaultValue='default border color'>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Editable focusBorderColor='green.500' defaultValue='custom border color'>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <Editable isInvalid errorBorderColor='orange.500' defaultValue='custom border color'>
        <EditablePreview />
        <EditableInput />
      </Editable>
    </>;
}`,...(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,le;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <Editable isDisabled defaultValue='your email address'>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl isDisabled label='Email address' helperMessage="We'll never share your email.">
        <Editable defaultValue='your email address'>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>;
}`,...(le=(te=f.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ne,oe,se;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <>
      <Editable isReadOnly defaultValue='your email address'>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl isReadOnly label='Email address' helperMessage="We'll never share your email.">
        <Editable defaultValue='your email address'>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>;
}`,...(se=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,de,ue;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <>
      <Editable isInvalid defaultValue='your email address'>
        <EditablePreview />
        <EditableInput />
      </Editable>

      <FormControl isInvalid label='Email address' errorMessage='Email is required.'>
        <Editable defaultValue='your email address'>
          <EditablePreview />
          <EditableInput />
        </Editable>
      </FormControl>
    </>;
}`,...(ue=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ce,me,pe;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  const CustomControls = () => {
    const {
      isEditing,
      getSubmitProps,
      getCancelProps,
      getEditProps
    } = useEditableControl();
    return isEditing ? <ButtonGroup size='sm' gap='sm'>
        <IconButton icon={<Icon icon={faCheck} />} {...getSubmitProps()} />
        <IconButton icon={<Icon icon={faXmark} />} {...getCancelProps()} />
      </ButtonGroup> : <ButtonGroup size='sm' gap='sm'>
        <IconButton icon={<Icon icon={faPen} />} {...getEditProps()} />
      </ButtonGroup>;
  };
  return <Editable display='flex' gap='sm' isPreviewFocusable={false} defaultValue='オッス！オラ悟空！'>
      <EditablePreview w='full' />
      <EditableInput />
      <CustomControls />
    </Editable>;
}`,...(pe=(me=v.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var be,Ee,he;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  type Data = {
    input: string;
    textarea: string;
  };
  const defaultValues: Data = {
    input: '',
    textarea: ''
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log('submit:', data);
  console.log('watch:', watch());
  return <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.input} label='Name' errorMessage={errors.input?.message}>
        <Controller name='input' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <Editable placeholder='孫悟空' {...field}>
              <EditablePreview />
              <EditableInput />
            </Editable>} />
      </FormControl>

      <FormControl isInvalid={!!errors.textarea} label='Feedback' errorMessage={errors.textarea?.message}>
        <Controller name='textarea' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <Editable placeholder='オッス！オラ悟空！' {...field}>
              <EditablePreview />
              <EditableTextarea />
            </Editable>} />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(he=(Ee=V.parameters)==null?void 0:Ee.docs)==null?void 0:he.source}}};const Ye=["basic","withTextarea","withStartWithEditView","withIsPreviewFocusable","withSubmitOnBlur","withSelectAllOnFocus","withPlaceholder","withBorderColor","isDisabled","isReadonly","isInvalid","customControl","reactHookForm"];export{Ye as __namedExportsOrder,d as basic,v as customControl,Ue as default,f as isDisabled,w as isInvalid,g as isReadonly,V as reactHookForm,h as withBorderColor,m as withIsPreviewFocusable,E as withPlaceholder,b as withSelectAllOnFocus,c as withStartWithEditView,p as withSubmitOnBlur,u as withTextarea};
//# sourceMappingURL=editable.stories-11e8af2c.js.map