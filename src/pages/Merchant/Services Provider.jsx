import correct from '../../assets/icons/Group 165.png'
import HeaderServiceProvider from '../../components/merchant/ServicesProvider/HeaderServiceProvider';
import ServicesProviderCards from '../../components/merchant/ServicesProvider/ServicesProviderCards';
import StyledPagination from '../../components/merchant/atoms/commonatoms/StyledPagination'; // Adjust the import path as necessary

function ServicesProvider() {
  return (
    <div className="bg-white rounded-lg py-6 px-8">
      <div className='flex items-center gap-2 mb-12'>
        <img src={correct} className='w-[35px]' />
        <h3 className='font-bold text-lg'>Connected Service Providers</h3>
      </div>

      <HeaderServiceProvider />
      <main className='py-8'>
        <ServicesProviderCards />
        <div className='w-full flex justify-center py-8'>
          <StyledPagination count={10} shape="rounded" />
        </div>
      </main>
    </div>
  )
}

export default ServicesProvider;
