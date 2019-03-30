export const actionPlan = (list) => {
    const actionTemplate = `
    <div id="action-plan-tmpl">
        <h1>Plan de Acción</h1>
        <img src="" alt="">
        <p>Explicación. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit omnis, hic tempore placeat quibusdam ducimus nulla ipsam odio perferendis accusantium magnam recusandae deleniti dignissimos ullam inventore, earum reiciendis odit cum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quidem recusandae! Suscipit et, consectetur tempore ducimus culpa sit deleniti facilis reprehenderit dolorum tenetur ab unde illo impedit. Optio, error earum.
        Nihil iste illo nemo itaque fugit facilis! Ullam velit facere rem consequuntur enim cupiditate quibusdam obcaecati nostrum atque rerum quia aliquid maxime qui iste facilis, laudantium ad, non architecto perferendis.
        Veritatis autem mollitia aperiam, vero fugiat ipsum nihil dolor, at rerum voluptas ab placeat pariatur amet ipsam distinctio. Nihil at sint nisi perspiciatis dolorem ab sapiente aliquid, autem sit dolore.</p>
    </div>`
    const actionElement = document.createElement('div');
    actionElement.innerHTML = actionTemplate;

    // const ul = actionElement.querySelector('#action-plan-tmpl');
    // list.forEach((list) => {
    //     ul.appendChild(actionPlanObj(list))
    // });

    return actionElement;
}

const actionPlanObj = () => {
    const liElement = document.createElement('li');
    liElement.classList.add('mdl-list__item')
    liElement.innerHTML = `
        <div id="stereotype-result">

        </div>`;

    return liElement;
};