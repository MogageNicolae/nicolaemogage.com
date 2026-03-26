import type { ComponentType } from 'react'
import { FaBrain, FaBolt, FaCloud, FaDatabase, FaCode, FaWrench } from 'react-icons/fa'

const categoryIcons: Record<string, ComponentType<{ size?: number }>> = {
  'ai-ml': FaBrain,
  'frameworks': FaBolt,
  'devops': FaCloud,
  'databases': FaDatabase,
  'languages': FaCode,
  'tools': FaWrench,
}

export default function CategoryIcon({ category }: { category: string }) {
  const Icon = categoryIcons[category]
  if (!Icon) return null
  return <Icon size={16} />
}
