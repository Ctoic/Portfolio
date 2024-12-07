interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="text-center text-red-600 p-8">
      <p>{message}</p>
    </div>
  );
}