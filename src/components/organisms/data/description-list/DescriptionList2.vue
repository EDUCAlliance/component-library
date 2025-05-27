<template>
  <article class="bg-white-primary mx-auto max-w-4xl">
    <!-- Main Headline -->
    <div class="mb-8">
      <h1 class="text-4xl leading-tight font-bold">
        Call for research projects demanding access to EDUC research infrastructures
      </h1>
    </div>

    <!-- Call Deadline Section -->
    <div class="border-black-primary mb-6 border-b pb-6">
      <div class="flex items-center gap-3">
        <h3 class="text-violet-primary text-2xl font-bold">Call deadline</h3>
        <span>October 31, 2024</span>
      </div>
    </div>

    <!-- Main Content Section -->
    <div class="mt-6 space-y-6">
      <!-- Description and Action Buttons -->
      <div class="space-y-6">
        <p class="leading-relaxed">
          Masaryk University, University of Pécs, and The Vasyl Stefanyk Precarpathian National
          University offer access to their technologies and services available via core facilities
          and research infrastructures under EDUC-WIDE project. Individual facilities offered by the
          three universities providing access can be found on our Database of EDUC Research
          infrastructures. For a full list of the respective facilities see the call documentation
          below.
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-col gap-4 sm:flex-row">
          <SoftButton color="violet" size="base">Apply for access</SoftButton>
          <ButtonGroup>
            <SecondaryButton size="base">educ.openup.education/facilities</SecondaryButton>
            <SecondaryButton size="base" class="w-12 px-0!">
              <font-awesome-icon :icon="['far', 'copy']" class="size-4" />
            </SecondaryButton>
          </ButtonGroup>
        </div>
      </div>

      <!-- Aim of the call -->
      <div class="space-y-4 pt-2">
        <h3 class="text-violet-primary text-2xl font-bold">Aim of the call</h3>
        <p class="leading-relaxed">
          The aim of this call for proposals is to stimulate direct interactions between EDUC
          partners and promote the existing research infrastructures across the consortium, namely
          in the Widening countries (Czechia, Hungary, Ukraine). Researchers and Ph.D. candidates
          from the EDUC consortium are invited to propose research projects that can be implemented
          utilising available research infrastructures. Within one project proposal, the applicant
          can ask for one or more services/technologies from one or more EDUC partners participating
          in the call.
        </p>
      </div>

      <!-- Important documents/website -->
      <div class="space-y-4">
        <h3 class="text-violet-primary text-2xl font-bold">Important documents/website</h3>
        <div class="flex flex-col gap-4">
          <ButtonGroup>
            <SecondaryButton size="base">Download the call documentation</SecondaryButton>
            <SecondaryButton size="base" class="w-12 px-0!">
              <font-awesome-icon :icon="['far', 'copy']" class="size-4" />
            </SecondaryButton>
          </ButtonGroup>

          <ButtonGroup>
            <SecondaryButton size="base"
              >Slides from the webinars & Experiences from the last call</SecondaryButton
            >
            <SecondaryButton size="base" class="w-12 px-0!">
              <font-awesome-icon :icon="['far', 'copy']" class="size-4" />
            </SecondaryButton>
          </ButtonGroup>

          <ButtonGroup>
            <SecondaryButton size="base">The recording from the webinar</SecondaryButton>
            <SecondaryButton size="base" class="w-12 px-0!">
              <font-awesome-icon :icon="['far', 'copy']" class="size-4" />
            </SecondaryButton>
          </ButtonGroup>

          <ButtonGroup>
            <SecondaryButton size="base">Final report</SecondaryButton>
            <SecondaryButton size="base" class="w-12 px-0!">
              <font-awesome-icon :icon="['far', 'copy']" class="size-4" />
            </SecondaryButton>
          </ButtonGroup>
        </div>
      </div>

      <!-- Applicants Section -->
      <div class="mb-6 space-y-4">
        <h3 class="text-violet-primary text-2xl font-bold">Applicants</h3>
        <div class="space-y-4">
          <ul class="list-inside list-disc">
            <li>Researchers working at EDUC member institutions</li>
            <li>Ph.D. candidate of EDUC member institutions</li>
          </ul>

          <div class="space-y-4">
            <p class="font-bold">The EDUC member institutions are:</p>
            <div class="flex flex-col gap-2">
              <GhostButton size="auto">
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
                University of Pécs
              </GhostButton>
              <GhostButton size="auto">
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
                University of Potsdam
              </GhostButton>
              <GhostButton size="auto">
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
                University of Cagliari
              </GhostButton>
              <GhostButton size="auto">
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
                Jaume I University
              </GhostButton>
              <GhostButton size="auto">
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
                University of South-Eastern Norway
              </GhostButton>
              <GhostButton size="auto">
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
                Masaryk University
              </GhostButton>
              <GhostButton size="auto">
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
                University Paris Nanterre
              </GhostButton>
              <GhostButton size="auto">
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
                University of Rennes
              </GhostButton>
              <GhostButton size="auto">
                <font-awesome-icon :icon="['fas', 'arrow-right']" class="size-3" />
                Vasyl Stefanyk Precarpathian National University
              </GhostButton>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Collapsible Sections -->
    <Accordion type="multiple" class="border-black-primary border-t">
      <AccordionItem value="further-information">
        <AccordionTrigger class="text-violet-primary">Further information</AccordionTrigger>
        <AccordionContent>
          <div>
            <p>Further information content will be displayed here when expanded.</p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="experiences">
        <AccordionTrigger class="text-violet-primary"
          >Experiences from the last call</AccordionTrigger
        >
        <AccordionContent>
          <div>
            <p>Experiences from previous calls will be displayed here when expanded.</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </article>
</template>

<script setup lang="ts">
import { SoftButton, SecondaryButton, GhostButton } from "../../../atoms/buttons"
import { ButtonGroup } from "../../../molecules/navigation"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../atoms/others/accordion"

// Description list component for research project calls with action buttons and institutional links
</script>
