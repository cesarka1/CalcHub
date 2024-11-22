function Card({ title, content, children }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg"> 
      {title && (
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">{title}</h3>
      )}
      {content && <p className="text-gray-700">{content}</p>}
      {children}
    </div>
  );
}

export default Card;
