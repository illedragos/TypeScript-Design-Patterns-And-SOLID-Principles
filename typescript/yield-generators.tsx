function* genReturn() {
  console.log("genReturn: Before return");
  return 42;
  console.log("genReturn: After return (never runs)");
}

function* genYield() {
  console.log("genYield: Before yield 1");
  yield 10;
  console.log("genYield: Between yields");
  yield 20;
  console.log("genYield: After yields");
}

console.log("---- Testing genReturn ----");
const it1 = genReturn();
console.log(it1.next()); // runs till return
console.log(it1.next()); // already done

console.log("\n---- Testing genYield ----");
const it2 = genYield();
console.log(it2.next()); // pauses at yield 10
console.log(it2.next()); // pauses at yield 20
console.log(it2.next()); // done

function* mixedGenerator() {
  yield 42; // number
  yield "hello"; // string
  yield { name: "Alice" }; // object
  yield [1, 2, 3]; // array
  yield null; // null
  yield undefined; // undefined
}

const gen = mixedGenerator();

console.log(gen.next()); // { value: 42, done: false }
console.log(gen.next()); // { value: "hello", done: false }
console.log(gen.next()); // { value: { name: "Alice" }, done: false }
console.log(gen.next()); // { value: [1, 2, 3], done: false }
console.log(gen.next()); // { value: null, done: false }
console.log(gen.next()); // { value: undefined, done: false }
console.log(gen.next()); // { value: undefined, done: true }

//pagiantion example
const [page, setPage] = useState(1);
const [data, setData] = useState([]);

useEffect(() => {
  fetch(`/api?page=${page}`)
    .then((res) => res.json())
    .then((newData) => setData((prev) => [...prev, ...newData]));
}, [page]);

// User clicks "Next"
<button onClick={() => setPage(page + 1)}>Next</button>;

//paginatio witha sync gen
async function* fetchPages() {
  let page = 1;
  while (true) {
    const data = await fetch(`/api?page=${page++}`).then((r) => r.json());
    if (!data.length) break;
    yield data;
  }
}

const gen = fetchPages();

async function loadNextPage() {
  const { value, done } = await gen.next();
  if (!done) setData((prev) => [...prev, ...value]);
}

//whitout while(true)
async function* fetchPages() {
  let page = 1;
  let data: any[]; // or the real type

  do {
    data = await fetch(`/api?page=${page++}`).then((r) => r.json());
    if (data.length) yield data;
  } while (data.length);
}
