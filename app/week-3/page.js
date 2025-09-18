import ItemList from "./item-list";



export default function Page() {
    
 
    return (
    <main>
        <h1 className="text-5xl font-extrabold text-center text-gray-800 tracking-tight mb-8 font-serif">
            Shopping List
        </h1>
        <ItemList />
    </main>
  );
}