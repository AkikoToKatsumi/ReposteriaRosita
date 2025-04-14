// src/pages/Faq.tsx
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const faqItemStyle = {
  marginBottom: '20px',
  padding: '15px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  transition: 'transform 0.2s, box-shadow 0.2s',
  
};

const faqItemHoverStyle = {
  transform: 'scale(1.02)',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const faqQuestionStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#8B0000',
  marginBottom: '10px',
};

const faqAnswerStyle = {
  fontSize: '16px',
  color: '#333',
  lineHeight: '1.5',
};

const Faq = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div style={{ padding: '30px', marginTop: '80px' /* Ajusta este valor según la altura del Navbar */ }}>
      <h1 style={{ textAlign: 'center', color: '#8B0000' }}>Preguntas Frecuentes</h1>
      <div style={{ marginTop: '20px' }}>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Qué es Repostería Rosita?</h3>
          <p style={faqAnswerStyle}>Es una empresa dedicada a la elaboración de postres artesanales con ingredientes de alta calidad.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Dónde están ubicados?</h3>
          <p style={faqAnswerStyle}>Estamos ubicados en La Vega, República Dominicana. Contáctanos para más detalles.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Hacen entregas a domicilio?</h3>
          <p style={faqAnswerStyle}>Sí, ofrecemos entregas a domicilio dentro del área local.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Qué métodos de pago aceptan?</h3>
          <p style={faqAnswerStyle}>Aceptamos efectivo, transferencias y pagos con tarjeta.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Puedo hacer pedidos personalizados?</h3>
          <p style={faqAnswerStyle}>¡Claro! Escríbenos con tu idea y te haremos una propuesta a medida.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Cuánto tiempo tardan en entregar un pedido?</h3>
          <p style={faqAnswerStyle}>Dependiendo del pedido, puede tardar entre 24 y 72 horas.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Tienen opciones sin azúcar?</h3>
          <p style={faqAnswerStyle}>Sí, ofrecemos opciones sin azúcar para personas con necesidades especiales.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Ofrecen catering para eventos?</h3>
          <p style={faqAnswerStyle}>Sí, ofrecemos servicios de catering para eventos pequeños y grandes.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Puedo cancelar un pedido?</h3>
          <p style={faqAnswerStyle}>Sí, pero debe hacerse con al menos 24 horas de anticipación.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Qué tipo de postres ofrecen?</h3>
          <p style={faqAnswerStyle}>Ofrecemos pasteles, cupcakes, galletas, tartas y más.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Tienen promociones especiales?</h3>
          <p style={faqAnswerStyle}>Sí, consulta nuestras redes sociales para conocer nuestras promociones actuales.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Cómo puedo contactarlos?</h3>
          <p style={faqAnswerStyle}>Puedes contactarnos a través de WhatsApp, correo electrónico o nuestras redes sociales.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Ofrecen clases de repostería?</h3>
          <p style={faqAnswerStyle}>Sí, ofrecemos talleres de repostería para principiantes y avanzados.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Tienen opciones veganas?</h3>
          <p style={faqAnswerStyle}>Sí, contamos con opciones veganas en nuestro menú.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Puedo solicitar una degustación?</h3>
          <p style={faqAnswerStyle}>Sí, ofrecemos degustaciones para eventos grandes con cita previa.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Cuáles son sus horarios de atención?</h3>
          <p style={faqAnswerStyle}>Estamos disponibles de lunes a sábado de 9:00 AM a 6:00 PM.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Hacen envíos fuera de la ciudad?</h3>
          <p style={faqAnswerStyle}>Por el momento, solo hacemos envíos dentro de La Vega.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Puedo solicitar un diseño específico para un pastel?</h3>
          <p style={faqAnswerStyle}>Sí, trabajamos con diseños personalizados según tus necesidades.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Qué ingredientes utilizan?</h3>
          <p style={faqAnswerStyle}>Utilizamos ingredientes frescos y de alta calidad en todos nuestros productos.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Tienen tienda física?</h3>
          <p style={faqAnswerStyle}>No, trabajamos bajo pedido y entregamos a domicilio.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Puedo hacer un pedido para el mismo día?</h3>
          <p style={faqAnswerStyle}>Depende de la disponibilidad, contáctanos para confirmar.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Ofrecen descuentos por compras al por mayor?</h3>
          <p style={faqAnswerStyle}>Sí, ofrecemos descuentos para pedidos grandes. Contáctanos para más información.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Puedo regalar un pedido a otra persona?</h3>
          <p style={faqAnswerStyle}>Sí, podemos entregar tu pedido como regalo con un mensaje personalizado.</p>
        </div>
        <div
          className="faq-item"
          style={faqItemStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, faqItemHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, faqItemStyle)}
        >
          <h3 style={faqQuestionStyle}>¿Qué pasa si mi pedido llega dañado?</h3>
          <p style={faqAnswerStyle}>Nos aseguramos de que todos los pedidos lleguen en perfectas condiciones. Si ocurre algún problema, contáctanos de inmediato.</p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
