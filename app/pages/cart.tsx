// import { useSelector } from 'react-redux';

// export default function Cart() {
//   const cart = useSelector((state) => state.cart);

//   return (
//     <div>
//       <h1>Your Cart</h1>
//       <ul>
//         {cart.items.map((item) => (
//           <li key={item.id}>
//             {item.name} - {item.quantity} x ${item.price}
//           </li>
//         ))}
//       </ul>
//       <h2>Total: ${cart.total}</h2>
//       <button>Place Order</button>
//     </div>
//   );
// }