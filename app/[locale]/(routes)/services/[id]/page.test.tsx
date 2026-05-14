import { render, screen, waitFor } from '@testing-library/react';
import ServiceDetailPage from './page';
import { getServiceById } from '@/services/productServices';
import { useTranslation } from '@/lib/i18n/client';
import { useParams } from 'next/navigation';

// Mock de los módulos
jest.mock('@/services/productServices');
jest.mock('@/lib/i18n/client');
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}));
jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));
jest.mock('next/link', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

// Mock de los iconos de lucide-react
jest.mock('lucide-react', () => ({
  CheckCircle: () => <div data-testid="check-circle-icon" />,
  Calendar: () => <div data-testid="calendar-icon" />,
  DollarSign: () => <div data-testid="dollar-icon" />,
  TrendingUp: () => <div data-testid="trending-icon" />,
  Target: () => <div data-testid="target-icon" />,
  Phone: () => <div data-testid="phone-icon" />,
  Mail: () => <div data-testid="mail-icon" />,
  ArrowRight: () => <div data-testid="arrow-icon" />,
}));

const mockServiceData = {
  id: '1',
  code: 'TEST_SERVICE',
  name: 'Test Service',
  shortName: 'Test',
  category: 'Technology',
  subcategory: 'Cloud',
  status: 'Active' as const,
  summary: 'Test summary',
  problemSolved: 'Test problem',
  valueProposition: 'Test value proposition',
  targetIndustries: ['Tech', 'Finance'],
  targetSegments: ['Enterprise', 'SMB'],
  applicableSectors: ['Technology', 'Finance', 'Healthcare'],
  nonApplicableSectors: ['Retail'],
  featuresIncluded: ['Feature 1', 'Feature 2', 'Feature 3'],
  featuresExcluded: ['Excluded 1'],
  useCases: ['Use case 1'],
  prerequisites: ['Prerequisite 1'],
  measurableBenefits: ['Benefit 1', 'Benefit 2'],
  attachments: [],
  billingModels: ['Subscription'],
  implementationFees: [
    {
      id: 'fee1',
      name: 'Setup Fee',
      description: 'Initial setup and configuration',
      pricingModel: 'FIXED',
      billingType: 'ONE_TIME',
      amount: 5000,
      currency: 'USD',
      isRequired: true,
      estimatedTimeline: '2-3 weeks',
      notes: 'Includes training',
      isActive: true,
    },
  ],
  plans: [
    {
      id: 'plan1',
      name: 'GROWTH',
      description: 'Growth plan for scaling businesses',
      billingModel: 'SUBSCRIPTION',
      pricePeriod: 'MONTHLY',
      currency: 'USD',
      region: 'Global',
      segment: 'SMB',
      basePrice: 999,
      includedUsage: 10000,
      setupFee: 0,
      usageUnit: 'requests',
      usagePrice: 0.01,
      minCommitMonths: 12,
      renewalPolicy: 'AUTOMATIC',
      sla: '99.9%',
      validFrom: '2024-01-01',
      validTo: '2025-12-31',
      isActive: true,
    },
    {
      id: 'plan2',
      name: 'ENTERPRISE',
      description: 'Enterprise plan with custom features',
      billingModel: 'SUBSCRIPTION',
      pricePeriod: 'YEARLY',
      currency: 'USD',
      region: 'Global',
      segment: 'Enterprise',
      basePrice: 9999,
      includedUsage: 100000,
      setupFee: 5000,
      usageUnit: 'requests',
      usagePrice: 0.008,
      minCommitMonths: 24,
      renewalPolicy: 'MANUAL',
      sla: '99.99%',
      validFrom: '2024-01-01',
      validTo: '2025-12-31',
      isActive: true,
    },
  ],
  addons: [
    {
      id: 'addon1',
      name: 'Premium Support',
      description: '24/7 priority support',
      pricingType: 'FIXED' as const,
      amount: 500,
      currency: 'USD',
      dependsOnPlanId: 'plan1',
      isActive: true,
    },
  ],
  discountRules: [],
  bundles: [],
  commercialConditions: ['Minimum commitment required'],
  documents: [],
  clientContracts: [],
  coverImageAssetId: 'asset1',
  coverImageUrl: '/images/test-cover.jpg',
  publicEnabled: true,
  isActive: true,
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
};

describe('ServiceDetailPage', () => {
  const mockUseParams = useParams as jest.MockedFunction<typeof useParams>;
  const mockGetServiceById = getServiceById as jest.MockedFunction<typeof getServiceById>;
  const mockUseTranslation = useTranslation as jest.MockedFunction<typeof useTranslation>;

  beforeEach(() => {
    jest.clearAllMocks();

    // Mock de useParams
    mockUseParams.mockReturnValue({
      id: '1',
      locale: 'es',
    });

    // Mock de useTranslation
    mockUseTranslation.mockReturnValue({
      t: (key: string) => {
        // Simular traducciones
        if (key === 'products.TEST_SERVICE.title') return 'Test Service Title';
        if (key === 'products.TEST_SERVICE.valueProposition') return 'Test value proposition';
        if (key === 'products.TEST_SERVICE.category') return 'Technology';
        if (key === 'products.TEST_SERVICE.subcategory') return 'Cloud';
        if (key === 'products.TEST_SERVICE.applicableSectors') {
          return mockServiceData.applicableSectors;
        }
        if (key === 'products.TEST_SERVICE.featuresIncluded') {
          return mockServiceData.featuresIncluded;
        }
        if (key === 'products.TEST_SERVICE.measurableBenefits') {
          return mockServiceData.measurableBenefits;
        }
        if (key === 'products.TEST_SERVICE.plans') {
          return mockServiceData.plans;
        }
        if (key === 'products.TEST_SERVICE.implementationFees') {
          return mockServiceData.implementationFees;
        }
        if (key === 'products.TEST_SERVICE.addons') {
          return mockServiceData.addons;
        }
        
        // Traducciones generales
        if (key === 'detail.features_included') return 'Features Included';
        if (key === 'detail.plan_price') return 'Plans & Pricing';
        if (key === 'detail.plan_label') return 'Choose the perfect plan for your needs';
        if (key === 'detail.included') return 'included';
        if (key === 'detail.setup_free') return 'Free setup';
        if (key === 'detail.no_commitment') return 'No minimum commitment';
        if (key === 'detail.months_minimum') return 'months minimum';
        if (key === 'detail.renewal') return 'Renewal';
        if (key === 'detail.renewal_automatic') return 'Automatic';
        if (key === 'detail.renewal_manual') return 'Manual';
        if (key === 'detail.select_plan') return 'Select Plan';
        if (key === 'detail.measurable_benefits') return 'Measurable Benefits';
        if (key === 'detail.results_you_will_get') return 'Results you will get';
        if (key === 'detail.investment') return 'Investment';
        if (key === 'detail.additional_services') return 'Additional Services';
        if (key === 'detail.ready_to_transform') return 'Ready to Transform Your Business?';
        if (key === 'detail.more_info') return 'Contact us for more information';
        if (key === 'detail.contact_specialist') return 'Contact a Specialist';
        if (key === 'detail.call_now') return 'Call Now';
        if (key === 'detail.response_time') return 'Response within 24 hours';
        
        return key;
      },
      i18n: { changeLanguage: jest.fn() },
      ready: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

    // Mock del servicio
    mockGetServiceById.mockResolvedValue(mockServiceData);
  });

  it('debe renderizar el componente correctamente', async () => {
    render(<ServiceDetailPage />);

    // Verificar que el título se renderiza
    await waitFor(() => {
      expect(screen.getByText('Test Service Title')).toBeInTheDocument();
    });
  });

  it('debe mostrar la imagen de portada', async () => {
    render(<ServiceDetailPage />);

    await waitFor(() => {
      const image = screen.getByAltText('Test Service') as HTMLImageElement;
      expect(image).toBeInTheDocument();
      expect(image.src).toContain('/images/test-cover.jpg');
    });
  });

  it('debe mostrar las categorías del servicio', async () => {
    render(<ServiceDetailPage />);

    await waitFor(() => {
      expect(screen.getByText('Technology')).toBeInTheDocument();
      expect(screen.getByText('Cloud')).toBeInTheDocument();
    });
  });

  it('debe mostrar los sectores aplicables', async () => {
    render(<ServiceDetailPage />);

    await waitFor(() => {
      expect(screen.getByText('Technology')).toBeInTheDocument();
      expect(screen.getByText('Finance')).toBeInTheDocument();
      expect(screen.getByText('Healthcare')).toBeInTheDocument();
    });
  });

  it('debe mostrar las características incluidas', async () => {
    render(<ServiceDetailPage />);

    await waitFor(() => {
      expect(screen.getByText('Features Included')).toBeInTheDocument();
      expect(screen.getByText('Feature 1')).toBeInTheDocument();
      expect(screen.getByText('Feature 2')).toBeInTheDocument();
      expect(screen.getByText('Feature 3')).toBeInTheDocument();
    });
  });

  it('debe mostrar los planes disponibles', async () => {
    render(<ServiceDetailPage />);

    await waitFor(() => {
      expect(screen.getByText('Plans & Pricing')).toBeInTheDocument();
      expect(screen.getByText('GROWTH')).toBeInTheDocument();
      expect(screen.getByText('ENTERPRISE')).toBeInTheDocument();
      expect(screen.getByText('$999')).toBeInTheDocument();
      expect(screen.getByText('$9,999')).toBeInTheDocument();
    });
  });

  it('debe mostrar el badge "Más popular" solo en el plan GROWTH', async () => {
    render(<ServiceDetailPage />);

    await waitFor(() => {
      const popularBadges = screen.getAllByText('Más popular');
      expect(popularBadges).toHaveLength(1);
    });
  });

  it('debe mostrar los beneficios medibles', async () => {
    render(<ServiceDetailPage />);

    await waitFor(() => {
      expect(screen.getByText('Measurable Benefits')).toBeInTheDocument();
      expect(screen.getByText('Benefit 1')).toBeInTheDocument();
      expect(screen.getByText('Benefit 2')).toBeInTheDocument();
    });
  });

  it('debe mostrar las tarifas de implementación', async () => {
    render(<ServiceDetailPage />);

    await waitFor(() => {
      expect(screen.getByText('Investment')).toBeInTheDocument();
      expect(screen.getByText('Setup Fee')).toBeInTheDocument();
      expect(screen.getByText('$5,000')).toBeInTheDocument();
      expect(screen.getByText('2-3 weeks')).toBeInTheDocument();
    });
  });

  it('debe mostrar los addons disponibles', async () => {
    render(<ServiceDetailPage />);

    await waitFor(() => {
      expect(screen.getByText('Additional Services')).toBeInTheDocument();
      expect(screen.getByText('Premium Support')).toBeInTheDocument();
      expect(screen.getByText('$500')).toBeInTheDocument();
    });
  });

  it('debe mostrar el llamado a la acción (CTA)', async () => {
    render(<ServiceDetailPage />);

    await waitFor(() => {
      expect(screen.getByText('Ready to Transform Your Business?')).toBeInTheDocument();
      expect(screen.getByText('Contact a Specialist')).toBeInTheDocument();
      expect(screen.getByText('Call Now')).toBeInTheDocument();
    });
  });

  it('debe tener enlaces correctos en los CTA', async () => {
    render(<ServiceDetailPage />);

    await waitFor(() => {
      const contactLink = screen.getByText('Contact a Specialist').closest('a');
      expect(contactLink).toHaveAttribute('href', '/contact');

      const callLink = screen.getByText('Call Now').closest('a');
      expect(callLink).toHaveAttribute('href', 'tel:+573043899883');
    });
  });

  it('debe manejar la ausencia de datos opcionales', async () => {
    // Mock con datos mínimos
    const minimalServiceData = {
      ...mockServiceData,
      applicableSectors: [],
      featuresIncluded: [],
      measurableBenefits: [],
      implementationFees: [],
      addons: [],
    };
    mockGetServiceById.mockResolvedValue(minimalServiceData);

    render(<ServiceDetailPage />);

    await waitFor(() => {
      expect(screen.getByText('Test Service Title')).toBeInTheDocument();
      // Verificar que no se renderizan secciones vacías
      expect(screen.queryByText('Features Included')).not.toBeInTheDocument();
      expect(screen.queryByText('Measurable Benefits')).not.toBeInTheDocument();
      expect(screen.queryByText('Investment')).not.toBeInTheDocument();
      expect(screen.queryByText('Additional Services')).not.toBeInTheDocument();
    });
  });

  it('debe manejar el caso de que no haya planes', async () => {
    const serviceWithoutPlans = {
      ...mockServiceData,
      plans: [],
    };
    mockGetServiceById.mockResolvedValue(serviceWithoutPlans);

    render(<ServiceDetailPage />);

    await waitFor(() => {
      expect(screen.queryByText('Plans & Pricing')).not.toBeInTheDocument();
    });
  });

  it('debe usar imagen por defecto si no hay coverImageUrl', async () => {
    const serviceWithoutImage = {
      ...mockServiceData,
      coverImageUrl: '',
    };
    mockGetServiceById.mockResolvedValue(serviceWithoutImage);

    render(<ServiceDetailPage />);

    await waitFor(() => {
      const image = screen.getByAltText('Test Service') as HTMLImageElement;
      expect(image.src).toContain('/background/Focused_steam_velocity.png');
    });
  });

  it('debe manejar errores en la carga del servicio', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    mockGetServiceById.mockRejectedValue(new Error('Error loading service'));

    render(<ServiceDetailPage />);

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        'Error loading services:',
        expect.any(Error)
      );
    });

    consoleErrorSpy.mockRestore();
  });

  it('debe ejecutar el efecto solo cuando serviceId está disponible', async () => {
    mockUseParams.mockReturnValue({
      id: undefined,
      locale: 'es',
    });

    render(<ServiceDetailPage />);

    // Verificar que getServiceById no fue llamado
    expect(mockGetServiceById).not.toHaveBeenCalled();
  });

  it('debe renderizar los botones de selección de plan', async () => {
    render(<ServiceDetailPage />);

    await waitFor(() => {
      const selectButtons = screen.getAllByText('Select Plan');
      expect(selectButtons).toHaveLength(2);
    });
  });

  it('debe mostrar los precios con formato de miles', async () => {
    render(<ServiceDetailPage />);

    await waitFor(() => {
      expect(screen.getByText('$999')).toBeInTheDocument();
      expect(screen.getByText('$9,999')).toBeInTheDocument();
    });
  });
});