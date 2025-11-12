import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2 } from 'lucide-react';


const Toast = ({title}:{title:string}) => {
  return (
    <Alert className="mb-6 bg-green-50 border-green-200">
      <CheckCircle2 className="h-4 w-4 text-green-600" />
      <AlertDescription className="text-green-800">
        {title}
      </AlertDescription>
    </Alert>
  );
};

export default Toast;
