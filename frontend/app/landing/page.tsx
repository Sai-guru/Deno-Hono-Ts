"use client";

import * as React from "react";
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const chartData = [
  { month: "Jan", users: 186, revenue: 80 },
  { month: "Feb", users: 305, revenue: 200 },
  { month: "Mar", users: 237, revenue: 120 },
  { month: "Apr", users: 273, revenue: 190 },
  { month: "May", users: 409, revenue: 230 },
  { month: "Jun", users: 514, revenue: 340 },
];

const chartConfig = {
  users: {
    label: "Users",
    color: "hsl(var(--chart-1))",
  },
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {/* Hero Section */}
            <div className="flex flex-col items-center gap-8 text-center">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Build Something Amazing
                </h1>
                <p className="text-muted-foreground mx-auto max-w-2xl text-xl leading-relaxed">
                  The modern platform for developers who want to ship fast
                  without compromising on quality.
                </p>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="px-8">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  View Demo
                </Button>
              </div>
            </div>

            {/* Stats Cards - Elegant 2x2 Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                <CardHeader className="pb-3">
                  <CardDescription className="text-sm font-medium">
                    Active Users
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-3xl font-bold">10,234</CardTitle>
                    <Badge variant="outline" className="gap-1">
                      <IconTrendingUp className="size-3.5" />
                      +12.5%
                    </Badge>
                  </div>
                </CardHeader>
                <CardFooter className="border-t bg-muted/50 text-xs text-muted-foreground">
                  Trending up this month
                </CardFooter>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                <CardHeader className="pb-3">
                  <CardDescription className="text-sm font-medium">
                    Total Revenue
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-3xl font-bold">$45.2K</CardTitle>
                    <Badge variant="outline" className="gap-1">
                      <IconTrendingUp className="size-3.5" />
                      +23.1%
                    </Badge>
                  </div>
                </CardHeader>
                <CardFooter className="border-t bg-muted/50 text-xs text-muted-foreground">
                  Strong revenue growth
                </CardFooter>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                <CardHeader className="pb-3">
                  <CardDescription className="text-sm font-medium">
                    Projects
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-3xl font-bold">156</CardTitle>
                    <Badge variant="outline" className="gap-1">
                      <IconTrendingUp className="size-3.5" />
                      +8.4%
                    </Badge>
                  </div>
                </CardHeader>
                <CardFooter className="border-t bg-muted/50 text-xs text-muted-foreground">
                  Active development
                </CardFooter>
              </Card>

              <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                <CardHeader className="pb-3">
                  <CardDescription className="text-sm font-medium">
                    Success Rate
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-3xl font-bold">98.5%</CardTitle>
                    <Badge variant="outline" className="gap-1">
                      <IconTrendingUp className="size-3.5" />
                      +2.1%
                    </Badge>
                  </div>
                </CardHeader>
                <CardFooter className="border-t bg-muted/50 text-xs text-muted-foreground">
                  Outstanding performance
                </CardFooter>
              </Card>
            </div>

            {/* Interactive Chart */}
            <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <CardHeader>
                <CardTitle>Growth Analytics</CardTitle>
                <CardDescription>
                  Track your users and revenue over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="users">
                  <TabsList className="grid w-fit grid-cols-2 gap-0">
                    <TabsTrigger value="users">Users</TabsTrigger>
                    <TabsTrigger value="revenue">Revenue</TabsTrigger>
                  </TabsList>
                  <TabsContent value="users" className="mt-6">
                    <ChartContainer
                      config={chartConfig}
                      className="h-[300px] w-full"
                    >
                      <AreaChart data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                          dataKey="users"
                          type="natural"
                          fill="var(--color-users)"
                          fillOpacity={0.4}
                          stroke="var(--color-users)"
                        />
                      </AreaChart>
                    </ChartContainer>
                  </TabsContent>
                  <TabsContent value="revenue" className="mt-6">
                    <ChartContainer
                      config={chartConfig}
                      className="h-[300px] w-full"
                    >
                      <AreaChart data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                          dataKey="revenue"
                          type="natural"
                          fill="var(--color-revenue)"
                          fillOpacity={0.4}
                          stroke="var(--color-revenue)"
                        />
                      </AreaChart>
                    </ChartContainer>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Features Section with Tabs */}
            <div>
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold sm:text-5xl">
                  Why Developers Love Us
                </h2>
              </div>
              <Tabs defaultValue="features" className="w-full">
                <TabsList className="grid w-full grid-cols-2 gap-0 bg-muted p-1">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="integrations">Integrations</TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="mt-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                      <CardHeader>
                        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                          ⚡
                        </div>
                        <CardTitle>Lightning Fast</CardTitle>
                        <CardDescription>
                          Built with performance in mind. Experience blazing
                          fast load times and instant responses.
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                      <CardHeader>
                        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                          🔒
                        </div>
                        <CardTitle>Secure by Default</CardTitle>
                        <CardDescription>
                          Enterprise-grade security to keep your data safe and
                          protected at all times.
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                      <CardHeader>
                        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                          🔄
                        </div>
                        <CardTitle>Real-time Sync</CardTitle>
                        <CardDescription>
                          Stay in sync across all devices with real-time data
                          updates and notifications.
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                      <CardHeader>
                        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                          🤖
                        </div>
                        <CardTitle>AI Powered</CardTitle>
                        <CardDescription>
                          Smart automation and insights powered by cutting-edge
                          machine learning.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="integrations" className="mt-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                      <CardHeader>
                        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                          🔌
                        </div>
                        <CardTitle>API First</CardTitle>
                        <CardDescription>
                          RESTful and GraphQL APIs to integrate with any
                          platform or service seamlessly.
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                      <CardHeader>
                        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                          🌐
                        </div>
                        <CardTitle>Webhooks</CardTitle>
                        <CardDescription>
                          Real-time event notifications to keep your systems in
                          sync automatically.
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                      <CardHeader>
                        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                          📦
                        </div>
                        <CardTitle>NPM Packages</CardTitle>
                        <CardDescription>
                          Official SDKs for JavaScript, Python, Go, and more to
                          get started quickly.
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                      <CardHeader>
                        <div className="mb-4 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-2xl">
                          🔗
                        </div>
                        <CardTitle>Third-party Apps</CardTitle>
                        <CardDescription>
                          Integrate with Slack, Discord, GitHub, and 100+ other
                          popular tools.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* CTA Section */}
          <Card className="border-0 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg">
            <CardHeader className="items-center gap-4 text-center">
              <CardTitle className="text-4xl sm:text-5xl">
                Ready to get started?
              </CardTitle>
              <CardDescription className="text-primary-foreground/90 text-lg">
                Join thousands of developers building the future.
              </CardDescription>
            </CardHeader>
            <CardFooter className="justify-center">
              <Button size="lg" variant="secondary" className="px-8">
                Start Building Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
