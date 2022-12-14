import clsx from "clsx";
import { useTranslation } from 'react-i18next'

export interface Props {
  className?: string;
}

const Title = ({ className }: Props) => {
  const { t } = useTranslation()
  return (
    <div className={clsx(className,
      'font-accent',
      // 'text-3xl md:text-6xl lg:text-7xl',
      'text-6xl',
      '-rotate-3 -translate-y-10 md:-translate-y-15 lg:-translate-y-10'
      )}>
      {t('Hero.title')}
    </div>
  );
};

export default Title;
