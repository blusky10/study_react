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
  - 여러개의 state 를 정의할 수도 있고 object로 관리할수도 있다.
    ~~~
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredDate, setEnteredDate] = useState();
    ~~~
    ~~~
    const [userInput, setUserInput] = useState({
      enteredTitle: '',
      enteredAmount: 0,
      enteredDate: ''
    })
    ~~~
    - 주의 할 점은 update 시 object에 있는 일부 키만 업데이트 한다면 다른 키들이 사라진다.
    - 아래와 같이 enteredTitle 키만 정의할 경우 나머지 키는 사라진다. (merge 하지 않는다)      
      ~~~
      const titleChangeHandlerNew = (event) => {
        setUserInput.enteredTitle = event.target.value
      };
      ~~~ 
    - 수동으로 복사가 필요하다. 기본값을 복사한후 오버라이드 한다.
      ~~~
      const titleChangeHandlerNew = (event) => {
        ...userInput,
        setUserInput.enteredTitle = event.target.value
      };
      ~~~ 
      - 위 방법에서는 문제가 발생할 수 있다. 
      - 리액트가 상태업데이트 바로 실행하지 않는다. 
      - 따라서 동시에  많은 상태를 업데이트 할 경우 최신값을 잘못 가져올수 있다.
      - 따라서 다음과 같이 사용하는게 더 낫다. (스냅샷을 이용한다)
      ~~~
      const titleChangeHandlerNew2 = (event) => {
        setUserInput((prevState) => {
          return {
            ...prevState,
            enteredTitle: event.target.value
          }
        });
      };
      ~~~
       
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

## Lifting state
- 부모에서 함수를 정의한 다음 자식 컴포넌트에서 함수를 호출해서 값을 전달
##
- 양방향 바인딩

## React 에서 Key 가 필요한 이유
- React 는 상태를 메모리에 저장하고 있다가 변경된 부분만 렌더링 한다.
- Key 값이 없으면 모든 데이터를 비교해야 하지만 Key 가 있으면 Key만 비교하면 된다.

## Map 에서 index 를 Key로 하면 안되는 이유
- 0번의 index 가 삭제되면 React 가 변경을 감지하여 리렌더링 되고 0번 부터 다시 매핑한다. 
- 1번 인덱스가 0번으로 매핑이 된다.
- 결론적으로 인덱스가 추가되거나 삭제되면 값이 바뀌기 때문에 index 를 key 로 사용하는것은 안좋다.

## style
- {{}} 이중 괄호로 해서 사용
- 왜???

## 백틱 (₩)사용