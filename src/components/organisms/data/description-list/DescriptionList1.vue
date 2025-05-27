<template>
  <article class="bg-white-primary mx-auto max-w-4xl">
    <!-- Target Audience Badges -->
    <div class="border-black-primary mb-3 flex flex-wrap gap-1 border-b pb-3">
      <Badge color="green" size="xs">Researchers</Badge>
      <Badge color="orange" size="xs">Bachelors</Badge>
      <Badge color="violet" size="xs">Teachers</Badge>
      <Badge color="yellow" size="xs">Staff</Badge>
      <Badge color="pink" size="xs">Postdoc</Badge>
    </div>

    <!-- Course Type and Heart Icon -->
    <div class="mb-4 flex items-center justify-between">
      <span class="text-black-primary text-sm font-medium tracking-wide uppercase">Course</span>
      <font-awesome-icon :icon="['far', 'heart']" class="text-black-quaternary text-lg" />
    </div>

    <!-- Main Headline -->
    <div class="mb-14">
      <h1 class="text-black-primary text-4xl leading-tight font-bold">
        An introduction to intercultural communication
      </h1>
    </div>

    <!-- University and Course Details Badges -->
    <div class="mb-4 flex flex-wrap gap-1">
      <Badge color="gray" size="sm">University of South-Eastern Norway</Badge>
      <Badge color="white" size="sm">Interdisciplinary or Multidisciplinary</Badge>
      <Badge color="white" size="sm">English</Badge>
      <Badge color="white" size="sm">1 day</Badge>
    </div>

    <!-- Date and Location Info -->
    <div class="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
      <div class="flex items-center gap-2">
        <font-awesome-icon :icon="['fas', 'stopwatch']" class="text-black-primary size-4" />
        <span class="text-green-primary font-medium">Until 25th Nov 2025</span>
      </div>
      <div class="flex items-center gap-2">
        <font-awesome-icon :icon="['fas', 'flag']" class="text-black-primary size-4" />
        <span class="text-black-primary font-medium">Virtual</span>
      </div>
    </div>

    <!-- Information Sections -->
    <div class="space-y-4">
      <!-- More Info Section -->
      <div class="border-black-primary border-t pt-4">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h3 class="text-black-primary mb-3 text-base font-bold">More Info</h3>
            <ButtonGroup>
              <SecondaryButton size="sm">www.uni-potsdam.de</SecondaryButton>
              <SecondaryButton size="sm" class="w-9 px-0!">
                <font-awesome-icon :icon="['far', 'copy']" />
              </SecondaryButton>
            </ButtonGroup>
          </div>
          <div>
            <h3 class="text-black-primary mb-3 text-base font-bold">Information Contact</h3>
            <ButtonGroup>
              <SecondaryButton size="sm">educ-application@uni-potsdam.de</SecondaryButton>
              <SecondaryButton size="sm" class="w-9 px-0!">
                <font-awesome-icon :icon="['far', 'copy']" />
              </SecondaryButton>
            </ButtonGroup>
          </div>
        </div>
      </div>

      <!-- Permalink and Platform Section -->
      <div class="border-black-primary border-t pt-4">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h3 class="text-black-primary mb-3 text-base font-bold">Permalink</h3>
            <ButtonGroup>
              <SecondaryButton size="sm">courses.educalliance.eu/course/121</SecondaryButton>
              <SecondaryButton size="sm" class="w-9 px-0!">
                <font-awesome-icon :icon="['far', 'copy']" />
              </SecondaryButton>
            </ButtonGroup>
          </div>
          <div>
            <h3 class="text-black-primary mb-3 text-base font-bold">Platform</h3>
            <ButtonGroup>
              <SecondaryButton size="sm">EDUC Moodle</SecondaryButton>
              <SecondaryButton size="sm" class="w-9 px-0!">
                <font-awesome-icon :icon="['far', 'question-circle']" />
              </SecondaryButton>
            </ButtonGroup>
          </div>
        </div>
      </div>

      <!-- Application Section -->
      <div class="border-black-primary border-t pt-4">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <h3 class="text-black-primary mb-3 text-base font-bold">Application Link</h3>
            <ButtonGroup>
              <SecondaryButton size="sm">www.uni-potsdam.de</SecondaryButton>
              <SecondaryButton size="sm" class="w-9 px-0!">
                <font-awesome-icon :icon="['far', 'copy']" />
              </SecondaryButton>
            </ButtonGroup>
          </div>
          <div>
            <h3 class="text-black-primary mb-3 text-base font-bold">Application Contact</h3>
            <ButtonGroup>
              <SecondaryButton size="sm">educ-application@uni-potsdam.de</SecondaryButton>
              <SecondaryButton size="sm" class="w-9 px-0!">
                <font-awesome-icon :icon="['far', 'copy']" />
              </SecondaryButton>
            </ButtonGroup>
          </div>
        </div>
      </div>

      <!-- Teacher and Code Section -->
      <div class="border-black-primary border-t pt-4">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="flex items-center gap-3">
            <h3 class="text-black-primary text-base font-bold">Teacher</h3>
            <div class="flex items-center gap-2">
              <Avatar size="xs">
                <AvatarImage src="https://cataas.com/cat?type=square&width=24" alt="Teacher" />
                <AvatarFallback>ML</AvatarFallback>
              </Avatar>
              <button
                class="text-black-primary flex items-center gap-2 text-base font-medium hover:underline"
              >
                Marta Lupica Spagnolo, Dr.
                <font-awesome-icon
                  :icon="['fas', 'arrow-up-right-from-square']"
                  class="text-black-sexternary text-xs"
                />
              </button>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <h3 class="text-black-primary text-base font-bold">Code</h3>
            <span class="text-black-primary text-base font-medium">UP-2223-2-LingLand</span>
          </div>
        </div>
      </div>

      <!-- Language and Level Section -->
      <div class="border-black-primary border-t pt-4">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="flex items-center gap-3">
            <h3 class="text-black-primary text-base font-bold">Language/s</h3>
            <span class="text-black-primary text-base font-medium">English</span>
          </div>
          <div class="flex items-center gap-3">
            <h3 class="text-black-primary text-base font-bold">Level</h3>
            <span class="text-black-primary text-base font-medium">B1</span>
          </div>
        </div>
      </div>

      <!-- Capacity and Starting Semester Section -->
      <div class="border-black-primary border-t pt-4">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="flex items-center gap-3">
            <h3 class="text-black-primary text-base font-bold">Capacity</h3>
            <span class="text-black-primary text-base font-medium">Not specified</span>
          </div>
          <div class="flex items-center gap-3">
            <h3 class="text-black-primary text-base font-bold">Starting Semester</h3>
            <span class="text-black-primary text-base font-medium">Both</span>
          </div>
        </div>
      </div>

      <!-- ECTS and Mode Section -->
      <div class="border-black-primary border-y py-4">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="flex items-center gap-3">
            <h3 class="text-black-primary text-base font-bold">ECTS</h3>
            <span class="text-black-primary text-base font-medium">0</span>
          </div>
          <div class="flex items-center gap-3">
            <h3 class="text-black-primary text-base font-bold">Mode</h3>
            <span class="text-black-primary text-base font-medium">Asynchronous</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Collapsible Sections -->
    <Accordion type="multiple" size="sm">
      <AccordionItem value="learning-objectives">
        <AccordionTrigger>Learning objectives</AccordionTrigger>
        <AccordionContent>
          <div class="text-black-primary">
            <p>Learning objectives content will be displayed here when expanded.</p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="details">
        <AccordionTrigger>Details</AccordionTrigger>
        <AccordionContent>
          <div class="text-black-primary space-y-4">
            <div>
              <h4 class="mb-2 font-semibold">Details of the learning scenario</h4>
              <p class="mb-4">
                The web-based training is an asynchronous learning offer, which means that students
                can access it on the platform EDUC Moodle at any time and complete it on their own
                schedule. In concrete terms, the web-based training consists of three teaching
                units, jointly co-designed by teachers from the universities of Potsdam, Masaryk and
                Cagliari. Each unit includes slide-casts (spoken word and slides in English or in
                Italian with English subtitles) and e-exercises to practice the introduced concepts.
                At the end of each unit, recommendations for further readings are provided. Please
                consider a total work-load of about 5 hours for the slide-casts (+ approximately 30
                minutes to complete the e-exercises) The minimum technical requirement you need to
                participate is a computer with internet access.
              </p>
            </div>

            <div>
              <h4 class="mb-2 font-semibold">Schedule/Timetable of the learning offer</h4>
              <p class="mb-4">
                The web-based training is a continuous course that can be completed at any time on
                the platform EDUC Moodle.
              </p>
            </div>

            <div>
              <h4 class="mb-2 font-semibold">Teacher and team members</h4>
              <div class="mb-2">
                <h5 class="font-medium">Author teachers:</h5>
                <ul class="ml-0 list-none space-y-1">
                  <li>Dr. Marta Lupica Spagnolo (Universität Potsdam)</li>
                  <li>Dr. Valeria De Tommaso (Masaryk-University)</li>
                  <li>Prof. Dr. Egle Mocciaro (Masaryk-University)</li>
                  <li>Prof. Dr. Antonietta Marra (University Cagliari)</li>
                  <li>Prof. Dr. Nicoletta Puddu (University Cagliari)</li>
                  <li>Dr. Giulia Grosso (University Cagliari)</li>
                  <li>Dr. Simone Ciccolone (University Cagliari)</li>
                </ul>
              </div>

              <div>
                <h5 class="font-medium">Other team members:</h5>
                <ul class="ml-0 list-none space-y-1">
                  <li>Özlem Kahyalar (Potsdam University)</li>
                  <li>Laura Hermannová (Potsdam University)</li>
                </ul>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="prerequisites">
        <AccordionTrigger>Pre-requisites</AccordionTrigger>
        <AccordionContent>
          <div class="text-black-primary">
            <p>Pre-requisites content will be displayed here when expanded.</p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="further-information">
        <AccordionTrigger>Further Information</AccordionTrigger>
        <AccordionContent>
          <div class="text-black-primary">
            <p>Further information content will be displayed here when expanded.</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </article>
</template>

<script setup lang="ts">
import { Badge } from "../../../atoms/feedback"
import { SecondaryButton } from "../../../atoms/buttons"
import { ButtonGroup } from "../../../molecules/navigation"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../atoms/others/accordion"
import { Avatar, AvatarImage, AvatarFallback } from "../../../atoms/data-display/avatar"

// Description list component showcasing course information with collapsible sections
</script>
