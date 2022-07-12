# React

## JSX
- Javascript 확장 문법
    ~~~
    const element = <h1>Hello, world!</h1>;
    ~~~
- React Component 생성을 좀더 쉽게 도와준다
- babel 은 JSX 를 Reac.createElement() 호출해서 컴파일 한다.
    ~~~
    const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
    );
    ~~~

    ~~~
    const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
    );
    ~~~
## React.useState();
    - 값과 함수를 반환한다.
    - 함수는 값을 변화시킨후 컴포넌트를 리렌더링한다
## Class, for
- class -> className
- for -> htmlFo

## Props
- 모든 properties 들을 object 로 만들어서 전달한다.
  ~~~
    <Btn text="" style="" />
  ~~~
      
## props.children

## JSX 동작
