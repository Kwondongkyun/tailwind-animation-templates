"use client";
import { AnimatedButton } from "@/components/ui/animated-button";
import { PageHeader } from "@/components/page-header";
import { CodePreview } from "@/components/ui/code-preview";

export default function AnimatedButtonPage() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <PageHeader title="Animated Button" />

      {/* Variant 데모 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Variants</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Default */}
          <CodePreview
            preview={<AnimatedButton variant="default">Default</AnimatedButton>}
            code={`<AnimatedButton variant="default">
  Default
</AnimatedButton>`}
          />

          {/* Gradient */}
          <CodePreview
            preview={
              <AnimatedButton variant="gradient">Gradient</AnimatedButton>
            }
            code={`<AnimatedButton variant="gradient">
  Gradient
</AnimatedButton>`}
          />

          {/* Glow */}
          <CodePreview
            preview={<AnimatedButton variant="glow">Glow</AnimatedButton>}
            code={`<AnimatedButton variant="glow">
  Glow
</AnimatedButton>`}
          />

          {/* 3D */}
          <CodePreview
            preview={
              <AnimatedButton variant="threed">3D Effect</AnimatedButton>
            }
            code={`<AnimatedButton variant="threed">
  3D Effect
</AnimatedButton>`}
          />

          {/* Outline */}
          <CodePreview
            preview={<AnimatedButton variant="outline">Outline</AnimatedButton>}
            code={`<AnimatedButton variant="outline">
  Outline
</AnimatedButton>`}
          />

          {/* Ripple */}
          <CodePreview
            preview={<AnimatedButton variant="ripple">Ripple</AnimatedButton>}
            code={`<AnimatedButton variant="ripple">
  Ripple
</AnimatedButton>`}
          />

          {/* Shimmer */}
          <CodePreview
            preview={<AnimatedButton variant="shimmer">Shimmer</AnimatedButton>}
            code={`<AnimatedButton variant="shimmer">
  Shimmer
</AnimatedButton>`}
          />

          {/* Ghost */}
          <CodePreview
            preview={<AnimatedButton variant="ghost">Ghost</AnimatedButton>}
            code={`<AnimatedButton variant="ghost">
  Ghost
</AnimatedButton>`}
          />

          {/* Destructive */}
          <CodePreview
            preview={
              <AnimatedButton variant="destructive">Delete</AnimatedButton>
            }
            code={`<AnimatedButton variant="destructive">
  Delete
</AnimatedButton>`}
          />

          {/* Neon */}
          <CodePreview
            preview={<AnimatedButton variant="neon">Neon</AnimatedButton>}
            code={`<AnimatedButton variant="neon">
  Neon
</AnimatedButton>`}
          />
        </div>
      </section>

      {/* Size 데모 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Sizes</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Small */}
          <CodePreview
            preview={
              <AnimatedButton size="sm" variant="gradient">
                Small
              </AnimatedButton>
            }
            code={`<AnimatedButton size="sm" variant="gradient">
  Small
</AnimatedButton>`}
          />

          {/* Default */}
          <CodePreview
            preview={
              <AnimatedButton size="default" variant="gradient">
                Default
              </AnimatedButton>
            }
            code={`<AnimatedButton size="default" variant="gradient">
  Default
</AnimatedButton>`}
          />

          {/* Large */}
          <CodePreview
            preview={
              <AnimatedButton size="lg" variant="gradient">
                Large
              </AnimatedButton>
            }
            code={`<AnimatedButton size="lg" variant="gradient">
  Large
</AnimatedButton>`}
          />
        </div>
      </section>

      {/* Animation 데모 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Hover Animations</h2>
        <p className="text-sm text-muted-foreground">
          마우스를 올려서 애니메이션을 확인해보세요
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Bounce */}
          <CodePreview
            preview={
              <AnimatedButton variant="glow" animation="bounce">
                Bounce
              </AnimatedButton>
            }
            code={`<AnimatedButton 
  variant="glow" 
  animation="bounce"
>
  Bounce
</AnimatedButton>`}
          />

          {/* Pulse */}
          <CodePreview
            preview={
              <AnimatedButton variant="glow" animation="pulse">
                Pulse
              </AnimatedButton>
            }
            code={`<AnimatedButton 
  variant="glow" 
  animation="pulse"
>
  Pulse
</AnimatedButton>`}
          />

          {/* Wiggle */}
          <CodePreview
            preview={
              <AnimatedButton variant="glow" animation="wiggle">
                Wiggle
              </AnimatedButton>
            }
            code={`<AnimatedButton 
  variant="glow" 
  animation="wiggle"
>
  Wiggle
</AnimatedButton>`}
          />

          {/* Spin */}
          <CodePreview
            preview={
              <AnimatedButton variant="glow" animation="spin">
                Spin
              </AnimatedButton>
            }
            code={`<AnimatedButton 
  variant="glow" 
  animation="spin"
>
  Spin
</AnimatedButton>`}
          />
        </div>
      </section>

      {/* Loading 데모 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Loading State</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Default Loading */}
          <CodePreview
            preview={
              <AnimatedButton variant="default" loading>
                Processing
              </AnimatedButton>
            }
            code={`<AnimatedButton 
  variant="default" 
  loading
>
  Processing
</AnimatedButton>`}
          />

          {/* Gradient Loading */}
          <CodePreview
            preview={
              <AnimatedButton variant="gradient" loading>
                Saving
              </AnimatedButton>
            }
            code={`<AnimatedButton 
  variant="gradient" 
  loading
>
  Saving
</AnimatedButton>`}
          />
        </div>
      </section>

      {/* 조합 데모 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Variant + Animation 조합</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Gradient + Bounce */}
          <CodePreview
            preview={
              <AnimatedButton variant="gradient" animation="bounce">
                Gradient + Bounce
              </AnimatedButton>
            }
            code={`<AnimatedButton 
  variant="gradient" 
  animation="bounce"
>
  Gradient + Bounce
</AnimatedButton>`}
          />

          {/* Glow + Pulse */}
          <CodePreview
            preview={
              <AnimatedButton variant="glow" animation="pulse">
                Glow + Pulse
              </AnimatedButton>
            }
            code={`<AnimatedButton 
  variant="glow" 
  animation="pulse"
>
  Glow + Pulse
</AnimatedButton>`}
          />

          {/* 3D + Wiggle */}
          <CodePreview
            preview={
              <AnimatedButton variant="threed" animation="wiggle">
                3D + Wiggle
              </AnimatedButton>
            }
            code={`<AnimatedButton 
  variant="threed" 
  animation="wiggle"
>
  3D + Wiggle
</AnimatedButton>`}
          />

          {/* Neon + Spin */}
          <CodePreview
            preview={
              <AnimatedButton variant="neon" animation="spin">
                Neon + Spin
              </AnimatedButton>
            }
            code={`<AnimatedButton 
  variant="neon" 
  animation="spin"
>
  Neon + Spin
</AnimatedButton>`}
          />
        </div>
      </section>

      {/* 이벤트 핸들러 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">이벤트 핸들러 & 기타</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Click Event */}
          <CodePreview
            preview={
              <AnimatedButton variant="neon" onClick={() => alert("클릭됨!")}>
                클릭 이벤트
              </AnimatedButton>
            }
            code={`<AnimatedButton 
  variant="neon"
  onClick={() => alert("클릭됨!")}
>
  클릭 이벤트
</AnimatedButton>`}
          />

          {/* Disabled */}
          <CodePreview
            preview={
              <AnimatedButton variant="gradient" disabled>
                비활성화
              </AnimatedButton>
            }
            code={`<AnimatedButton variant="gradient" disabled>
  비활성화
</AnimatedButton>`}
          />
        </div>
      </section>

      {/* Props 테이블 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-300 dark:border-slate-700">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">
                  Prop
                </th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">
                  Type
                </th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">
                  Default
                </th>
                <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  variant
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  string
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  default
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">
                  버튼 스타일 (default, gradient, glow, threed, outline, ripple,
                  shimmer, ghost, destructive, neon)
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  size
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  string
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  default
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">
                  버튼 크기 (sm, default, lg, icon)
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  animation
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  string
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  none
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">
                  hover 애니메이션 (none, bounce, pulse, wiggle, spin)
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  loading
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  boolean
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  false
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">
                  로딩 상태 표시
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  disabled
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  boolean
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  false
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">
                  버튼 비활성화
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  asChild
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  boolean
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-mono text-sm">
                  false
                </td>
                <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">
                  자식 요소를 버튼으로 렌더링 (Radix Slot 사용)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
