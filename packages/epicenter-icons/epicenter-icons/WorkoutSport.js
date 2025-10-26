import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 4.5C16 5.32843 15.3284 6 14.5 6C13.6716 6 13 5.32843 13 4.5C13 3.67157 13.6716 3 14.5 3C15.3284 3 16 3.67157 16 4.5Z' })
const _hoisted2 = h('path', { 'd': 'M5 11.9999L6.84833 8.82496C6.97028 8.61548 7.16417 8.45742 7.39393 8.38019L11.0748 7.14294C11.3453 7.05201 11.6417 7.08099 11.8895 7.22257L14.7371 8.8497C14.9085 8.94766 15.0471 9.09416 15.1354 9.27075L16.155 11.3099C16.3583 11.7165 16.8102 11.9348 17.255 11.8414L19 11.4748', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M11.5 7.5L8 14M8 14L9.97341 16.7628C10.2723 17.1812 10.2051 17.758 9.81818 18.0966L6.5 21M8 14H11.5M17 18L14.3 14.4C14.1111 14.1482 13.8148 14 13.5 14H11.5M11.5 14L14.9763 9.03382', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'WorkoutSport',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
