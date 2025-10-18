import { DownloadIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ButtonDownloadDemo = () => {
  return (
    <Button variant='outline' className='flex items-center gap-2 border-primary border-dashed shadow-none'>
      <DownloadIcon size={15}/>
      Download Resume
    </Button>
  )
}

export default ButtonDownloadDemo
