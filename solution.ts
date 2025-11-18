// Problem 1
type InputValue = number | string | boolean;

type OutputValue = number | string | boolean | void;

const formatValue = (value: InputValue): OutputValue => {
  switch (typeof value) {
    case "number":
      return value * 10;

    case "string":
      return value.toUpperCase();

    case "boolean":
      return !value;

    default:
      console.error("Unsupported value type detected.");
      return;
  }
};

// Problem 2
const getLength = (value: string | number[]): number => {
  if (Array.isArray(value)) {
    return value.length;
  } else {
    return value.length;
  }
};

// Problem 3
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// Problem 4
interface BookDetails {
  title: string;
  rating: number;
}

type BookList = BookDetails[];

const filterByRating = (books: BookList): BookList => {
  const highlyRatedBooks = books.filter((book) => book.rating >= 4);
  return highlyRatedBooks;
};

// Problem 5

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

type UserList = User[];

const filterActiveUsers = (users: UserList): UserList => {
  const activeUsers = users.filter((user) => user.isActive === true);
  return activeUsers;
};

// Problem 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  const { title, author, publishedYear, isAvailable } = book;
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
      isAvailable ? "Yes" : "No"
    }`
  );
};

// Problem 7
type Item = number | string;
type SeenTracker = { [key: Item]: boolean };

const getUniqueValues = (arr1: Item[], arr2: Item[]): Item[] => {
  const seen: SeenTracker = {};
  const uniqueResult: Item[] = [];

  const process = (arr: Item[]) => {
    for (let i = 0; i < arr.length; i++) {
      const val = arr[i];

      if (!seen[val]) {
        uniqueResult.push(val);
        seen[val] = true;
      }
    }
  };

  process(arr1);
  process(arr2);

  return uniqueResult;
};

// Problem 8
interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

type Products = Product[];

const calculateTotalPrice = (products: Products): number => {
  return products.reduce((accumulator, product) => {
    const basePrice = product.price * product.quantity;

    let discountedPrice = basePrice;

    if (product.discount && product.discount > 0 && product.discount <= 100) {
      const discountFactor = 1 - product.discount / 100;
      discountedPrice = basePrice * discountFactor;
    }

    return accumulator + discountedPrice;
  }, 0);
};
