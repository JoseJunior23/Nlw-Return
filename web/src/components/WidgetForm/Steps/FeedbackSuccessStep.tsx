import { CloseButton } from '../../CloseButton';

interface FeedbackContentStepProps {
  onFeedbackRestartRequest: () => void;
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequest,
}: FeedbackContentStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10  w-[304px]">
        <svg
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.5 34C38.5 36.209 36.709 38 34.5 38H6.5C4.291 38 2.5 36.209 2.5 34V6C2.5 3.791 4.291 2 6.5 2H34.5C36.709 2 38.5 3.791 38.5 6V34Z"
            fill="#77B255"
          />
          <path
            d="M31.78 8.3619C30.624 7.6109 29.076 7.9399 28.322 9.0979L17.436 25.8769L12.407 21.2269C11.393 20.2889 9.81103 20.3519 8.87403 21.3649C7.93703 22.3789 7.99903 23.9609 9.01303 24.8979L16.222 31.5639C16.702 32.0089 17.312 32.2289 17.918 32.2289C18.591 32.2289 19.452 31.9469 20.017 31.0899C20.349 30.5839 32.517 11.8199 32.517 11.8199C33.268 10.6609 32.938 9.1129 31.78 8.3619Z"
            fill="white"
          />
        </svg>

        <span className="text-xl mt-2">Agradecemos o feedback !</span>

        <button
          onClick={onFeedbackRestartRequest}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-none border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
