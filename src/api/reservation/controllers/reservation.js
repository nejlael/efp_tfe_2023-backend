/* const ReservationController = {
  create: async (ctx) => {
    const { courseID, numeroClient } = ctx.request.body;

    // Créer une nouvelle réservation
    const reservation = await strapi.services.reservation.create({
      numeroClient: numeroClient,
      courseID: courseID,
    });

    // Envoyer une réponse de succès
    return ctx.send({ message: 'Réservation effectuée avec succès' });
  },
};

module.exports = ReservationController; */
