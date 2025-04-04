
import React from "react";
import { greekGods } from "@/data/greekGods";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Layout } from "@/components/Layout";

export default function GreekGods() {
  return (
    <Layout>
      <div className="container mx-auto py-10">
        <h1 className="mb-8 text-4xl font-bold tracking-tight">Greek Gods and Goddesses</h1>
        <p className="mb-6 text-lg text-muted-foreground">
          Learn about the 14 major gods and goddesses of Ancient Greek mythology, their domains, symbols, and stories.
        </p>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Gods</TabsTrigger>
            <TabsTrigger value="olympians">Olympians</TabsTrigger>
            <TabsTrigger value="primordial">Primordial</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {greekGods.map((god) => (
                <Card key={god.name} className="overflow-hidden">
                  <CardHeader className="bg-primary/10">
                    <CardTitle>{god.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Domain</h3>
                        <p>{god.domain}</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Symbols</h3>
                        <p>{god.symbol}</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Description</h3>
                        <p>{god.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="olympians" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {greekGods.slice(0, 12).map((god) => (
                <Card key={god.name} className="overflow-hidden">
                  <CardHeader className="bg-primary/10">
                    <CardTitle>{god.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Domain</h3>
                        <p>{god.domain}</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Symbols</h3>
                        <p>{god.symbol}</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Description</h3>
                        <p>{god.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="primordial" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {greekGods.slice(12).map((god) => (
                <Card key={god.name} className="overflow-hidden">
                  <CardHeader className="bg-primary/10">
                    <CardTitle>{god.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium">Domain</h3>
                        <p>{god.domain}</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Symbols</h3>
                        <p>{god.symbol}</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Description</h3>
                        <p>{god.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
