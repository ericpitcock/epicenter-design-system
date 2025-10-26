import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.8578 3.70957C14.8661 1.56434 12 4.96744 12 4.96744C12 4.96744 9.1338 1.56433 5.14211 3.70956C0.403647 6.2561 -0.0241745 16.0807 11.2956 20.7236C11.7432 20.9072 12.2569 20.9072 12.7045 20.7236C24.0243 16.0807 23.5963 6.25611 18.8578 3.70957Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 9V12M12 12V15M12 12H9M12 12L15 12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Health',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
