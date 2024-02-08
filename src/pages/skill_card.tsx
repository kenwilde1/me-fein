export default function SkillCard({ skillName }: { skillName: string }) {
  return (
    <div className="bg-gray-200 text-gray-700 color cursor-pointer py-1 px-2 rounded skill-card transition ease delay-0.5 hover:scale-125">
      {skillName}
    </div>
  );
}
