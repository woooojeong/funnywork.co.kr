import SideNav from '../../components/SideNav';

export default function ReferencePage() {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 pt-16 container mx-auto px-4 text-white">
        <h1 className="text-3xl font-bold mb-8">레퍼런스</h1>
        {/* 레퍼런스 내용 */}
      </div>
    </div>
  );
} 