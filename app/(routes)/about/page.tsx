import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-gray-600">This is the about page.</p>
      
      <main className="grid grid-cols-4 gap-4 w-full items-center justify-between py-16 px-8 bg-bg-secondary dark:bg-bg-secondary sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Card className="relative mx-auto w-full max-w-sm py-0 overflow-hidden rounded-lg">
            <div className="flex h-full min-h-40">
              <div className="w-1/3 aspect-video bg-black/35" />
              <CardHeader className="w-2/3 py-4">
                <CardTitle>Design systems meetup</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis consectetur feugiat. Maecenas sed sagittis erat. Aenean id ante ante.
                </CardDescription>
              </CardHeader>
            </div>
          </Card>
        
        </div>

      </main>
    </div>
  )
}