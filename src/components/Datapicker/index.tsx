import { FC, useCallback, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const Datapicker: FC = () => {
  const [month, setMonth] = useState(() => new Date().getMonth() + 1);
  const [year, setYear] = useState(() => new Date().getFullYear());

  const [days, setDays] = useState<number>(1);
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    const dayNumber = new Date(year, month, 0).getDate();

    setDays(dayNumber);
  }, [month, year]);

  const handleRemoveMonth = useCallback(() => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }, [month, year]);

  const handleAddMonth = useCallback(() => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  }, [month, year]);

  const handleSelected = useCallback((date: number) => {
    setSelected(date);
  }, []);

  return (
    <Container>
      <header>
        <FiChevronLeft onClick={handleRemoveMonth} />
        <p>
          IDA: {months[month - 1]} / {year}
        </p>
        <FiChevronRight onClick={handleAddMonth} />
      </header>

      <main>
        <button
          type="button"
          onClick={() => handleSelected(1)}
          className={`${selected === 1 && 'selected'}`}
        >
          1
        </button>

        <button
          type="button"
          onClick={() => handleSelected(2)}
          className={`${selected === 2 && 'selected'}`}
        >
          2
        </button>

        <button
          type="button"
          onClick={() => handleSelected(3)}
          className={`${selected === 3 && 'selected'}`}
        >
          3
        </button>

        <button
          type="button"
          onClick={() => handleSelected(4)}
          className={`${selected === 4 && 'selected'}`}
        >
          4
        </button>

        <button
          type="button"
          onClick={() => handleSelected(5)}
          className={`${selected === 5 && 'selected'}`}
        >
          5
        </button>

        <button
          type="button"
          onClick={() => handleSelected(6)}
          className={`${selected === 6 && 'selected'}`}
        >
          6
        </button>

        <button
          type="button"
          onClick={() => handleSelected(7)}
          className={`${selected === 7 && 'selected'}`}
        >
          7
        </button>

        <button
          type="button"
          onClick={() => handleSelected(8)}
          className={`${selected === 8 && 'selected'}`}
        >
          8
        </button>

        <button
          type="button"
          onClick={() => handleSelected(9)}
          className={`${selected === 9 && 'selected'}`}
        >
          9
        </button>

        <button
          type="button"
          onClick={() => handleSelected(10)}
          className={`${selected === 10 && 'selected'}`}
        >
          10
        </button>

        <button
          type="button"
          onClick={() => handleSelected(11)}
          className={`${selected === 11 && 'selected'}`}
        >
          11
        </button>

        <button
          type="button"
          onClick={() => handleSelected(12)}
          className={`${selected === 12 && 'selected'}`}
        >
          12
        </button>

        <button
          type="button"
          onClick={() => handleSelected(13)}
          className={`${selected === 13 && 'selected'}`}
        >
          13
        </button>

        <button
          type="button"
          onClick={() => handleSelected(14)}
          className={`${selected === 14 && 'selected'}`}
        >
          14
        </button>

        <button
          type="button"
          onClick={() => handleSelected(15)}
          className={`${selected === 15 && 'selected'}`}
        >
          15
        </button>

        <button
          type="button"
          onClick={() => handleSelected(16)}
          className={`${selected === 16 && 'selected'}`}
        >
          16
        </button>

        <button
          type="button"
          onClick={() => handleSelected(17)}
          className={`${selected === 17 && 'selected'}`}
        >
          17
        </button>

        <button
          type="button"
          onClick={() => handleSelected(18)}
          className={`${selected === 18 && 'selected'}`}
        >
          18
        </button>

        <button
          type="button"
          onClick={() => handleSelected(19)}
          className={`${selected === 19 && 'selected'}`}
        >
          19
        </button>

        <button
          type="button"
          onClick={() => handleSelected(20)}
          className={`${selected === 20 && 'selected'}`}
        >
          20
        </button>

        <button
          type="button"
          onClick={() => handleSelected(21)}
          className={`${selected === 21 && 'selected'}`}
        >
          21
        </button>

        <button
          type="button"
          onClick={() => handleSelected(22)}
          className={`${selected === 22 && 'selected'}`}
        >
          22
        </button>

        <button
          type="button"
          onClick={() => handleSelected(23)}
          className={`${selected === 23 && 'selected'}`}
        >
          23
        </button>

        <button
          type="button"
          onClick={() => handleSelected(24)}
          className={`${selected === 24 && 'selected'}`}
        >
          24
        </button>

        <button
          type="button"
          onClick={() => handleSelected(25)}
          className={`${selected === 25 && 'selected'}`}
        >
          25
        </button>

        <button
          type="button"
          onClick={() => handleSelected(26)}
          className={`${selected === 26 && 'selected'}`}
        >
          26
        </button>

        <button
          type="button"
          onClick={() => handleSelected(27)}
          className={`${selected === 27 && 'selected'}`}
        >
          27
        </button>

        <button
          type="button"
          onClick={() => handleSelected(28)}
          className={`${selected === 28 && 'selected'}`}
        >
          28
        </button>

        {days >= 29 && (
          <button
            type="button"
            onClick={() => handleSelected(29)}
            className={`${selected === 29 && 'selected'}`}
          >
            29
          </button>
        )}

        {days >= 30 && (
          <button
            type="button"
            onClick={() => handleSelected(30)}
            className={`${selected === 30 && 'selected'}`}
          >
            30
          </button>
        )}

        {days === 31 && (
          <button
            type="button"
            onClick={() => handleSelected(31)}
            className={`${selected === 31 && 'selected'}`}
          >
            31
          </button>
        )}

        <button type="button" className="disable">
          1
        </button>
      </main>
    </Container>
  );
};

export { Datapicker };
