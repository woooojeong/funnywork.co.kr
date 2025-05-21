import SideNav from '../../components/SideNav';

export default function BusinessPage() {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 pt-16 container mx-auto px-4 text-white">
        <h1 className="text-3xl font-bold mb-8">사업분야</h1>
        {/* 사업 분야 내용 */}
      </div>
    </div>
  );
} 