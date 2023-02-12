import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, QuoteComponent } from "./";

export const MultiCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {isLoading ? (
        <LoadingQuote />
      ) : (
        <QuoteComponent
          quote={quote}
          author={author}
        />
      )}

      <button
        onClick={() => decrement()}
        disabled={isLoading}
        className='btn btn-primary'>
        Previous quote
      </button>

      <button
        onClick={() => increment()}
        disabled={isLoading}
        className='btn btn-primary'>
        Next quote
      </button>
    </>
  );
};
