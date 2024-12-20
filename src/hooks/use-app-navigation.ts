import { useNavigation } from 'react-router';

export const useAppNavigation = () => {
  const navigation = useNavigation();

  const isIdle = navigation.state === 'idle';
  const isSubmitting = navigation.state === 'submitting';
  const isLoading = navigation.state === 'loading';

  return { ...navigation, isIdle, isSubmitting, isLoading };
};
